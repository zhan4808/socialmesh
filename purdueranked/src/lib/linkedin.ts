import { 
  LinkedInProfileResponse, 
  LinkedInEducation, 
  LinkedInExperience,
  LinkedInProject,
  LinkedInHonor
} from './types';

/**
 * Parse a date string from LinkedIn into a Date object
 * Handles various date formats and returns null if invalid
 */
export function parseLinkedInDate(dateString: string | null): Date | null {
  if (!dateString) return null;
  
  // Cleanup the date string
  const cleaned = dateString.trim();
  if (!cleaned) return null;
  
  // Try different date formats
  try {
    // Try standard format first
    const date = new Date(cleaned);
    if (!isNaN(date.getTime())) {
      return date;
    }
    
    // Try Month Year format (e.g., "Jan 2022")
    const monthYearMatch = cleaned.match(/([A-Za-z]+)\s+(\d{4})/);
    if (monthYearMatch) {
      const [_, month, year] = monthYearMatch;
      const monthIndex = new Date(`${month} 1, 2000`).getMonth();
      if (!isNaN(monthIndex)) {
        return new Date(parseInt(year), monthIndex, 1);
      }
    }
    
    // If it only contains a year
    const yearMatch = cleaned.match(/^(\d{4})$/);
    if (yearMatch) {
      return new Date(parseInt(yearMatch[1]), 0, 1);
    }
    
    return null;
  } catch (e) {
    console.error(`Error parsing date: ${dateString}`, e);
    return null;
  }
}

/**
 * Extract major field from education data
 */
export function extractMajorFromEducation(educations: LinkedInEducation[]): string | null {
  if (!educations || educations.length === 0) return null;
  
  // Look for Computer Science or related fields
  for (const edu of educations) {
    const fieldOfStudy = edu.fieldOfStudy?.toLowerCase();
    if (fieldOfStudy && (
      fieldOfStudy.includes('computer') ||
      fieldOfStudy.includes('software') ||
      fieldOfStudy.includes('information') ||
      fieldOfStudy.includes('data')
    )) {
      return edu.fieldOfStudy;
    }
  }
  
  // Return first field of study if no CS-related field found
  return educations[0].fieldOfStudy;
}

/**
 * Extract current job title from experiences
 */
export function extractCurrentTitle(experiences: LinkedInExperience[]): string | null {
  if (!experiences || experiences.length === 0) return null;
  
  // Find current position
  const currentExp = experiences.find(exp => exp.isCurrent);
  if (currentExp) {
    return currentExp.title;
  }
  
  // If no current position, return most recent
  return experiences[0].title;
}

/**
 * Extract current company from experiences
 */
export function extractCurrentCompany(experiences: LinkedInExperience[]): string | null {
  if (!experiences || experiences.length === 0) return null;
  
  // Find current position
  const currentExp = experiences.find(exp => exp.isCurrent);
  if (currentExp) {
    return currentExp.company;
  }
  
  // If no current position, return most recent
  return experiences[0].company;
}

/**
 * Determine if a person is an alumni based on education
 */
export function isAlumni(educations: LinkedInEducation[]): boolean {
  if (!educations || educations.length === 0) return false;
  
  // Person is alumni if they have completed their most recent education
  const mostRecent = educations[0];
  return !mostRecent.isCurrent && !!mostRecent.endDate;
}

/**
 * Transform LinkedIn profile response to our database model
 */
export function transformLinkedInProfile(data: LinkedInProfileResponse) {
  const alumni = isAlumni(data.educations);
  
  // Transform experiences
  const experiences = data.experiences.map(exp => ({
    title: exp.title,
    companyName: exp.company,
    location: exp.location,
    description: exp.description,
    skills: exp.skills,
    media: exp.media,
    startDate: parseLinkedInDate(exp.startDate) || new Date(),
    endDate: parseLinkedInDate(exp.endDate),
    isCurrent: exp.isCurrent
  }));
  
  // Transform educations
  const educations = data.educations.map(edu => ({
    school: edu.school,
    degree: edu.degree,
    fieldOfStudy: edu.fieldOfStudy,
    description: edu.description,
    grade: edu.grade,
    activities: edu.activities,
    skills: edu.skills,
    media: edu.media,
    startDate: parseLinkedInDate(edu.startDate) || new Date(),
    endDate: parseLinkedInDate(edu.endDate),
    isCurrent: edu.isCurrent
  }));
  
  // Transform projects
  const projects = data.projects.map(proj => ({
    title: proj.title,
    description: proj.description,
    url: proj.url,
    skills: proj.skills,
    contributors: proj.contributors,
    association: proj.association,
    media: proj.media,
    startDate: parseLinkedInDate(proj.startDate),
    endDate: parseLinkedInDate(proj.endDate)
  }));
  
  // Transform honors
  const honors = data.honors_awards.map(honor => ({
    title: honor.title,
    issuer: honor.issuer,
    date: honor.date,
    description: honor.description,
    association: honor.association,
    media: honor.media
  }));
  
  return {
    linkedinId: data.profile_url.split('/').pop() || '',
    name: data.name,
    url: data.profile_url,
    imageUrl: data.image_url,
    isAlumni: alumni,
    experiences,
    educations,
    projects,
    honors
  };
} 