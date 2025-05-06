'use client'

import Link from 'next/link'

interface SubscriptionRequiredProps {
  title: string
  description: string
  ctaLink: string
  ctaText: string
}

export default function SubscriptionRequired({ 
  title, 
  description, 
  ctaLink, 
  ctaText 
}: SubscriptionRequiredProps) {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-primary-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" 
              />
            </svg>
          </div>
        </div>
        
        <h2 className="mb-2 text-xl font-semibold text-gray-900">{title}</h2>
        <p className="mb-6 text-gray-600">{description}</p>
        
        <div className="flex flex-col space-y-4">
          <Link 
            href={ctaLink} 
            className="inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            {ctaText}
          </Link>
          <Link
            href="/dashboard"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
} 