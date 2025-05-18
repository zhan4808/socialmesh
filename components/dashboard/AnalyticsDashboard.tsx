'use client'

import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { motion, AnimatePresence } from 'framer-motion'

interface AnalyticsDashboardProps {
  userId?: string
}

// Mock data for analytics - in a real app, this would come from the API
const mockData = {
  profileViewsOverTime: [
    { date: 'Jan', views: 15 },
    { date: 'Feb', views: 22 },
    { date: 'Mar', views: 19 },
    { date: 'Apr', views: 28 },
    { date: 'May', views: 42 },
    { date: 'Jun', views: 56 },
  ],
  connectionsByIndustry: [
    { name: 'Technology', value: 35 },
    { name: 'Finance', value: 20 },
    { name: 'Healthcare', value: 15 },
    { name: 'Education', value: 12 },
    { name: 'Marketing', value: 18 },
  ],
  responseRates: [
    { status: 'Accepted', rate: 68 },
    { status: 'Pending', rate: 22 },
    { status: 'Rejected', rate: 10 },
  ],
  matchQualityOverTime: [
    { month: 'Jan', score: 62 },
    { month: 'Feb', score: 68 },
    { month: 'Mar', score: 71 },
    { month: 'Apr', score: 75 },
    { month: 'May', score: 82 },
    { month: 'Jun', score: 88 },
  ],
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export default function AnalyticsDashboard({ userId }: AnalyticsDashboardProps) {
  const { data: session } = useSession()
  const [activeTab, setActiveTab] = useState('overview')
  
  // In a real app, we would fetch analytics data from the API
  useEffect(() => {
    console.log('Fetching analytics data for user', userId)
    // This would be an API call in a real implementation
  }, [userId])

  return (
    <div className="space-y-10">
      {/* Tabs */}
      <motion.div className="border-b border-gray-200 bg-white/70 backdrop-blur rounded-2xl px-4 py-2 shadow" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <nav className="-mb-px flex space-x-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`whitespace-nowrap border-b-2 py-3 px-1 text-sm font-medium ${
              activeTab === 'overview'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('connections')}
            className={`whitespace-nowrap border-b-2 py-3 px-1 text-sm font-medium ${
              activeTab === 'connections'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Connections
          </button>
          <button
            onClick={() => setActiveTab('engagement')}
            className={`whitespace-nowrap border-b-2 py-3 px-1 text-sm font-medium ${
              activeTab === 'engagement'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Engagement
          </button>
          <button
            onClick={() => setActiveTab('exports')}
            className={`whitespace-nowrap border-b-2 py-3 px-1 text-sm font-medium ${
              activeTab === 'exports'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Export & Reports
          </button>
        </nav>
      </motion.div>
      
      {/* Stats Overview */}
      <motion.div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Total Profile Views</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">2,542</dd>
          <dd className="mt-2 flex items-center text-sm">
            <span className="text-green-600">+12.5%</span>
            <span className="ml-2 text-gray-500">from last month</span>
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Connection Success Rate</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">68%</dd>
          <dd className="mt-2 flex items-center text-sm">
            <span className="text-green-600">+5.2%</span>
            <span className="ml-2 text-gray-500">from last month</span>
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Average Match Quality</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">82/100</dd>
          <dd className="mt-2 flex items-center text-sm">
            <span className="text-green-600">+8 points</span>
            <span className="ml-2 text-gray-500">from last month</span>
          </dd>
        </div>
        <div className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">Network Growth</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">+38</dd>
          <dd className="mt-2 flex items-center text-sm">
            <span className="text-green-600">+24.8%</span>
            <span className="ml-2 text-gray-500">from last month</span>
          </dd>
        </div>
      </motion.div>
      
      {/* Charts */}
      <AnimatePresence mode="wait">
        <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }} className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Profile Views Chart */}
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow">
            <h3 className="text-base font-medium text-gray-900">Profile Views Over Time</h3>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockData.profileViewsOverTime}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="views" stroke="#0284c7" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Match Quality Chart */}
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow">
            <h3 className="text-base font-medium text-gray-900">Match Quality Over Time</h3>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockData.matchQualityOverTime}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="score" stroke="#15803d" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Connections by Industry */}
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow">
            <h3 className="text-base font-medium text-gray-900">Connections by Industry</h3>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={mockData.connectionsByIndustry}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {mockData.connectionsByIndustry.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Response Rates */}
          <div className="overflow-hidden rounded-lg bg-white p-6 shadow">
            <h3 className="text-base font-medium text-gray-900">Connection Response Rates</h3>
            <div className="mt-6 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={mockData.responseRates}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="status" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="rate" fill="#0284c7" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 