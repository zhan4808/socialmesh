import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const isAlumni = searchParams.get("isAlumni") === "true";
    const limit = parseInt(searchParams.get("limit") || "20", 10);
    const offset = parseInt(searchParams.get("offset") || "0", 10);

    // Get profiles sorted by ELO rating
    const profiles = await db.profile.findMany({
      where: {
        isAlumni: isAlumni,
      },
      orderBy: {
        eloRating: "desc",
      },
      select: {
        id: true,
        name: true,
        url: true,
        imageUrl: true,
        currentTitle: true,
        currentCompany: true,
        eloRating: true,
        major: true,
      },
      skip: offset,
      take: limit,
    });

    // Get total count
    const total = await db.profile.count({
      where: {
        isAlumni: isAlumni,
      },
    });

    return NextResponse.json({
      success: true,
      profiles,
      pagination: {
        total,
        offset,
        limit,
        hasMore: offset + limit < total,
      },
    });
  } catch (error: any) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json(
      { error: "Failed to fetch leaderboard", details: error.message },
      { status: 500 }
    );
  }
} 