import { NextResponse } from "next/server";
import axios from "axios";
import { db } from "@/lib/db";
import { transformLinkedInProfile } from "@/lib/linkedin";
import { LinkedInProfileResponse } from "@/lib/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    // Parse the request body
    const { url } = await req.json();
    
    if (!url || !url.includes("linkedin.com/in/")) {
      return NextResponse.json(
        { error: "Invalid LinkedIn profile URL" },
        { status: 400 }
      );
    }
    
    // Call the LinkedIn scraper API
    const scraperApiUrl = process.env.LINKEDIN_SCRAPER_API_URL;
    if (!scraperApiUrl) {
      return NextResponse.json(
        { error: "LinkedIn scraper API URL not configured" },
        { status: 500 }
      );
    }
    
    // Make the API call to scrape the profile
    const response = await axios.post(`${scraperApiUrl}/scrape-profile`, {
      url: url,
      include_skills: true,
    });
    
    if (!response.data || response.data.error) {
      return NextResponse.json(
        { error: response.data?.error || "Failed to scrape profile" },
        { status: 500 }
      );
    }
    
    // Transform the data to our model format
    const profileData = transformLinkedInProfile(response.data.profile as LinkedInProfileResponse);
    
    // Check if profile already exists
    const existingProfile = await db.profile.findUnique({
      where: { url: profileData.url },
    });
    
    let profile;
    
    if (existingProfile) {
      // Update existing profile
      profile = await db.profile.update({
        where: { id: existingProfile.id },
        data: {
          name: profileData.name,
          imageUrl: profileData.imageUrl,
          isAlumni: profileData.isAlumni,
          // Delete existing relationships and create new ones
          experiences: {
            deleteMany: {},
            create: profileData.experiences,
          },
          educations: {
            deleteMany: {},
            create: profileData.educations,
          },
          projects: {
            deleteMany: {},
            create: profileData.projects,
          },
          honors: {
            deleteMany: {},
            create: profileData.honors,
          }
        },
        include: {
          experiences: true,
          educations: true,
          projects: true,
          honors: true,
        },
      });
    } else {
      // Create new profile
      profile = await db.profile.create({
        data: {
          linkedinId: profileData.linkedinId,
          name: profileData.name,
          url: profileData.url,
          imageUrl: profileData.imageUrl,
          isAlumni: profileData.isAlumni,
          experiences: {
            create: profileData.experiences,
          },
          educations: {
            create: profileData.educations,
          },
          projects: {
            create: profileData.projects,
          },
          honors: {
            create: profileData.honors,
          }
        },
        include: {
          experiences: true,
          educations: true,
          projects: true,
          honors: true,
        },
      });
    }
    
    return NextResponse.json({ 
      profile,
      message: existingProfile ? "Profile updated" : "Profile created" 
    });
  } catch (error) {
    console.error("Error in profile scraping:", error);
    return NextResponse.json(
      { error: "Failed to scrape profile" },
      { status: 500 }
    );
  }
} 