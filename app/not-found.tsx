"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              SocialMesh
            </Link>
          </div>
        </div>
      </header>

      <motion.div 
        className="flex flex-1 items-center justify-center px-6 py-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-40 w-40">
              <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-2xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-bold text-transparent bg-clip-text cluely-gradient">404</span>
              </div>
            </div>
          </div>
          
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">Page not found</h1>
          <p className="mt-4 text-lg text-gray-600">Sorry, we couldn't find the page you're looking for.</p>
          
          <div className="mt-10">
            <Button asChild className="btn-cluely px-6 py-3">
              <Link href="/">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </Button>
          </div>

          <div className="mt-16">
            <p className="text-sm text-gray-500">
              If you think this is an error, please contact{" "}
              <a href="mailto:support@socialmesh.app" className="font-medium text-blue-600 hover:text-blue-800">
                support@socialmesh.app
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
} 