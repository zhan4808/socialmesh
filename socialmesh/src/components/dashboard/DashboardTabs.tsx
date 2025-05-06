"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SuggestedMatches } from "./SuggestedMatches";
import { Messages } from "./Messages";
import { Profile } from "./Profile";
import { Analytics } from "./Analytics";
import { PremiumUpgrade } from "./PremiumUpgrade";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnalyticsOverview } from "./AnalyticsOverview";

export function DashboardTabs() {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [activeTab, setActiveTab] = useState("matches");
  const [isPremium, setIsPremium] = useState(false);
  const [analyticsData, setAnalyticsData] = useState({
    profileViews: 0,
    connectionRate: 0,
    responseRate: 0,
  });

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["matches", "messages", "profile", "analytics", "premium"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  useEffect(() => {
    // Fetch premium status
    const checkPremiumStatus = async () => {
      try {
        const response = await fetch("/api/premium");
        if (response.ok) {
          const data = await response.json();
          setIsPremium(data.isPremium || false);
        }
      } catch (error) {
        console.error("Failed to check premium status:", error);
      }
    };

    if (session?.user?.id) {
      checkPremiumStatus();
    }
  }, [session]);

  useEffect(() => {
    // Fetch analytics preview data for premium users
    const fetchAnalyticsPreview = async () => {
      if (!isPremium) return;
      
      try {
        const response = await fetch("/api/analytics");
        if (response.ok) {
          const data = await response.json();
          setAnalyticsData({
            profileViews: data.analytics.profileViews || 0,
            connectionRate: data.summary.connectionRate || 0,
            responseRate: data.summary.responseRate || 0,
          });
        }
      } catch (error) {
        console.error("Failed to fetch analytics preview:", error);
      }
    };

    if (session?.user?.id && isPremium) {
      fetchAnalyticsPreview();
    }
  }, [session, isPremium]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(`/dashboard?tab=${value}`, { scroll: false });
  };

  if (!session?.user?.id) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>Please sign in to access your dashboard</p>
      </div>
    );
  }

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="matches">Matches</TabsTrigger>
        <TabsTrigger value="messages">Messages</TabsTrigger>
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="premium">Premium</TabsTrigger>
      </TabsList>
      
      <TabsContent value="matches" className="mt-6">
        <SuggestedMatches userId={session.user.id} />
      </TabsContent>
      
      <TabsContent value="messages" className="mt-6">
        <Messages userId={session.user.id} />
      </TabsContent>
      
      <TabsContent value="profile" className="mt-6">
        <Profile userId={session.user.id} />
      </TabsContent>
      
      <TabsContent value="analytics" className="mt-6">
        {isPremium ? (
          <Analytics userId={session.user.id} />
        ) : (
          <div className="max-w-xl mx-auto">
            <AnalyticsOverview isPremium={false} />
          </div>
        )}
      </TabsContent>
      
      <TabsContent value="premium" className="mt-6">
        <PremiumUpgrade />
      </TabsContent>
    </Tabs>
  );
} 