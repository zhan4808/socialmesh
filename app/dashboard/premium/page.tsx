import React from 'react'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from '../../api/auth/[...nextauth]/route'
import PremiumPlans from '../../../components/dashboard/PremiumPlans'

export default async function PremiumPage() {
  const session = await getServerSession(authOptions)
  
  if (!session || !session.user) {
    redirect('/auth/signin?callbackUrl=/dashboard/premium')
  }
  
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Upgrade to Premium
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Unlock advanced analytics and premium features to enhance your professional networking
          </p>
        </div>
        
        <div className="mt-12">
          <PremiumPlans userId={session.user.id} />
        </div>
      </div>
    </div>
  )
} 