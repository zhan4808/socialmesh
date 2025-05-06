'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

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
    <main className="flex min-h-screen flex-col bg-[#020B34] text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[#020B34]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#102060] via-[#020B34] to-[#200030] opacity-80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-purple-800 filter blur-[100px] opacity-20"></div>
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-blue-600 filter blur-[100px] opacity-20"></div>
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
      <div className="relative flex-1 flex flex-col items-center justify-center px-8 pb-20 pt-10">
        <motion.div
          className="absolute top-16 left-1/2 transform -translate-x-1/2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          We just raised $5.3 million in seed funding
        </motion.div>

        <div className="container mx-auto max-w-5xl text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight"
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
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
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
                <div className="text-gray-400 mb-3 text-sm font-medium">AI Response</div>
                <div className="text-white leading-relaxed">
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
          </div>

      {/* How it works */}
      <motion.section 
        id="how-it-works" 
        className="relative py-32 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto">
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
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all"
              variants={cardVariant}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-900/50 text-indigo-400 border border-indigo-500/30"
              >
                <span className="text-xl font-semibold">1</span>
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold">Connect with LinkedIn</h3>
              <p className="text-white/70 leading-relaxed">Sign in with your LinkedIn account to automatically import your professional profile and preferences.</p>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all"
              variants={cardVariant}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-900/50 text-indigo-400 border border-indigo-500/30"
              >
                <span className="text-xl font-semibold">2</span>
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold">Get AI-Powered Matches</h3>
              <p className="text-white/70 leading-relaxed">Our algorithm analyzes your profile to suggest connections based on shared interests, skills, and career goals.</p>
            </motion.div>
            
            <motion.div 
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all"
              variants={cardVariant}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-900/50 text-indigo-400 border border-indigo-500/30"
              >
                <span className="text-xl font-semibold">3</span>
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold">Grow Your Network</h3>
              <p className="text-white/70 leading-relaxed">Connect with your matches using our AI-crafted personalized outreach templates optimized for response rates.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        id="testimonials"
        className="relative py-32 px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto">
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
                className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all"
                variants={cardVariant}
                whileHover={{ y: -5 }}
              >
                <svg className="h-8 w-8 text-indigo-400 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="mb-8 text-white/80 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                    <span className="font-semibold">{testimonial.name.charAt(0)}</span>
            </div>
                  <div className="ml-4">
                    <p className="font-medium text-base">{testimonial.name}</p>
                    <p className="text-sm text-white/60 mt-1">{testimonial.title}</p>
            </div>
          </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="relative py-16 px-8 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-sm font-bold">SM</span>
                </div>
                <span className="text-xl font-bold">SocialMesh</span>
              </div>
              <p className="text-sm text-white/60">© 2023 SocialMesh. All rights reserved.</p>
            </div>
            <div className="flex gap-8">
              <Link href="/privacy" className="text-base text-white/60 hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="text-base text-white/60 hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="text-base text-white/60 hover:text-white transition-colors">Contact</Link>
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