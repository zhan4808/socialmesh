import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const isAlumni = searchParams.get("isAlumni") === "true";

    // Get two random profiles
    const profiles = await db.profile.findMany({
      where: {
        isAlumni: isAlumni,
      },
      include: {
        experiences: true,
        educations: true,
        projects: true,
        skills: true,
      },
      take: 2,
      orderBy: {
        // Random order using a trick with createdAt
        createdAt: Math.random() > 0.5 ? "asc" : "desc",
      },
    });

    // If we don't have enough profiles, return an error
    if (profiles.length < 2) {
      return NextResponse.json(
        { error: "Not enough profiles for comparison" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      profiles,
    });
  } catch (error: any) {
    console.error("Error fetching profiles for comparison:", error);
    return NextResponse.json(
      { error: "Failed to fetch profiles", details: error.message },
      { status: 500 }
    );
  }
} 