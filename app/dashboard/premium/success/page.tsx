import React from 'react'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { CheckCircleIcon } from 'lucide-react'
import { authOptions } from '../../../api/auth/[...nextauth]/route'

export default async function SubscriptionSuccessPage() {
  const session = await getServerSession(authOptions)
  
  if (!session || !session.user) {
    redirect('/auth/signin?callbackUrl=/dashboard/premium/success')
  }
  
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-500 px-6 py-8 text-center">
            <CheckCircleIcon className="mx-auto h-16 w-16 text-white" />
            <h2 className="mt-4 text-3xl font-bold text-white">Subscription Successful!</h2>
            <p className="mt-2 text-lg text-green-100">
              Thank you for upgrading to our premium plan.
            </p>
          </div>
          
          <div className="px-6 py-8">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Your Premium Benefits Include:</h3>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Advanced analytics dashboard with detailed insights</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Priority matching with top professionals in your field</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Enhanced profile visibility to potential connections</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Custom filtering options for better match quality</span>
              </li>
            </ul>
            
            <div className="space-y-4">
              <Link
                href="/dashboard/analytics"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                View Analytics Dashboard
              </Link>
              
              <Link
                href="/dashboard"
                className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 