'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type MatchProps = {
  match: {
    id: string
    name: string
    headline: string
    profileImage: string
    matchScore: number
    matchReasons: string[]
  }
}

export default function MatchCard({ match }: MatchProps) {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl bg-white/70 backdrop-blur shadow-2xl hover:shadow-3xl transition-shadow border border-white/30"
      whileHover={{ y: -4, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="p-6">
        <div className="flex items-center">
          <div className="relative h-16 w-16 flex-shrink-0">
            <Image
              src={match.profileImage}
              alt={match.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-medium text-gray-900">{match.name}</h3>
            <p className="text-sm text-gray-500">{match.headline}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700">Match score</span>
            <span className="font-medium text-primary-700">{match.matchScore}%</span>
          </div>
          <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
            <div 
              className="h-2 rounded-full bg-primary-600" 
              style={{ width: `${match.matchScore}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700">Why you match:</h4>
          <ul className="mt-2 space-y-1 text-xs text-gray-500">
            {match.matchReasons.map((reason, index) => (
              <li key={index} className="flex items-center">
                <svg className="mr-1.5 h-3 w-3 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="flex border-t border-gray-200 divide-x divide-gray-200 bg-white/60">
        <Link
          href={`/dashboard/matches/${match.id}`}
          className="flex flex-1 items-center justify-center py-3 text-sm font-medium text-primary-600 hover:bg-primary-50"
        >
          View Profile
        </Link>
        <Link
          href={`/dashboard/messages/new?match=${match.id}`}
          className="flex flex-1 items-center justify-center py-3 text-sm font-medium text-primary-600 hover:bg-primary-50"
        >
          Connect
        </Link>
      </div>
    </motion.div>
  )
} 