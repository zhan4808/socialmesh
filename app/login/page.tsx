import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ClientLoginForm } from "./client-form"

export const metadata: Metadata = {
  title: "Login | SocialMesh",
  description: "Sign in to your SocialMesh account",
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              SocialMesh
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Back to home
            </Link>
          </div>
        </div>
      </header>

      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* Left side with login form */}
            <div className="p-8 sm:p-12">
              <div className="mb-10">
                <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
                <p className="mt-2 text-gray-600">Sign in to continue to SocialMesh</p>
              </div>
              <ClientLoginForm />
            </div>
            
            {/* Right side with gradient background */}
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
                <div className="flex h-full flex-col justify-between p-12 text-white">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">
                      Connect your social networks
                    </h2>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-center">
                        <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Connect all your accounts
                      </li>
                      <li className="flex items-center">
                        <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        AI-powered network analysis
                      </li>
                      <li className="flex items-center">
                        <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Advanced relationship insights
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-sm opacity-80">
                    &copy; {new Date().getFullYear()} SocialMesh. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 