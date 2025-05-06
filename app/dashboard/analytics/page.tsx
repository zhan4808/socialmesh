import React from 'react'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import AnalyticsDashboard from '../../../components/dashboard/AnalyticsDashboard'
import SubscriptionRequired from '../../../components/dashboard/SubscriptionRequired'
import { PrismaClient } from '@prisma/client'

export default async function AnalyticsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session || !session.user) {
    redirect('/auth/signin?callbackUrl=/dashboard/analytics')
  }
  
  // Check if user has a premium subscription
  const prisma = new PrismaClient()
  const user = await prisma.user.findUnique({
    where: { email: session.user.email || '' },
    include: { subscription: true }
  })
  
  const isPremium = user?.subscription?.tier === 'PREMIUM' || user?.subscription?.tier === 'ENTERPRISE'
  
  // Close the Prisma client connection
  await prisma.$disconnect()
  
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Analytics Dashboard</h1>
        
        <div className="mt-6">
          {isPremium ? (
            <AnalyticsDashboard userId={user?.id} />
          ) : (
            <SubscriptionRequired
              feature="analytics dashboard"
              ctaText="Upgrade to Premium"
              ctaLink="/dashboard/premium"
            />
          )}
        </div>
      </div>
    </div>
  )
} 