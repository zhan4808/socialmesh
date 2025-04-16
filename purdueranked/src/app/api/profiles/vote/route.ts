import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { authOptions } from "@/lib/auth";
import { calculateNewElo } from "@/lib/elo";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    const body = await req.json();
    const { firstProfileId, secondProfileId, result } = body;

    if (!firstProfileId || !secondProfileId || !result) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Fetch the profiles to get their current ELO ratings
    const firstProfile = await db.profile.findUnique({
      where: { id: firstProfileId },
    });

    const secondProfile = await db.profile.findUnique({
      where: { id: secondProfileId },
    });

    if (!firstProfile || !secondProfile) {
      return NextResponse.json(
        { error: "One or both profiles not found" },
        { status: 404 }
      );
    }

    // Calculate new ELO ratings based on the result
    let firstProfileScore, secondProfileScore;
    
    if (result === "FIRST_WON") {
      firstProfileScore = 1;
      secondProfileScore = 0;
    } else if (result === "SECOND_WON") {
      firstProfileScore = 0;
      secondProfileScore = 1;
    } else if (result === "TIE") {
      firstProfileScore = 0.5;
      secondProfileScore = 0.5;
    } else {
      return NextResponse.json(
        { error: "Invalid result value" },
        { status: 400 }
      );
    }

    const { newRatingA, newRatingB } = calculateNewElo(
      firstProfile.eloRating,
      secondProfile.eloRating,
      firstProfileScore
    );

    // Update the ELO ratings of both profiles
    await db.profile.update({
      where: { id: firstProfileId },
      data: { eloRating: newRatingA },
    });

    await db.profile.update({
      where: { id: secondProfileId },
      data: { eloRating: newRatingB },
    });

    // Record the vote
    await db.vote.create({
      data: {
        firstProfileId,
        secondProfileId,
        result,
        voterId: userId || null,
      },
    });

    return NextResponse.json({
      success: true,
      firstProfile: {
        id: firstProfileId,
        newRating: newRatingA,
        previousRating: firstProfile.eloRating,
      },
      secondProfile: {
        id: secondProfileId,
        newRating: newRatingB,
        previousRating: secondProfile.eloRating,
      },
    });
    
  } catch (error: any) {
    console.error("Error processing vote:", error);
    return NextResponse.json(
      { error: "Failed to process vote", details: error.message },
      { status: 500 }
    );
  }
} 