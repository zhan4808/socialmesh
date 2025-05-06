import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import Navigation from '@/components/layout/Navigation'
import PremiumPlans from '@/components/dashboard/PremiumPlans'

export default async function PremiumPage() {
  const session = await getServerSession()
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Premium Features</h1>
          <p className="text-gray-600">Upgrade your account to unlock advanced features and insights</p>
        </div>
        
        <PremiumPlans />
      </main>
    </div>
  )
} 