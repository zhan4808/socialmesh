'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navigation() {
  const { data: session } = useSession()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard', current: pathname === '/dashboard' },
    { name: 'Matches', href: '/dashboard/matches', current: pathname.startsWith('/dashboard/matches') },
    { name: 'Messages', href: '/dashboard/messages', current: pathname.startsWith('/dashboard/messages') },
    { name: 'Profile', href: '/dashboard/profile', current: pathname.startsWith('/dashboard/profile') },
    { name: 'Analytics', href: '/dashboard/analytics', current: pathname.startsWith('/dashboard/analytics') },
    { name: 'Premium', href: '/dashboard/premium', current: pathname.startsWith('/dashboard/premium') },
  ]

  return (
    <motion.nav 
      className="fixed top-6 left-1/2 z-50 w-[90vw] max-w-5xl -translate-x-1/2 rounded-2xl bg-white/60 backdrop-blur-lg shadow-2xl border border-white/30 flex items-center justify-between px-8 py-4 container mx-auto max-w-5xl px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Link href="/" className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <span className="text-lg font-bold text-white">SM</span>
        </div>
        <span className="text-2xl font-bold tracking-tight text-gray-900">SocialMesh</span>
      </Link>
      <div className="hidden md:flex items-center space-x-10">
        {navigation.map((item, i) => (
          <motion.div key={item.name} whileHover={{ y: -2, scale: 1.08 }}>
            <Link
              href={item.href}
              className={`text-base px-2 py-1 rounded transition-colors duration-200 ${item.current ? 'text-indigo-600 font-semibold' : 'text-gray-700 hover:text-indigo-500'}`}
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex items-center space-x-6">
        {session?.user ? (
          <motion.div whileHover={{ scale: 1.05 }}>
            <button
              onClick={toggleMenu}
              className="flex items-center space-x-2 rounded-full bg-white/80 px-4 py-2 shadow border border-white/30 hover:bg-white"
            >
              {session.user.image ? (
                <Image src={session.user.image} alt="" width={32} height={32} className="rounded-full" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                  {session.user.name?.charAt(0) || 'U'}
                </div>
              )}
              <span className="font-medium text-gray-900">{session.user.name?.split(' ')[0]}</span>
            </button>
            {isMenuOpen && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute right-0 mt-2 w-56 rounded-xl bg-white/90 shadow-2xl border border-white/30 p-4 z-50">
                <p className="mb-2 text-sm text-gray-700 font-semibold">{session.user.name || session.user.email}</p>
                <Link href="/dashboard/profile" className="block py-2 text-gray-700 hover:text-indigo-600">Your Profile</Link>
                <Link href="/dashboard/settings" className="block py-2 text-gray-700 hover:text-indigo-600">Settings</Link>
                <Link href="/dashboard/premium" className="block py-2 text-gray-700 hover:text-indigo-600">Upgrade to Premium</Link>
                <button onClick={() => signOut({ callbackUrl: '/' })} className="block w-full text-left py-2 text-gray-700 hover:text-red-500">Sign out</button>
              </motion.div>
            )}
          </motion.div>
        ) : (
          <>
            <Link href="/auth/signin" className="text-base text-indigo-600 hover:text-indigo-800 transition-colors">Log In</Link>
            <Link href="/auth/signin">
              <motion.button 
                className="text-base px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                Sign Up
              </motion.button>
            </Link>
          </>
        )}
      </div>
    </motion.nav>
  )
} 