export interface Student {
  id: string;
  name: string;
  major: string;
  gradYear: number;
  gpa: number;
  internships: number;
  projects: number;
  leetcodeProblems: number;
  githubContributions: number;
  score: number;
  avatarUrl: string;
}

export type MetricKey = 'gradYear' | 'gpa' | 'internships' | 'projects' | 'leetcodeProblems' | 'githubContributions';

export interface ComparisonResult {
  winner: Student;
  loser: Student;
  metric: MetricKey;
  description: string;
}

export type MetricInfo = {
  [key in MetricKey]: {
    label: string;
    description: string;
  }
};

// Database-related types
export interface Profile {
  id: string;
  linkedinId: string;
  name: string;
  url: string;
  imageUrl: string | null;
  major: string | null;
  currentTitle: string | null;
  currentCompany: string | null;
  eloRating: number;
  isAlumni: boolean;
  experiences: Experience[];
  educations: Education[];
  projects: Project[];
  honors: Honor[];
  skills: Skill[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  title: string;
  companyName: string;
  location: string | null;
  description: string | null;
  startDate: Date;
  endDate: Date | null;
  isCurrent: boolean;
  profileId: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string | null;
  fieldOfStudy: string | null;
  description: string | null;
  grade: string | null;
  activities: string | null;
  skills: string | null;
  media: string | null;
  startDate: Date;
  endDate: Date | null;
  isCurrent: boolean;
  profileId: string;
}

export interface Project {
  id: string;
  title: string;
  description: string | null;
  url: string | null;
  skills: string | null;
  contributors: string | null;
  association: string | null;
  media: string | null;
  startDate: Date | null;
  endDate: Date | null;
  profileId: string;
}

export interface Skill {
  id: string;
  name: string;
  profileId: string;
}

export interface Honor {
  id: string;
  title: string;
  issuer: string | null;
  date: string | null;
  description: string | null;
  association: string | null;
  media: string | null;
  profileId: string;
}

export type VoteResult = 'FIRST_WON' | 'SECOND_WON' | 'TIE';

// LinkedIn API related types
export interface LinkedInProfileResponse {
  profile_url: string;
  name: string;
  image_url: string | null;
  experiences: LinkedInExperience[];
  educations: LinkedInEducation[];
  projects: LinkedInProject[];
  honors_awards: LinkedInHonor[];
  skills: string[];
}

export interface LinkedInExperience {
  title: string;
  company: string;
  location: string | null;
  description: string | null;
  skills: string | null;
  media: string | null;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
}

export interface LinkedInEducation {
  school: string;
  degree: string | null;
  fieldOfStudy: string | null;
  description: string | null;
  grade: string | null;
  activities: string | null;
  skills: string | null;
  media: string | null;
  startDate: string;
  endDate: string | null;
  isCurrent: boolean;
}

export interface LinkedInProject {
  title: string;
  description: string | null;
  url: string | null;
  skills: string | null;
  contributors: string | null;
  association: string | null;
  media: string | null;
  startDate: string | null;
  endDate: string | null;
}

export interface LinkedInHonor {
  title: string;
  issuer: string | null;
  date: string | null;
  description: string | null;
  association: string | null;
  media: string | null;
}
