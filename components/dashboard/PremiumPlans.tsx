'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckIcon, XIcon } from 'lucide-react'
import { motion } from 'framer-motion'

interface PremiumPlansProps {
  userId?: string
}

interface PlanFeature {
  name: string
  included: boolean
}

interface Plan {
  id: string
  name: string
  price: number
  description: string
  features: PlanFeature[]
  buttonText: string
  popular?: boolean
}

export default function PremiumPlans({ userId }: PremiumPlansProps) {
  const router = useRouter()
  const [loading, setLoading] = useState<string | null>(null)

  // Define the plans
  const plans: Plan[] = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      description: 'Basic features for getting started',
      features: [
        { name: 'Basic profile page', included: true },
        { name: 'Up to 10 matches per month', included: true },
        { name: 'Standard matching algorithm', included: true },
        { name: 'Basic analytics', included: true },
        { name: 'Community support', included: true },
        { name: 'Priority matching', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Premium filter options', included: false },
      ],
      buttonText: 'Current Plan',
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 19.99,
      description: 'Everything you need for professional networking',
      features: [
        { name: 'Enhanced profile page', included: true },
        { name: 'Unlimited matches', included: true },
        { name: 'Priority matching algorithm', included: true },
        { name: 'Advanced analytics dashboard', included: true },
        { name: 'Email support', included: true },
        { name: 'See who viewed your profile', included: true },
        { name: 'Advanced filtering options', included: true },
        { name: 'Export data and reports', included: true },
      ],
      buttonText: 'Subscribe',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 49.99,
      description: 'Advanced features for power networkers',
      features: [
        { name: 'Custom profile branding', included: true },
        { name: 'Unlimited matches with priority', included: true },
        { name: 'Executive matching algorithm', included: true },
        { name: 'Real-time analytics dashboard', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Profile visibility boost', included: true },
        { name: 'Custom filters and preferences', included: true },
        { name: 'API access for integration', included: true },
      ],
      buttonText: 'Contact Sales',
    },
  ]

  const handleSubscribe = async (planId: string) => {
    if (planId === 'free') return
    
    setLoading(planId)
    
    try {
      // In a real app, this would create a Stripe checkout session
      // and redirect the user to Stripe's checkout page
      
      // Mock API call to create subscription
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (planId === 'enterprise') {
        // For enterprise, we might redirect to a contact form
        alert('For enterprise plans, please contact our sales team.')
        setLoading(null)
        return
      }
      
      // For premium, redirect to success page
      // In a real implementation, this would be handled by Stripe's webhook
      router.push('/dashboard/premium/success')
    } catch (error) {
      console.error('Subscription error:', error)
      alert('Failed to process subscription. Please try again.')
      setLoading(null)
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 space-y-12">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <motion.div 
            key={plan.id}
            className={`rounded-2xl border ${plan.popular ? 'border-indigo-500 shadow-2xl' : 'border-gray-200'} bg-white/70 backdrop-blur overflow-hidden transition-shadow`}
            whileHover={{ y: -6, scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            {plan.popular && (
              <div className="bg-primary-500 text-white text-center text-sm font-medium py-1">
                Most Popular
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              
              <div className="mt-4 flex items-baseline">
                <span className="text-3xl font-bold tracking-tight text-gray-900">
                  ${plan.price}
                </span>
                <span className="ml-1 text-sm font-medium text-gray-500">/month</span>
              </div>
              
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" />
                    ) : (
                      <XIcon className="h-5 w-5 flex-shrink-0 text-gray-400" />
                    )}
                    <span className={`ml-3 text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={loading === plan.id || plan.id === 'free'}
                  className={`w-full rounded-md px-4 py-2 text-sm font-medium ${
                    plan.id === 'free'
                      ? 'bg-gray-100 text-gray-700 cursor-default'
                      : plan.popular
                        ? 'bg-primary-600 text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
                        : 'bg-white text-primary-600 ring-1 ring-inset ring-primary-600 hover:bg-gray-50'
                  }`}
                >
                  {loading === plan.id ? 'Processing...' : plan.buttonText}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div className="rounded-2xl bg-white/70 backdrop-blur p-8 shadow-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h3 className="text-lg font-medium text-gray-900">Need something different?</h3>
        <p className="mt-1 text-sm text-gray-500">
          Contact our sales team for custom plans and enterprise pricing. We can create a tailored solution for your organization.
        </p>
        <div className="mt-4">
          <a 
            href="mailto:sales@automatch.com" 
            className="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            Contact Sales →
          </a>
        </div>
      </motion.div>
    </div>
  )
} 