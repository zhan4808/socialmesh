import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Calculate match score between two users
const calculateMatchScore = (userProfile: any, otherProfile: any) => {
  let score = 0
  const matchReasons: string[] = []
  
  // Check for same industry
  if (userProfile.industry && otherProfile.industry && userProfile.industry === otherProfile.industry) {
    score += 30
    matchReasons.push('Same industry')
  }
  
  // Check for skill overlap
  const userSkills = new Set(userProfile.skills)
  const otherSkills = new Set(otherProfile.skills)
  const commonSkills = [...userSkills].filter(skill => otherSkills.has(skill))
  
  if (commonSkills.length > 0) {
    score += Math.min(commonSkills.length * 5, 30)
    matchReasons.push('Similar skills')
  }
  
  // Check for location proximity
  if (userProfile.location && otherProfile.location && userProfile.location === otherProfile.location) {
    score += 15
    matchReasons.push('Geographical proximity')
  }
  
  // Check for complementary goals
  const userGoals = new Set(userProfile.networking_goals)
  const otherGoals = new Set(otherProfile.networking_goals)
  const complementaryGoals = [...userGoals].filter(goal => otherGoals.has(goal))
  
  if (complementaryGoals.length > 0) {
    score += Math.min(complementaryGoals.length * 8, 25)
    matchReasons.push('Aligned networking goals')
  }
  
  return {
    score: Math.min(score, 100), // Cap at 100
    reasons: matchReasons
  }
}

export async function GET() {
  const session = await getServerSession()
  
  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  
  try {
    // Get current user profile
    const userProfile = await prisma.profile.findUnique({
      where: { userId: session.user.id as string },
      include: { user: true }
    })
    
    if (!userProfile) {
      return NextResponse.json({ error: 'User profile not found' }, { status: 404 })
    }
    
    // Get potential matches (all other users with profiles)
    const potentialMatches = await prisma.profile.findMany({
      where: {
        userId: { not: session.user.id as string }
      },
      include: {
        user: true
      }
    })
    
    // Calculate match scores for all potential matches
    const matches = potentialMatches.map(match => {
      const { score, reasons } = calculateMatchScore(userProfile, match)
      
      return {
        id: match.user.id,
        name: match.user.name,
        email: match.user.email,
        image: match.user.image,
        headline: match.headline,
        industry: match.industry,
        matchScore: score,
        matchReasons: reasons
      }
    })
    
    // Sort by match score (highest first)
    matches.sort((a, b) => b.matchScore - a.matchScore)
    
    return NextResponse.json(matches)
  } catch (error) {
    console.error('Error fetching matches:', error)
    return NextResponse.json({ error: 'Failed to fetch matches' }, { status: 500 })
  }
} 