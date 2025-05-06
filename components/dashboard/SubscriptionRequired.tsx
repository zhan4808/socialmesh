'use client'

import React from 'react'
import Link from 'next/link'
import { LockClosedIcon } from 'lucide-react'

interface SubscriptionRequiredProps {
  feature: string
  ctaText?: string
  ctaLink?: string
}

export default function SubscriptionRequired({ 
  feature = 'this feature', 
  ctaText = 'Upgrade Now', 
  ctaLink = '/dashboard/premium' 
}: SubscriptionRequiredProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center rounded-lg bg-slate-50 shadow-sm">
      <div className="p-4 bg-gray-100 rounded-full">
        <LockClosedIcon className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="mt-4 text-xl font-medium text-gray-900">Premium Subscription Required</h3>
      <p className="mt-2 text-gray-500 max-w-md">
        You need a premium subscription to access {feature}. Upgrade your account to unlock advanced analytics
        and insights that will help you make better connections.
      </p>
      <Link 
        href={ctaLink}
        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
      >
        {ctaText}
      </Link>
    </div>
  )
} 