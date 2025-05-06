'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Check } from 'lucide-react'

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    description: 'Basic networking features',
    features: [
      'Up to 5 matches per week',
      'Basic profile visibility',
      'Standard matching algorithm',
      'Message with connections'
    ],
    cta: 'Current Plan',
    disabled: true
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$9.99',
    period: 'monthly',
    description: 'Enhanced networking experience',
    features: [
      'Unlimited matches',
      'Advanced analytics and insights',
      'Priority matchmaking',
      'Advanced filtering options',
      'See who viewed your profile',
      'Extended message history'
    ],
    cta: 'Upgrade to Premium',
    highlighted: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Contact Us',
    description: 'For teams and organizations',
    features: [
      'Team collaboration features',
      'Dedicated account manager',
      'Custom integration options',
      'Team analytics dashboard',
      'Bulk connection management',
      'API access'
    ],
    cta: 'Contact Sales'
  }
]

export default function PremiumPlans() {
  const router = useRouter()
  const { data: session } = useSession()
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (planId: string) => {
    setSelectedPlan(planId)
    setIsLoading(true)
    
    try {
      // In a real implementation, this would call an API to handle the subscription process
      // and integrate with a payment provider like Stripe
      console.log(`Subscribing to ${planId} plan`)
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Redirect to success page
      router.push('/dashboard/premium/success')
    } catch (error) {
      console.error('Error subscribing to plan:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-900">Choose Your Plan</h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div 
            key={plan.id}
            className={`overflow-hidden rounded-lg border ${
              plan.highlighted 
                ? 'border-primary-500 ring-1 ring-primary-500' 
                : 'border-gray-200'
            }`}
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <div className="mt-2 flex items-baseline text-gray-900">
                <span className="text-3xl font-bold tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className="ml-1 text-sm text-gray-500">/{plan.period}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-gray-500">{plan.description}</p>
              
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex text-sm">
                    <Check className="mr-3 h-5 w-5 flex-shrink-0 text-primary-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-50 px-6 py-4">
              <button
                onClick={() => !plan.disabled && handleSubscribe(plan.id)}
                disabled={plan.disabled || isLoading || (selectedPlan === plan.id && isLoading)}
                className={`w-full rounded-md px-4 py-2 text-sm font-medium ${
                  plan.highlighted
                    ? 'bg-primary-600 text-white hover:bg-primary-700 disabled:bg-primary-300'
                    : plan.disabled 
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                }`}
              >
                {selectedPlan === plan.id && isLoading ? 'Processing...' : plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 rounded-lg bg-gray-50 p-6">
        <h3 className="text-lg font-medium text-gray-900">Premium Analytics Features</h3>
        <p className="mt-2 text-sm text-gray-600">
          Upgrade to Premium to unlock advanced analytics and insights including:
        </p>
        <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <li className="flex items-center text-sm text-gray-600">
            <Check className="mr-2 h-5 w-5 text-primary-500" />
            Connection success rate analysis
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="mr-2 h-5 w-5 text-primary-500" />
            Profile view trends and insights
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="mr-2 h-5 w-5 text-primary-500" />
            Industry-specific networking metrics
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="mr-2 h-5 w-5 text-primary-500" />
            Personalized networking recommendations
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="mr-2 h-5 w-5 text-primary-500" />
            Performance benchmarks against peers
          </li>
          <li className="flex items-center text-sm text-gray-600">
            <Check className="mr-2 h-5 w-5 text-primary-500" />
            Export analytics to PDF and CSV
          </li>
        </ul>
      </div>
    </div>
  )
} 