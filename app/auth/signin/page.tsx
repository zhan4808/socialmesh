'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    setIsLoading(true)
    try {
      await signIn('linkedin', { 
        callbackUrl: '/dashboard',
        redirect: true
      })
    } catch (error) {
      console.error('LinkedIn sign-in error:', error)
      setIsLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-transparent overflow-hidden relative px-4">
      <div className="container mx-auto max-w-md">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-50 opacity-90"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-30 animate-pulse">
              <ellipse cx="720" cy="400" rx="700" ry="300" fill="url(#paint0_radial)" />
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(720 400) scale(700 300)" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a5b4fc" />
                  <stop offset="1" stopColor="#f3e8ff" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        <motion.div 
          className="relative z-10 w-full max-w-md px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="absolute top-10 left-10 text-white hover:text-indigo-300 transition-colors flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-base">Back</span>
          </Link>

          <motion.div 
            className="rounded-2xl backdrop-blur-md bg-white/70 border border-white/10 p-10 shadow-2xl rounded-3xl"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="mb-10 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Link href="/" className="inline-block">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">SM</span>
                  </div>
                </div>
              </Link>
              <h1 className="mt-2 text-2xl font-bold text-white mb-4">Sign in to SocialMesh</h1>
              <p className="mt-2 text-white/70 text-lg leading-relaxed">Connect with your LinkedIn profile to get started</p>
            </motion.div>
            
            <motion.button
              onClick={handleSignIn}
              disabled={isLoading}
              className="relative flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-5 text-white text-lg font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 disabled:opacity-70 transition-all"
              whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {isLoading ? (
                <motion.div
                  className="h-6 w-6 rounded-full border-2 border-white border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  <svg className="mr-3 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"/>
                  </svg>
                  Connect with LinkedIn
                </>
              )}
            </motion.button>
            
            <motion.div 
              className="mt-10 pt-8 border-t border-white/10 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-base text-white/60 leading-relaxed">
                By signing in, you agree to our{' '}
                <Link href="/terms" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="/privacy" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  Privacy Policy
                </Link>
              </p>
            </motion.div>
            
            <motion.div
              className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex items-start">
                <svg className="h-5 w-5 text-indigo-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm text-white/70 leading-relaxed">
                  If you're experiencing issues with LinkedIn authentication, please try again later as we may be experiencing 
                  temporary rate limiting.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
} 