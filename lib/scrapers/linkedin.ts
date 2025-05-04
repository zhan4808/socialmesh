import axios from 'axios';
import { prisma } from '../db';
import { Platform, EventType } from '../../types';

type LinkedInProfile = {
  id: string;
  firstName: string;
  lastName: string;
  headline?: string;
  industry?: string;
  profilePicture?: string;
  location?: {
    country?: string;
    city?: string;
  };
  positions?: Array<{
    title?: string;
    companyName?: string;
    startDate?: {
      month?: number;
      year?: number;
    };
    endDate?: {
      month?: number;
      year?: number;
    };
    current?: boolean;
  }>;
};

type LinkedInConnection = {
  id: string;
  firstName: string;
  lastName: string;
  headline?: string;
  profilePicture?: string;
  connectionDegree?: number;
};

export async function fetchUserProfile(accessToken: string): Promise<LinkedInProfile | null> {
  try {
    const response = await axios.get('https://api.linkedin.com/v2/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0',
      },
      params: {
        projection: '(id,firstName,lastName,headline,industry,profilePicture,location,positions)',
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching LinkedIn profile:', error);
    return null;
  }
}

export async function fetchUserConnections(accessToken: string, userId: string): Promise<LinkedInConnection[]> {
  try {
    // This is a placeholder as LinkedIn's API for connections is limited
    // In a real implementation, you might need to use alternative methods
    const response = await axios.get('https://api.linkedin.com/v2/connections', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'cache-control': 'no-cache',
        'X-Restli-Protocol-Version': '2.0.0',
      },
    });
    
    return response.data.elements || [];
  } catch (error) {
    console.error('Error fetching LinkedIn connections:', error);
    return [];
  }
}

export async function syncLinkedInConnections(userId: string) {
  try {
    // Get the user's LinkedIn platform account
    const platformAccount = await prisma.platformAccount.findFirst({
      where: { 
        userId,
        platformType: Platform.LINKEDIN
      }
    });
    
    if (!platformAccount?.accessToken) {
      throw new Error('LinkedIn account not connected or token missing');
    }
    
    // Fetch connections from LinkedIn API
    const connections = await fetchUserConnections(platformAccount.accessToken, userId);
    
    // Process each connection
    for (const conn of connections) {
      // Check if connection already exists
      const existingConnection = await prisma.connection.findFirst({
        where: {
          userId,
          platformType: Platform.LINKEDIN,
          connectionId: conn.id
        }
      });
      
      const name = `${conn.firstName} ${conn.lastName}`.trim();
      
      // Update or create connection
      if (existingConnection) {
        await prisma.connection.update({
          where: { id: existingConnection.id },
          data: {
            name,
            jobTitle: conn.headline,
            imageUrl: conn.profilePicture,
            connectionLevel: conn.connectionDegree,
            updatedAt: new Date()
          }
        });
      } else {
        const newConnection = await prisma.connection.create({
          data: {
            userId,
            platformType: Platform.LINKEDIN,
            connectionId: conn.id,
            name,
            jobTitle: conn.headline,
            imageUrl: conn.profilePicture,
            connectionLevel: conn.connectionDegree,
            firstConnected: new Date(),
            strength: 50, // Default initial connection strength
            tags: []
          }
        });
        
        // Record connection event
        await prisma.connectionEvent.create({
          data: {
            userId,
            connectionId: newConnection.id,
            eventType: EventType.CONNECTED,
            platform: Platform.LINKEDIN,
            timestamp: new Date()
          }
        });
      }
    }
    
    // Update lastSynced timestamp
    await prisma.platformAccount.update({
      where: { id: platformAccount.id },
      data: { lastSynced: new Date() }
    });
    
    return connections.length;
  } catch (error) {
    console.error('Error syncing LinkedIn connections:', error);
    throw error;
  }
} 