import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    
    if (!session?.user) {
      return NextResponse.json(
        { error: "You must be logged in to scrape your profile" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { linkedinUrl } = body;

    if (!linkedinUrl) {
      return NextResponse.json(
        { error: "LinkedIn URL is required" },
        { status: 400 }
      );
    }

    // Call the LinkedIn scraper API
    const scraperApiUrl = process.env.LINKEDIN_SCRAPER_API_URL || "http://localhost:8000";
    const response = await axios.post(`${scraperApiUrl}/scrape-profile`, {
      linkedin_url: linkedinUrl
    });

    if (!response.data.success) {
      return NextResponse.json(
        { error: "Failed to scrape profile", details: response.data.message },
        { status: 500 }
      );
    }

    const profileData = response.data.profile;
    
    // Check if the profile already exists
    const existingProfile = await db.profile.findUnique({
      where: { linkedinId: profileData.linkedinId }
    });

    let profile;
    
    if (existingProfile) {
      // Update existing profile
      profile = await db.profile.update({
        where: { id: existingProfile.id },
        data: {
          name: profileData.name,
          url: profileData.url,
          imageUrl: profileData.imageUrl,
          currentTitle: profileData.currentTitle,
          currentCompany: profileData.currentCompany,
          isAlumni: profileData.isAlumni,
          userId: session.user.id,
          // Update relationships separately for clarity
        }
      });
      
      // Delete existing relationships and recreate them
      await db.experience.deleteMany({ where: { profileId: profile.id } });
      await db.education.deleteMany({ where: { profileId: profile.id } });
      await db.project.deleteMany({ where: { profileId: profile.id } });
      await db.skill.deleteMany({ where: { profileId: profile.id } });
      
    } else {
      // Create new profile
      profile = await db.profile.create({
        data: {
          linkedinId: profileData.linkedinId,
          name: profileData.name,
          url: profileData.url,
          imageUrl: profileData.imageUrl,
          currentTitle: profileData.currentTitle,
          currentCompany: profileData.currentCompany,
          isAlumni: profileData.isAlumni,
          userId: session.user.id,
          // Relations will be created separately
        }
      });
    }
    
    // Create experiences
    if (profileData.experiences && profileData.experiences.length > 0) {
      await Promise.all(
        profileData.experiences.map((exp: any) =>
          db.experience.create({
            data: {
              title: exp.title,
              companyName: exp.companyName,
              location: exp.location,
              description: exp.description,
              startDate: new Date(exp.startDate),
              endDate: exp.endDate ? new Date(exp.endDate) : null,
              isCurrent: exp.isCurrent || false,
              profileId: profile.id
            }
          })
        )
      );
    }
    
    // Create educations
    if (profileData.educations && profileData.educations.length > 0) {
      await Promise.all(
        profileData.educations.map((edu: any) =>
          db.education.create({
            data: {
              school: edu.school,
              degree: edu.degree,
              fieldOfStudy: edu.fieldOfStudy,
              startDate: new Date(edu.startDate),
              endDate: edu.endDate ? new Date(edu.endDate) : null,
              isCurrent: edu.isCurrent || false,
              profileId: profile.id
            }
          })
        )
      );
    }
    
    // Create projects
    if (profileData.projects && profileData.projects.length > 0) {
      await Promise.all(
        profileData.projects.map((proj: any) =>
          db.project.create({
            data: {
              title: proj.title,
              description: proj.description,
              url: proj.url,
              startDate: proj.startDate ? new Date(proj.startDate) : null,
              endDate: proj.endDate ? new Date(proj.endDate) : null,
              profileId: profile.id
            }
          })
        )
      );
    }
    
    // Create skills
    if (profileData.skills && profileData.skills.length > 0) {
      await Promise.all(
        profileData.skills.map(async (skill: any) => {
          try {
            return await db.skill.create({
              data: {
                name: skill.name,
                profileId: profile.id
              }
            });
          } catch (e) {
            // Ignore duplicates
            return null;
          }
        })
      );
    }
    
    // Update user record to link to this profile
    await db.user.update({
      where: { id: session.user.id },
      data: { profile: { connect: { id: profile.id } } }
    });

    return NextResponse.json({
      success: true,
      profile: {
        id: profile.id,
        name: profile.name,
        url: profile.url,
        imageUrl: profile.imageUrl,
        currentTitle: profile.currentTitle,
        currentCompany: profile.currentCompany,
        eloRating: profile.eloRating,
      }
    });
    
  } catch (error: any) {
    console.error("Profile scraping error:", error);
    return NextResponse.json(
      { error: "Failed to process profile", details: error.message },
      { status: 500 }
    );
  }
} 