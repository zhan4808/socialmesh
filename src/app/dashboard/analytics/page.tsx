import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import Navigation from '@/components/layout/Navigation'
import AnalyticsDashboard from '@/components/dashboard/AnalyticsDashboard'
import SubscriptionRequired from '@/components/dashboard/SubscriptionRequired'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function AnalyticsPage() {
  const session = await getServerSession()
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  // Check if user has premium subscription
  // In a real app, we would fetch this from the database
  const user = await prisma.user.findUnique({
    where: { 
      id: session.user.id as string 
    },
    include: {
      subscription: true
    }
  })

  const isPremium = user?.subscription?.tier === 'PREMIUM' || user?.subscription?.tier === 'ENTERPRISE'

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Gain insights into your networking performance</p>
        </div>
        
        {isPremium ? (
          <AnalyticsDashboard userId={user?.id} />
        ) : (
          <SubscriptionRequired 
            title="Premium Analytics" 
            description="Upgrade to Premium to access detailed analytics and insights about your networking performance."
            ctaLink="/dashboard/premium"
            ctaText="Upgrade Now"
          />
        )}
      </main>
    </div>
  )
} 