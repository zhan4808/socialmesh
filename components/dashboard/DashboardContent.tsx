'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import MatchCard from './MatchCard'
import StatsCard from './StatsCard'

type Match = {
  id: string
  name: string
  headline: string
  profileImage: string
  matchScore: number
  matchReasons: string[]
}

export default function DashboardContent() {
  const { data: session } = useSession()
  const [matches, setMatches] = useState<Match[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Mock data - in a real app, this would be fetched from API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setMatches([
        {
          id: '1',
          name: 'Sarah Johnson',
          headline: 'Software Engineer at TechCorp',
          profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
          matchScore: 92,
          matchReasons: ['Same industry', 'Similar skills', 'Mutual connections']
        },
        {
          id: '2',
          name: 'David Kim',
          headline: 'Product Manager at InnovateCo',
          profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
          matchScore: 88,
          matchReasons: ['Complementary skills', 'Similar background', 'Shared interests']
        },
        {
          id: '3',
          name: 'Emily Rodriguez',
          headline: 'UX Designer at DesignStudio',
          profileImage: 'https://randomuser.me/api/portraits/women/68.jpg',
          matchScore: 84,
          matchReasons: ['Collaborative potential', 'Similar career path', 'Geographical proximity']
        }
      ])
      setIsLoading(false)
    }, 1000)
  }, [])

  const stats = [
    { title: 'Profile Views', value: 142, change: '+22%', description: 'from last month' },
    { title: 'Connection Rate', value: '68%', change: '+5%', description: 'from last month' },
    { title: 'Messages', value: 24, change: '+12', description: 'new this week' },
    { title: 'Potential Matches', value: 38, change: '+7', description: 'new matches' }
  ]

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>
      
      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </div>
      
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Your Top Matches</h2>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </div>
      
      <div>
        <h2 className="mb-4 text-xl font-semibold text-gray-900">Grow Your Network</h2>
        <div className="rounded-lg bg-white p-6 shadow">
          <p className="mb-3 text-gray-600">Complete these actions to improve your matching results:</p>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs text-primary-800">1</span>
              <span>Add at least 5 skills to your profile</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs text-primary-800">2</span>
              <span>Specify your networking goals</span>
            </li>
            <li className="flex items-center">
              <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-xs text-primary-800">3</span>
              <span>Complete your work experience</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 