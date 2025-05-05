"use client"

import { motion } from "framer-motion";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { 
  ChevronRight, 
  LogOut, 
  MenuIcon, 
  Bell, 
  Home, 
  Users, 
  BarChart, 
  Settings,
  ArrowRight,
  Linkedin,
  Mail,
  PlusCircle,
  AlertCircle
} from "lucide-react";

export default function Dashboard() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  // Loading state
  if (status === "loading") {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="space-y-4 text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-t-blue-600 border-gray-200"></div>
          <p className="text-gray-500">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 border-r border-gray-200 bg-white md:block">
        <div className="flex h-16 items-center justify-between border-b border-gray-100 px-6">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">SocialMesh</span>
          </Link>
        </div>
        <nav className="flex flex-col p-4">
          <div className="space-y-1">
            <Link 
              href="/dashboard" 
              className="flex items-center rounded-lg bg-blue-50 px-4 py-2.5 text-sm font-medium text-blue-700"
            >
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link 
              href="#contacts" 
              className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <Users className="mr-3 h-5 w-5" />
              Contacts
            </Link>
            <Link 
              href="#analytics" 
              className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <BarChart className="mr-3 h-5 w-5" />
              Analytics
            </Link>
            <Link 
              href="#settings" 
              className="flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
          </div>
          <div className="mt-auto pt-6">
            <button 
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex w-full items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-500" />
              Sign Out
            </button>
          </div>
        </nav>
      </aside>

      {/* Mobile header */}
      <div className="flex w-full flex-col md:hidden">
        <header className="border-b border-gray-200 bg-white px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-lg font-semibold text-gray-900">
              SocialMesh
            </Link>
            <div className="flex items-center space-x-4">
              <button className="rounded-full p-1 text-gray-700 hover:bg-gray-100">
                <Bell className="h-6 w-6" />
              </button>
              <button className="rounded-full p-1 text-gray-700 hover:bg-gray-100">
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-auto">
        {/* Desktop header */}
        <header className="hidden border-b border-gray-200 bg-white md:block">
          <div className="flex h-16 items-center justify-between px-6">
            <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button className="rounded-full p-1 text-gray-700 hover:bg-gray-100">
                <Bell className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-gray-700">
                  {session?.user?.name || "User"}
                </span>
                <div className="relative h-8 w-8 overflow-hidden rounded-full">
                  {session?.user?.image ? (
                    <img
                      src={session.user.image}
                      alt={session.user.name || "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-600">
                      {session?.user?.name?.[0] || session?.user?.email?.[0] || "?"}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content area */}
        <motion.main 
          className="flex-1 py-6 px-4 md:px-6 lg:px-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto max-w-5xl space-y-6">
            {/* Welcome card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <Card className="overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90"></div>
                <CardContent className="relative p-6 md:p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="text-white">
                      <h2 className="text-2xl font-bold">Welcome back, {session?.user?.name?.split(' ')[0] || "User"}</h2>
                      <p className="mt-2 text-blue-100">
                        Connect your social accounts to start managing your network and get valuable insights.
                      </p>
                      <Button asChild className="mt-4 bg-white py-2 text-blue-600 hover:bg-blue-50">
                        <Link href="#start">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="h-32 w-32 rounded-full bg-white/10 p-2">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/20">
                          <Users className="h-12 w-12 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Connect accounts section */}
            <motion.div
              className="grid gap-6 md:grid-cols-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Profile Summary</CardTitle>
                  <CardDescription>
                    Your account details and information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                        {session?.user?.image ? (
                          <img
                            src={session.user.image}
                            alt={session.user.name || "User"}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-100 text-xl font-semibold text-blue-600">
                            {session?.user?.name?.[0] || session?.user?.email?.[0] || "?"}
                          </div>
                        )}
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-lg font-medium text-gray-900">{session?.user?.name || "User"}</h3>
                        <p className="text-sm text-gray-500">{session?.user?.email || "No email provided"}</p>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                      <dl className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <dt className="text-gray-500">Account ID:</dt>
                          <dd className="font-mono text-gray-700">{session?.user?.id?.substring(0, 8) || "Not available"}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-gray-500">Session Expires:</dt>
                          <dd className="text-gray-700">
                            {session?.expires
                              ? new Date(session.expires).toLocaleDateString()
                              : "Not available"}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Connect Accounts</CardTitle>
                  <CardDescription>
                    Link your social media accounts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    asChild
                    className="w-full justify-between bg-[#0A66C2] text-white hover:bg-[#004182]"
                  >
                    <Link href="/scrape">
                      <div className="flex items-center">
                        <Linkedin className="mr-2 h-5 w-5" />
                        Connect LinkedIn
                      </div>
                      <ChevronRight className="h-5 w-5 opacity-70" />
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-between text-gray-700"
                    disabled
                  >
                    <div className="flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-gray-500" />
                      Connect Gmail
                    </div>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                      Coming Soon
                    </span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-between text-gray-700"
                    disabled
                  >
                    <div className="flex items-center">
                      <PlusCircle className="mr-2 h-5 w-5 text-gray-500" />
                      Connect More Platforms
                    </div>
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                      Coming Soon
                    </span>
                  </Button>
                  
                  <div className="mt-4 flex items-start rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm text-yellow-800">
                    <AlertCircle className="mr-3 mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500" />
                    <p>Connect at least one account to start analyzing your professional network.</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
} 