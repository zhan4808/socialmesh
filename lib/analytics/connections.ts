import { prisma } from '../db';
import { ConnectionWithEvents, EventType, Platform, ConnectionEvent } from '../../types';

type ConnectionStrengthFactors = {
  recency: number;
  frequency: number;
  diversity: number;
  reciprocity: number;
};

/**
 * Calculate connection strength based on interaction history
 * Returns a score between 0-100
 */
export async function calculateConnectionStrength(
  userId: string,
  connectionId: string
): Promise<number> {
  // Get connection and its events
  const connection = await prisma.connection.findFirst({
    where: { id: connectionId, userId },
    include: { events: true }
  });
  
  if (!connection) return 0;
  
  // Calculate factors that contribute to connection strength
  const factors = await calculateStrengthFactors(userId, connection as unknown as ConnectionWithEvents);
  
  // Weight the factors
  const weightedScore = 
    factors.recency * 0.3 + 
    factors.frequency * 0.3 + 
    factors.diversity * 0.2 + 
    factors.reciprocity * 0.2;
  
  // Convert to a 0-100 scale
  return Math.min(Math.round(weightedScore * 100), 100);
}

/**
 * Calculate various factors that contribute to connection strength
 */
async function calculateStrengthFactors(
  userId: string,
  connection: ConnectionWithEvents
): Promise<ConnectionStrengthFactors> {
  const now = new Date();
  const events = connection.events;
  
  // Recency factor (higher score for more recent interactions)
  let recency = 0;
  if (connection.lastInteraction) {
    const daysSinceLastInteraction = Math.floor(
      (now.getTime() - connection.lastInteraction.getTime()) / (1000 * 60 * 60 * 24)
    );
    
    // Scale recency from 0-1 based on days since last interaction
    // 0 days = 1.0, 30 days = 0.5, 90+ days = 0.1
    if (daysSinceLastInteraction < 30) {
      recency = 1 - (daysSinceLastInteraction / 60);
    } else {
      recency = 0.5 - (Math.min(daysSinceLastInteraction - 30, 60) / 120);
    }
    
    recency = Math.max(0.1, Math.min(1, recency));
  }
  
  // Frequency factor (higher score for more interactions)
  let frequency = 0;
  const totalEvents = events.length;
  // Scale frequency from 0-1 based on number of events
  // 0 events = 0, 10 events = 0.5, 30+ events = 1.0
  frequency = Math.min(1, totalEvents / 30);
  
  // Diversity factor (higher score for diverse interaction types)
  const uniqueEventTypes = new Set(events.map((e: ConnectionEvent) => e.eventType));
  // Scale diversity from 0-1 based on number of unique event types
  // 0 types = 0, all possible types = 1.0
  const totalEventTypes = Object.keys(EventType).length;
  const diversity = Math.min(1, uniqueEventTypes.size / totalEventTypes);
  
  // Reciprocity factor (higher score for mutual interactions)
  let sentEvents = 0;
  let receivedEvents = 0;
  
  events.forEach((event: ConnectionEvent) => {
    if ([EventType.MESSAGE_SENT, EventType.CONTENT_SHARED].includes(event.eventType)) {
      sentEvents++;
    } else if ([EventType.MESSAGE_RECEIVED, EventType.CONTENT_LIKED].includes(event.eventType)) {
      receivedEvents++;
    }
  });
  
  let reciprocity = 0;
  if (sentEvents + receivedEvents > 0) {
    // Perfect reciprocity is when sent ≈ received
    const ratio = Math.min(sentEvents, receivedEvents) / Math.max(1, Math.max(sentEvents, receivedEvents));
    reciprocity = ratio;
  }
  
  return { recency, frequency, diversity, reciprocity };
}

/**
 * Update network statistics for a user
 */
export async function updateNetworkStats(userId: string): Promise<void> {
  // Count total connections
  const totalConnections = await prisma.connection.count({
    where: { userId }
  });
  
  // Get connections per platform
  const connectionsPerPlatform = await prisma.connection.groupBy({
    by: ['platformType'],
    where: { userId },
    _count: { id: true }
  });
  
  // Format connections per platform as a JSON object
  const platformCounts = connectionsPerPlatform.reduce((acc: Record<string, number>, curr: { platformType: string, _count: { id: number } }) => {
    acc[curr.platformType] = curr._count.id;
    return acc;
  }, {} as Record<string, number>);
  
  // Calculate average connection strength
  const connections = await prisma.connection.findMany({
    where: { userId, strength: { not: null } },
    select: { strength: true }
  });
  
  const totalStrength = connections.reduce((sum: number, conn: { strength: number | null }) => sum + (conn.strength || 0), 0);
  const averageStrength = connections.length > 0 ? totalStrength / connections.length : null;
  
  // Get top tags
  const connections2 = await prisma.connection.findMany({
    where: { userId },
    select: { tags: true }
  });
  
  const tagCounts: Record<string, number> = {};
  connections2.forEach((conn: { tags: string[] }) => {
    conn.tags.forEach((tag: string) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });
  
  const topTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([tag, count]) => ({ tag, count }));
  
  // Update or create network stats
  await prisma.networkStats.upsert({
    where: { userId },
    update: {
      totalConnections,
      averageStrength,
      connectionsPerPlatform: platformCounts,
      topTags,
      lastCalculated: new Date(),
      updatedAt: new Date()
    },
    create: {
      userId,
      totalConnections,
      averageStrength,
      connectionsPerPlatform: platformCounts,
      topTags,
      lastCalculated: new Date()
    }
  });
} 