'use client'

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async () => {
    setIsLoading(true)
    await signIn('linkedin', { callbackUrl: '/dashboard' })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <div className="mb-8 text-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">SocialMesh</Link>
          <h1 className="mt-6 text-2xl font-bold">Sign in to your account</h1>
          <p className="mt-2 text-gray-600">Connect with professionals who matter to your career</p>
        </div>
        
        <button
          onClick={handleSignIn}
          disabled={isLoading}
          className="flex w-full items-center justify-center rounded-lg bg-[#0077B5] px-4 py-3 text-white hover:bg-[#006699] disabled:opacity-70"
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"/>
              </svg>
              Sign in with LinkedIn
            </>
          )}
        </button>
      </div>
    </main>
  )
} 