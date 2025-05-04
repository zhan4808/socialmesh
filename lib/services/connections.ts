import { prisma } from '../db';
import { Platform, ConnectionFilters } from '../../types';
import { calculateConnectionStrength, updateNetworkStats } from '../analytics/connections';

export async function getConnections(userId: string, filters?: ConnectionFilters) {
  // Build the query based on filters
  const where: any = { userId };
  
  // Apply platform filter
  if (filters?.platformTypes && filters.platformTypes.length > 0) {
    where.platformType = { in: filters.platformTypes };
  }
  
  // Apply search filter
  if (filters?.searchQuery) {
    where.OR = [
      { name: { contains: filters.searchQuery, mode: 'insensitive' } },
      { company: { contains: filters.searchQuery, mode: 'insensitive' } },
      { jobTitle: { contains: filters.searchQuery, mode: 'insensitive' } },
      { tags: { has: filters.searchQuery } }
    ];
  }
  
  // Apply strength filters
  if (filters?.minStrength !== undefined) {
    where.strength = { ...where.strength, gte: filters.minStrength };
  }
  
  if (filters?.maxStrength !== undefined) {
    where.strength = { ...where.strength, lte: filters.maxStrength };
  }
  
  // Apply tag filters
  if (filters?.tags && filters.tags.length > 0) {
    where.tags = { hasSome: filters.tags };
  }
  
  // Build sort options
  const orderBy: any = {};
  
  if (filters?.sortBy) {
    orderBy[filters.sortBy] = filters.sortOrder || 'asc';
  } else {
    orderBy.name = 'asc';
  }
  
  // Execute the query
  const connections = await prisma.connection.findMany({
    where,
    orderBy,
    include: {
      events: {
        orderBy: { timestamp: 'desc' },
        take: 5
      }
    }
  });
  
  return connections;
}

export async function getConnection(connectionId: string) {
  return prisma.connection.findUnique({
    where: { id: connectionId },
    include: {
      events: {
        orderBy: { timestamp: 'desc' },
        take: 20
      }
    }
  });
}

export async function updateConnection(
  connectionId: string,
  data: {
    name?: string;
    jobTitle?: string;
    company?: string;
    email?: string;
    phoneNumber?: string;
    location?: string;
    bio?: string;
    tags?: string[];
    notes?: string;
  }
) {
  return prisma.connection.update({
    where: { id: connectionId },
    data
  });
}

export async function addConnectionTag(connectionId: string, tag: string) {
  const connection = await prisma.connection.findUnique({
    where: { id: connectionId },
    select: { tags: true }
  });
  
  if (!connection) throw new Error('Connection not found');
  
  // Check if tag already exists
  if (connection.tags.includes(tag)) {
    return connection;
  }
  
  // Add the tag
  return prisma.connection.update({
    where: { id: connectionId },
    data: {
      tags: {
        push: tag
      }
    }
  });
}

export async function removeConnectionTag(connectionId: string, tag: string) {
  const connection = await prisma.connection.findUnique({
    where: { id: connectionId },
    select: { tags: true }
  });
  
  if (!connection) throw new Error('Connection not found');
  
  // Filter out the tag
  const updatedTags = connection.tags.filter((t: string) => t !== tag);
  
  // Update the connection
  return prisma.connection.update({
    where: { id: connectionId },
    data: {
      tags: updatedTags
    }
  });
}

export async function getNetworkStats(userId: string) {
  // Check if stats exist and are recent
  const existingStats = await prisma.networkStats.findUnique({
    where: { userId }
  });
  
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
  
  // If stats don't exist or are outdated, recalculate
  if (!existingStats || existingStats.lastCalculated < oneHourAgo) {
    await updateNetworkStats(userId);
  }
  
  return prisma.networkStats.findUnique({
    where: { userId }
  });
}

export async function recalculateConnectionStrength(connectionId: string, userId: string) {
  const strength = await calculateConnectionStrength(userId, connectionId);
  
  await prisma.connection.update({
    where: { id: connectionId },
    data: { strength }
  });
  
  return strength;
} 