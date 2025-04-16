"use client";

import { type Profile } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface StudentCardProps {
  profile: Profile;
  isWinner?: boolean;
  isLoser?: boolean;
}

export function StudentCard({ 
  profile, 
  isWinner = false, 
  isLoser = false 
}: StudentCardProps) {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  // Function to format date to display year and month
  const formatDate = (dateString: string | Date | null | undefined) => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: 'numeric', month: 'short' });
  };

  // Get most recent education
  const education = profile.educations[0] || null;
  
  // Get most recent experience
  const experience = profile.experiences[0] || null;

  // Determine border color based on win/loss
  let cardClass = "bg-white border rounded-lg p-4 shadow-sm transition-all";
  if (isWinner) {
    cardClass += " border-green-500 shadow-green-100";
  } else if (isLoser) {
    cardClass += " border-red-500 shadow-red-100";
  } else {
    cardClass += " border-gray-200 hover:border-gray-300";
  }

  return (
    <div className={cardClass}>
      <div className="flex items-start gap-3 mb-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={profile.imageUrl || ""} alt={profile.name} />
          <AvatarFallback className="text-lg">{initials}</AvatarFallback>
        </Avatar>
        
        <div>
          <h3 className="text-lg font-bold">{profile.name}</h3>
          <p className="text-sm text-gray-600">{profile.major || profile.currentTitle || "Purdue Student"}</p>
          
          {/* Current company if available */}
          {profile.currentCompany && (
            <p className="text-xs text-gray-500 mt-1">{profile.currentCompany}</p>
          )}
          
          {/* Display ELO rating */}
          <p className="text-xs font-semibold mt-1">
            ELO Rating: {profile.eloRating}
          </p>
        </div>
      </div>
      
      {/* Education */}
      {education && (
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-gray-700">Education</h4>
          <div className="mt-1 border-l-2 border-gray-200 pl-3">
            <p className="text-sm">{education.school}</p>
            {education.degree && (
              <p className="text-xs text-gray-600">{education.degree}{education.fieldOfStudy ? `, ${education.fieldOfStudy}` : ''}</p>
            )}
            <p className="text-xs text-gray-500">
              {formatDate(education.startDate)} - {education.isCurrent ? "Present" : formatDate(education.endDate)}
            </p>
          </div>
        </div>
      )}

      {/* Experience */}
      {experience && (
        <div className="mb-3">
          <h4 className="text-sm font-semibold text-gray-700">Experience</h4>
          <div className="mt-1 border-l-2 border-gray-200 pl-3">
            <p className="text-sm">{experience.title}</p>
            <p className="text-xs text-gray-600">{experience.companyName}</p>
            <p className="text-xs text-gray-500">
              {formatDate(experience.startDate)} - {experience.isCurrent ? "Present" : formatDate(experience.endDate)}
            </p>
          </div>
        </div>
      )}

      {/* Skills (show first 5) */}
      {profile.skills.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Skills</h4>
          <div className="flex flex-wrap gap-1">
            {profile.skills.slice(0, 5).map((skill) => (
              <span
                key={skill.id}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {skill.name}
              </span>
            ))}
            {profile.skills.length > 5 && (
              <span className="text-xs text-gray-500">+{profile.skills.length - 5} more</span>
            )}
          </div>
        </div>
      )}

      {/* Win/Loss indicator */}
      {isWinner && (
        <div className="mt-4 text-center bg-green-100 text-green-800 py-1 px-3 rounded-full text-sm font-medium">
          Winner
        </div>
      )}
      {isLoser && (
        <div className="mt-4 text-center bg-red-100 text-red-800 py-1 px-3 rounded-full text-sm font-medium">
          Second Place
        </div>
      )}
    </div>
  );
}
