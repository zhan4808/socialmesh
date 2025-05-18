'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import MatchCard from './MatchCard'
import StatsCard from './StatsCard'
import { motion } from 'framer-motion'

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
      <motion.h1 className="mb-8 text-3xl font-bold text-gray-900" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>Dashboard</motion.h1>
      <motion.div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        {stats.map((stat, index) => (
          <StatsCard key={index} stat={stat} />
        ))}
      </motion.div>
      <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Your Top Matches</h2>
        {isLoading ? (
          <div className="flex justify-center py-8">
            <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {matches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h2 className="mb-6 text-2xl font-semibold text-gray-900">Grow Your Network</h2>
        <div className="rounded-2xl bg-white/70 p-8 shadow-2xl backdrop-blur border border-white/30">
          <p className="mb-4 text-gray-600">Complete these actions to improve your matching results:</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-sm text-indigo-700 font-bold">1</span>
              <span>Add at least 5 skills to your profile</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-sm text-indigo-700 font-bold">2</span>
              <span>Specify your networking goals</span>
            </li>
            <li className="flex items-center">
              <span className="mr-3 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-sm text-indigo-700 font-bold">3</span>
              <span>Complete your work experience</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  )
} 