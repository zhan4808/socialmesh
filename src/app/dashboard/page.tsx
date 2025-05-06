import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import DashboardContent from '@/components/dashboard/DashboardContent'
import Navigation from '@/components/layout/Navigation'

export default async function Dashboard() {
  const session = await getServerSession()
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <DashboardContent />
      </main>
    </div>
  )
} 