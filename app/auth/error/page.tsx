'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get('error')
  
  // Custom error messages based on the error type
  const getErrorMessage = () => {
    switch (error) {
      case 'Callback':
        return 'LinkedIn authentication service is currently rate-limited. Please wait a few minutes before trying again.'
      case 'AccessDenied':
        return 'You need to grant permission to your LinkedIn profile to continue.'
      case 'OAuthSignin':
        return 'Error during the sign-in process. Please try again.'
      case 'OAuthCallback':
        return 'LinkedIn authentication service is temporarily unavailable. Please try again later.'
      case 'SessionRequired':
        return 'You need to be signed in to access this page.'
      default:
        return 'An unexpected error occurred during authentication. Please try again.'
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#020B34] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#020B34]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102060] via-[#020B34] to-[#200030] opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] rounded-full bg-purple-800 filter blur-[100px] opacity-20 transform translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] rounded-full bg-blue-600 filter blur-[100px] opacity-20 transform -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-md px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 p-10 shadow-2xl"
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-10 flex justify-center">
            <motion.div 
              className="flex h-24 w-24 items-center justify-center rounded-full bg-red-500/20 text-red-400 border border-red-500/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.div>
          </div>
          
          <motion.div 
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="mb-4 text-2xl font-bold text-white">Authentication Error</h1>
            <p className="text-white/70 text-lg leading-relaxed">{getErrorMessage()}</p>
          </motion.div>
          
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="/auth/signin">
                <motion.button 
                  className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-5 text-white text-lg font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all"
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 20px rgba(79, 70, 229, 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  Try Again
                </motion.button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link href="/">
                <motion.button 
                  className="flex w-full items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-5 text-white text-lg font-medium hover:bg-white/15 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Back to Home
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-10 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
              <h3 className="text-base font-medium text-white mb-3">Why am I seeing this error?</h3>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">
                LinkedIn may temporarily limit access to their API if there are too many authentication requests 
                from our application. This is a common protection mechanism to prevent abuse.
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                You can usually resolve this by waiting a few minutes before trying again, or by ensuring you've
                correctly granted all required permissions.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  )
} 