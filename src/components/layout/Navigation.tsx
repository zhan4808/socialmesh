'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

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
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex flex-shrink-0 items-center">
              <span className="text-xl font-bold text-primary-600">SocialMesh</span>
            </Link>
            <div className="hidden md:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      item.current
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center">
              {session?.user && (
                <div className="relative ml-3">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                      onClick={toggleMenu}
                    >
                      {session.user.image ? (
                        <Image
                          className="h-8 w-8 rounded-full"
                          src={session.user.image}
                          alt=""
                          width={32}
                          height={32}
                        />
                      ) : (
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-800">
                          {session.user.name?.charAt(0) || 'U'}
                        </div>
                      )}
                    </button>
                  </div>
                  
                  {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                      <p className="px-4 py-2 text-sm text-gray-700">{session.user.name || session.user.email}</p>
                      <div className="border-t border-gray-100"></div>
                      <Link
                        href="/dashboard/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Your Profile
                      </Link>
                      <Link
                        href="/dashboard/settings"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Settings
                      </Link>
                      <Link
                        href="/dashboard/premium"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Upgrade to Premium
                      </Link>
                      <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block rounded-md px-3 py-2 text-base font-medium ${
                item.current
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {session?.user && (
          <div className="border-t border-gray-200 pb-3 pt-4">
            <div className="flex items-center px-5">
              {session.user.image ? (
                <Image
                  className="h-10 w-10 rounded-full"
                  src={session.user.image}
                  alt=""
                  width={40}
                  height={40}
                />
              ) : (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-800">
                  {session.user.name?.charAt(0) || 'U'}
                </div>
              )}
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">{session.user.name}</div>
                <div className="text-sm font-medium text-gray-500">{session.user.email}</div>
              </div>
            </div>
            <div className="mt-3 space-y-1 px-2">
              <Link
                href="/dashboard/profile"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Your Profile
              </Link>
              <Link
                href="/dashboard/settings"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                href="/dashboard/premium"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Upgrade to Premium
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 