import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const url = new URL(req.url);
  const userId = url.searchParams.get("userId");

  try {
    let query = {};

    if (userId) {
      // Get messages between current user and specific user
      query = {
        OR: [
          {
            AND: [
              { senderId: session.user.id },
              { receiverId: userId }
            ]
          },
          {
            AND: [
              { senderId: userId },
              { receiverId: session.user.id }
            ]
          }
        ]
      };
    } else {
      // Get all messages for current user
      query = {
        OR: [
          { senderId: session.user.id },
          { receiverId: session.user.id }
        ]
      };
    }

    const messages = await db.message.findMany({
      where: query,
      include: {
        sender: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePicture: true,
          }
        },
        receiver: {
          select: {
            id: true,
            name: true,
            email: true,
            profilePicture: true,
          }
        }
      },
      orderBy: {
        createdAt: "asc"
      }
    });

    // If specific user is provided, mark messages as read
    if (userId) {
      await db.message.updateMany({
        where: {
          senderId: userId,
          receiverId: session.user.id,
          read: false
        },
        data: {
          read: true
        }
      });
    }

    return NextResponse.json(messages);
  } catch (error) {
    console.error("Messages fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
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
    const { receiverId, content } = await req.json();

    if (!receiverId || !content) {
      return NextResponse.json(
        { error: "Receiver ID and content are required" },
        { status: 400 }
      );
    }

    // Check if a match exists between users
    const match = await db.match.findFirst({
      where: {
        OR: [
          {
            senderId: session.user.id,
            receiverId,
            status: "ACCEPTED"
          },
          {
            senderId: receiverId,
            receiverId: session.user.id,
            status: "ACCEPTED"
          }
        ]
      }
    });

    // If no accepted match, check if there's a pending one
    if (!match) {
      const pendingMatch = await db.match.findFirst({
        where: {
          OR: [
            {
              senderId: session.user.id,
              receiverId,
              status: "PENDING"
            },
            {
              senderId: receiverId,
              receiverId: session.user.id,
              status: "PENDING"
            }
          ]
        }
      });

      // Allow messaging if there's at least a pending match
      if (!pendingMatch) {
        return NextResponse.json(
          { error: "No match exists between users" },
          { status: 400 }
        );
      }
    }

    const message = await db.message.create({
      data: {
        senderId: session.user.id,
        receiverId,
        content,
      },
    });

    return NextResponse.json(message);
  } catch (error) {
    console.error("Message creation error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
} 