import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

// Endpoint to upgrade a user to premium
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { premiumTier = "BASIC" } = await req.json();
    
    // Validate premium tier
    if (!["BASIC", "PROFESSIONAL", "ENTERPRISE"].includes(premiumTier)) {
      return NextResponse.json(
        { error: "Invalid premium tier" },
        { status: 400 }
      );
    }

    // Find user's preferences
    let preferences = await db.preferences.findUnique({
      where: { userId: session.user.id },
    });

    const now = new Date();
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 1); // Set expiry to 1 month later

    if (preferences) {
      // Update existing preferences
      preferences = await db.preferences.update({
        where: { userId: session.user.id },
        data: {
          isPremium: true,
          premiumTier,
          subscribedAt: now,
          premiumExpiresAt: expiryDate,
        },
      });
    } else {
      // Create new preferences
      preferences = await db.preferences.create({
        data: {
          userId: session.user.id,
          isPremium: true,
          premiumTier,
          subscribedAt: now,
          premiumExpiresAt: expiryDate,
          industries: [],
          skills: [],
          locations: [],
          networkingGoals: [],
        },
      });
    }

    // Create analytics record if it doesn't exist
    const existingAnalytics = await db.analytics.findUnique({
      where: { userId: session.user.id },
    });

    if (!existingAnalytics) {
      await db.analytics.create({
        data: { userId: session.user.id },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Successfully upgraded to premium",
      data: {
        premiumTier,
        subscribedAt: now,
        premiumExpiresAt: expiryDate,
      },
    });
  } catch (error) {
    console.error("Premium upgrade error:", error);
    return NextResponse.json(
      { error: "Failed to upgrade to premium" },
      { status: 500 }
    );
  }
}

// Endpoint to check premium status
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const preferences = await db.preferences.findUnique({
      where: { userId: session.user.id },
    });

    const isPremium = !!preferences?.isPremium;
    const premiumTier = preferences?.premiumTier || "FREE";
    const premiumExpiresAt = preferences?.premiumExpiresAt || null;

    // Check if premium has expired
    if (isPremium && premiumExpiresAt && new Date() > new Date(premiumExpiresAt)) {
      // Downgrade to free tier
      await db.preferences.update({
        where: { userId: session.user.id },
        data: {
          isPremium: false,
          premiumTier: "FREE",
        },
      });

      return NextResponse.json({
        isPremium: false,
        premiumTier: "FREE",
        message: "Premium subscription has expired",
      });
    }

    return NextResponse.json({
      isPremium,
      premiumTier,
      premiumExpiresAt,
      features: getPremiumFeatures(premiumTier),
    });
  } catch (error) {
    console.error("Premium status check error:", error);
    return NextResponse.json(
      { error: "Failed to check premium status" },
      { status: 500 }
    );
  }
}

// Helper function to get premium features based on tier
function getPremiumFeatures(tier: string) {
  const features = {
    FREE: {
      connectionsPerDay: 10,
      messagesPerDay: 20,
      analytics: false,
      priorityMatching: false,
      advancedFilters: false,
    },
    BASIC: {
      connectionsPerDay: 30,
      messagesPerDay: 50,
      analytics: true,
      priorityMatching: false,
      advancedFilters: false,
    },
    PROFESSIONAL: {
      connectionsPerDay: 75,
      messagesPerDay: 100,
      analytics: true,
      priorityMatching: true,
      advancedFilters: true,
    },
    ENTERPRISE: {
      connectionsPerDay: "unlimited",
      messagesPerDay: "unlimited",
      analytics: true,
      priorityMatching: true,
      advancedFilters: true,
    },
  };

  return features[tier as keyof typeof features] || features.FREE;
} 