import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { syncLinkedInConnections } from '../../../../../lib/scrapers/linkedin';
import { updateNetworkStats } from '../../../../../lib/analytics/connections';
import { authOptions } from '../../../../../lib/auth';

export async function POST() {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user || !session.user.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const userId = session.user.id;
    
    // Start the LinkedIn connection sync
    const connectionsCount = await syncLinkedInConnections(userId);
    
    // Update the user's network statistics
    await updateNetworkStats(userId);
    
    return NextResponse.json({
      status: 'success',
      connectionsCount
    });
  } catch (error: any) {
    console.error('Error syncing LinkedIn connections:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to sync LinkedIn connections',
        message: error.message 
      },
      { status: 500 }
    );
  }
} 