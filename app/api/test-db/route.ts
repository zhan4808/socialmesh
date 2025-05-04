import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';

export async function GET() {
  try {
    // Test database connection by querying users
    const userCount = await prisma.user.count();
    
    // Get table names by querying information_schema
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;
    
    return NextResponse.json({
      status: 'connected',
      message: 'Database connection successful',
      userCount,
      tables
    });
  } catch (error: any) {
    console.error('Database connection error:', error);
    
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Failed to connect to database',
        error: error.message 
      },
      { status: 500 }
    );
  }
} 