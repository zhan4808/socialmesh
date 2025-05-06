"use client"

import { DashboardTabs } from "@/components/dashboard/DashboardTabs"

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <DashboardTabs />
    </div>
  )
} 