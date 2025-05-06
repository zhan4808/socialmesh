import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'

export default async function SubscriptionSuccessPage() {
  const session = await getServerSession()
  
  if (!session?.user) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-md">
          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-green-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
          </div>
          
          <h1 className="mb-4 text-center text-2xl font-bold text-gray-900">Subscription Successful!</h1>
          <p className="mb-6 text-center text-gray-600">
            Thank you for upgrading to our Premium plan. Your account has been upgraded with advanced features and analytics.
          </p>
          
          <div className="mb-8 rounded-lg bg-blue-50 p-4">
            <h2 className="mb-2 text-lg font-medium text-blue-800">Your Premium Benefits:</h2>
            <ul className="space-y-2 text-sm text-blue-700">
              <li className="flex items-start">
                <svg className="mr-2 mt-0.5 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Unlimited matches with priority matching algorithm
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-0.5 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Advanced analytics dashboard with performance insights
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-0.5 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                See who viewed your profile with detailed visitor metrics
              </li>
              <li className="flex items-start">
                <svg className="mr-2 mt-0.5 h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Advanced filtering options for more precise networking
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link 
              href="/dashboard/analytics" 
              className="flex-1 rounded-md bg-primary-600 px-4 py-3 text-center font-medium text-white hover:bg-primary-700"
            >
              View Analytics Dashboard
            </Link>
            <Link 
              href="/dashboard" 
              className="flex-1 rounded-md bg-white px-4 py-3 text-center font-medium text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
} 