import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

type SuggestedUser = {
  id: string;
  name: string | null;
  email: string;
  profilePicture: string | null;
  headline: string | null;
  currentPosition: string | null;
  industry: string | null;
  skills: string[];
};

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get all received match requests
    const receivedMatches = await db.match.findMany({
      where: { 
        receiverId: session.user.id 
      },
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePicture: true,
            headline: true,
            currentPosition: true,
            industry: true,
          }
        }
      },
    });

    // Get all sent match requests
    const sentMatches = await db.match.findMany({
      where: { 
        senderId: session.user.id 
      },
      include: {
        receiver: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePicture: true,
            headline: true,
            currentPosition: true,
            industry: true,
          }
        }
      },
    });

    // Get suggested matches
    // In a real app, this would use a more sophisticated algorithm
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      include: { preferences: true },
    });

    let suggestedMatches: SuggestedUser[] = [];
    if (user?.industry) {
      // Simple suggestion based on same industry
      suggestedMatches = await db.user.findMany({
        where: {
          id: { not: session.user.id },
          industry: user.industry,
          // Exclude users already connected with
          AND: [
            {
              NOT: {
                receivedMatches: {
                  some: { senderId: session.user.id }
                }
              }
            },
            {
              NOT: {
                sentMatches: {
                  some: { receiverId: session.user.id }
                }
              }
            }
          ]
        },
        select: {
          id: true,
          name: true,
          email: true,
          profilePicture: true,
          headline: true,
          currentPosition: true,
          industry: true,
          skills: true,
        },
        take: 10,
      });
    }

    return NextResponse.json({
      received: receivedMatches,
      sent: sentMatches,
      suggested: suggestedMatches,
    });
  } catch (error) {
    console.error("Matches fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch matches" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { receiverId, matchReason, score = 0.5 } = await req.json();

    if (!receiverId) {
      return NextResponse.json(
        { error: "Receiver ID is required" },
        { status: 400 }
      );
    }

    // Check if match already exists
    const existingMatch = await db.match.findUnique({
      where: {
        senderId_receiverId: {
          senderId: session.user.id,
          receiverId,
        },
      },
    });

    if (existingMatch) {
      return NextResponse.json(
        { error: "Match request already sent" },
        { status: 400 }
      );
    }

    const match = await db.match.create({
      data: {
        senderId: session.user.id,
        receiverId,
        matchReason,
        score,
      },
    });

    return NextResponse.json(match);
  } catch (error) {
    console.error("Match creation error:", error);
    return NextResponse.json(
      { error: "Failed to create match" },
      { status: 500 }
    );
  }
} 