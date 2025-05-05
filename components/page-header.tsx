"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { signOut } from "next-auth/react"
import { Button } from "./ui/button"
import { cn } from "../lib/utils"

interface PageHeaderProps {
  className?: string
  session?: any
}

export function PageHeader({ className, session }: PageHeaderProps) {
  // Subtle animations for a refined experience
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: -8 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  return (
    <motion.header
      variants={container}
      initial="hidden"
      animate="show"
      className={cn(
        "fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md",
        className
      )}
    >
      <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8">
        <motion.div variants={item}>
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 overflow-hidden rounded-full">
              <div className="h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            </div>
            <span className="text-xl font-medium tracking-tight">SocialMesh</span>
          </Link>
        </motion.div>

        <motion.div variants={item} className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-6">
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  Dashboard
                </Link>
                <Link
                  href="/scrape"
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  Intelligence
                </Link>
              </>
            ) : (
              <Link
                href="/about"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                About
              </Link>
            )}
          </nav>

          {session ? (
            <div className="flex items-center gap-3">
              <div className="hidden md:block text-sm font-medium">
                {session?.user?.name?.split(' ')[0] || 'User'}
              </div>
              {session?.user?.image ? (
                <div className="h-8 w-8 overflow-hidden rounded-full border border-border">
                  <img 
                    src={session.user.image} 
                    alt={session.user.name || 'User'} 
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary">
                  <span className="text-xs font-medium">
                    {session?.user?.name?.[0] || session?.user?.email?.[0] || 'U'}
                  </span>
                </div>
              )}
              <Button
                onClick={() => signOut({ callbackUrl: '/' })}
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-foreground/70 hover:text-foreground"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </Button>
            </div>
          ) : (
            <Button asChild size="sm" className="h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 font-medium text-white">
              <Link href="/login">Sign in</Link>
            </Button>
          )}
        </motion.div>
      </div>
    </motion.header>
  )
} 