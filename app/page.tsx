'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-transparent text-gray-900 overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-50 opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Example animated SVG mesh background */}
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

      {/* Navbar */}
      <motion.nav 
        className="relative z-10 px-8 py-8 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-lg font-bold">SM</span>
          </div>
          <span className="text-2xl font-bold tracking-tight">SocialMesh</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-10">
          <Link href="#how-it-works" className="text-base hover:text-indigo-300 transition-colors">How It Works</Link>
          <Link href="#pricing" className="text-base hover:text-indigo-300 transition-colors">Pricing</Link>
          <Link href="#testimonials" className="text-base hover:text-indigo-300 transition-colors">Testimonials</Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link href="/auth/signin" className="text-base text-indigo-300 hover:text-white transition-colors">Log In</Link>
          <Link href="/auth/signin">
            <motion.button 
              className="text-base px-5 py-2.5 rounded-full bg-white text-indigo-900 font-medium hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign Up
            </motion.button>
          </Link>
        </div>
      </motion.nav>

      {/* Hero section */}
      <div className="container mx-auto max-w-5xl text-center px-4">
        <motion.div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We just raised $5.3 million in seed funding
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="inline-block mr-3">Professional</span>{' '}
          <span className="inline-block relative mr-3">
            Networking
            <span className="absolute -top-1 -right-1 -left-1 h-full rounded bg-gradient-to-r from-indigo-500 to-purple-600 opacity-40 blur-xl"></span>
          </span>{' '}
          <span className="inline-block">on Autopilot</span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          SocialMesh is an AI-powered platform that intelligently matches professionals based on career goals, skills, and industry alignment.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/auth/signin">
            <motion.button 
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-medium shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              Sign in with LinkedIn
            </motion.button>
            </Link>
          <Link href="#how-it-works">
            <motion.button 
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-lg font-medium hover:bg-white/15 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn more
            </motion.button>
            </Link>
        </motion.div>
        
        {/* AI interface mockup */}
        <motion.div
          className="relative max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md shadow-2xl border border-white/10 p-6">
            <div className="flex justify-between items-center mb-6 px-2">
              <div className="flex space-x-3 items-center">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-base font-medium">SocialMesh AI</div>
              </div>
              <div className="text-sm text-gray-400 font-mono">04:15</div>
            </div>
            
            <div className="mb-6 px-2">
              <div className="text-gray-500 mb-3 text-sm font-medium">AI Response</div>
              <div className="text-gray-900 leading-relaxed">
                <p>Based on your profile, I've identified 5 high-value connection opportunities in the Product Management space at enterprise SaaS companies. Would you like me to draft personalized outreach messages?</p>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <div className="flex-1 h-10 bg-white/5 rounded-md border border-white/10"></div>
              <button className="px-5 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors">Send</button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* How it works */}
      <motion.section 
        id="how-it-works" 
        className="relative py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-20"
            variants={fadeIn}
          >
            How SocialMesh Works
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
          >
            <motion.div 
              className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/80 transition-all flex flex-col items-center text-center"
              variants={cardVariant}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-900/10 text-indigo-500 border border-indigo-500/10"
              >
                <span className="text-xl font-semibold">1</span>
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Connect with LinkedIn</h3>
              <p className="text-gray-600 leading-relaxed">Sign in with your LinkedIn account to automatically import your professional profile and preferences.</p>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/80 transition-all flex flex-col items-center text-center"
              variants={cardVariant}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-900/10 text-indigo-500 border border-indigo-500/10"
              >
                <span className="text-xl font-semibold">2</span>
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Get AI-Powered Matches</h3>
              <p className="text-gray-600 leading-relaxed">Our algorithm analyzes your profile to suggest connections based on shared interests, skills, and career goals.</p>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/80 transition-all flex flex-col items-center text-center"
              variants={cardVariant}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-900/10 text-indigo-500 border border-indigo-500/10"
              >
                <span className="text-xl font-semibold">3</span>
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Grow Your Network</h3>
              <p className="text-gray-600 leading-relaxed">Connect with your matches using our AI-crafted personalized outreach templates optimized for response rates.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        id="testimonials"
        className="relative py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-20"
            variants={fadeIn}
          >
            Why Professionals Love SocialMesh
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/80 transition-all flex flex-col gap-6 items-center text-center"
                variants={cardVariant}
                whileHover={{ y: -5 }}
              >
                <svg className="h-8 w-8 text-indigo-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-4 text-gray-700 italic leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-semibold">{testimonial.name.charAt(0)}</div>
                  <div className="text-left">
                    <p className="font-medium text-base text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative py-16 px-4 border-t border-white/10 bg-white/80 backdrop-blur">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">SM</span>
                </div>
                <span className="text-xl font-bold text-gray-900">SocialMesh</span>
              </div>
              <p className="text-sm text-gray-500">© 2023 SocialMesh. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Terms</Link>
              <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 

const testimonials = [
  {
    quote: "SocialMesh connected me with people in my industry I would have never met otherwise. It's been invaluable for my career growth.",
    name: "Alex Chen",
    title: "Product Manager"
  },
  {
    quote: "The quality of connections is what sets SocialMesh apart. Each match feels carefully curated for my specific goals.",
    name: "Sarah Johnson",
    title: "Software Engineer"
  },
  {
    quote: "I've found my last two job opportunities through contacts I made on SocialMesh. The platform really works!",
    name: "Michael Park",
    title: "Marketing Director"
  }
] 