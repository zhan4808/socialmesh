import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch user with preferences
    const user = await db.user.findUnique({
      where: { id: session.user.id },
      include: { preferences: true },
    });

    // Check if user is premium
    if (!user?.preferences?.isPremium) {
      return NextResponse.json(
        { error: "Premium subscription required" },
        { status: 403 }
      );
    }

    // Get or create analytics record
    let analytics = await db.analytics.findUnique({
      where: { userId: session.user.id },
    });

    if (!analytics) {
      analytics = await db.analytics.create({
        data: { userId: session.user.id },
      });
    }

    // Get additional analytics data
    const [
      totalConnections,
      acceptedConnections,
      totalMessagesSent,
      totalMessagesReceived,
      responseCount,
    ] = await Promise.all([
      // Total connection requests (sent or received)
      db.match.count({
        where: {
          OR: [
            { senderId: session.user.id },
            { receiverId: session.user.id },
          ],
        },
      }),
      // Accepted connections
      db.match.count({
        where: {
          OR: [
            { senderId: session.user.id },
            { receiverId: session.user.id },
          ],
          status: "ACCEPTED",
        },
      }),
      // Messages sent
      db.message.count({
        where: { senderId: session.user.id },
      }),
      // Messages received
      db.message.count({
        where: { receiverId: session.user.id },
      }),
      // Messages that received a response
      db.message.count({
        where: {
          senderId: session.user.id,
          receiverId: {
            in: await db.message
              .findMany({
                where: { receiverId: session.user.id },
                select: { senderId: true },
                distinct: ["senderId"],
              })
              .then((messages) => messages.map((m) => m.senderId)),
          },
        },
      }),
    ]);

    // Calculate connection rate and response rate
    const connectionRate = totalConnections > 0 
      ? (acceptedConnections / totalConnections) * 100 
      : 0;
    
    const responseRate = totalMessagesSent > 0 
      ? (responseCount / totalMessagesSent) * 100 
      : 0;

    // Update analytics with calculated rates
    analytics = await db.analytics.update({
      where: { userId: session.user.id },
      data: {
        connectionRate,
        responseRate,
      },
    });

    // Get connections by industry
    const connections = await db.match.findMany({
      where: {
        OR: [
          { senderId: session.user.id, status: "ACCEPTED" },
          { receiverId: session.user.id, status: "ACCEPTED" },
        ],
      },
      include: {
        sender: {
          select: { id: true, industry: true },
        },
        receiver: {
          select: { id: true, industry: true },
        },
      },
    });

    // Calculate industry distribution
    const industryDistribution: Record<string, number> = {};
    connections.forEach((connection) => {
      const otherPerson = connection.senderId === session.user.id 
        ? connection.receiver 
        : connection.sender;
      
      if (otherPerson.industry) {
        industryDistribution[otherPerson.industry] = 
          (industryDistribution[otherPerson.industry] || 0) + 1;
      }
    });

    // Weekly activity tracking (simplified version)
    const now = new Date();
    const oneWeekAgo = new Date(now.setDate(now.getDate() - 7));

    const weeklyActivity = {
      profileViews: analytics.profileViews,
      newConnections: await db.match.count({
        where: {
          OR: [
            { senderId: session.user.id },
            { receiverId: session.user.id },
          ],
          status: "ACCEPTED",
          createdAt: { gte: oneWeekAgo },
        },
      }),
      messagesSent: await db.message.count({
        where: {
          senderId: session.user.id,
          createdAt: { gte: oneWeekAgo },
        },
      }),
      messagesReceived: await db.message.count({
        where: {
          receiverId: session.user.id,
          createdAt: { gte: oneWeekAgo },
        },
      }),
    };

    // Update analytics with new data
    analytics = await db.analytics.update({
      where: { userId: session.user.id },
      data: {
        industryConnectionsData: industryDistribution,
        weeklyActivity,
      },
    });

    return NextResponse.json({
      analytics,
      summary: {
        totalConnections,
        acceptedConnections,
        connectionRate,
        totalMessagesSent,
        totalMessagesReceived,
        responseRate,
        industryDistribution,
        weeklyActivity,
      },
    });
  } catch (error) {
    console.error("Analytics fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch analytics" },
      { status: 500 }
    );
  }
}

// Endpoint to update analytics data (like incrementing profile views)
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { action, targetUserId } = await req.json();

    if (action === "incrementProfileView" && targetUserId) {
      // Find the target user's analytics record
      let analytics = await db.analytics.findUnique({
        where: { userId: targetUserId },
      });

      // Create record if it doesn't exist
      if (!analytics) {
        analytics = await db.analytics.create({
          data: { userId: targetUserId },
        });
      }

      // Increment profile views
      analytics = await db.analytics.update({
        where: { userId: targetUserId },
        data: {
          profileViews: { increment: 1 },
        },
      });

      return NextResponse.json({ success: true });
    }

    if (action === "incrementSearchAppearance" && targetUserId) {
      // Find the target user's analytics record
      let analytics = await db.analytics.findUnique({
        where: { userId: targetUserId },
      });

      // Create record if it doesn't exist
      if (!analytics) {
        analytics = await db.analytics.create({
          data: { userId: targetUserId },
        });
      }

      // Increment search appearances
      analytics = await db.analytics.update({
        where: { userId: targetUserId },
        data: {
          searchAppearances: { increment: 1 },
        },
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Analytics update error:", error);
    return NextResponse.json(
      { error: "Failed to update analytics" },
      { status: 500 }
    );
  }
} 