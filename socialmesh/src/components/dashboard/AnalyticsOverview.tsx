import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, LineChart } from "lucide-react";
import Link from "next/link";
import { PremiumFeatureBox } from "./PremiumFeatureBox";

type AnalyticsOverviewProps = {
  isPremium: boolean;
  profileViews?: number;
  connectionRate?: number;
  messageResponseRate?: number;
};

export function AnalyticsOverview({
  isPremium,
  profileViews = 0,
  connectionRate = 0,
  messageResponseRate = 0,
}: AnalyticsOverviewProps) {
  if (!isPremium) {
    return (
      <PremiumFeatureBox
        title="Premium Analytics"
        description="Unlock powerful insights about your professional network"
        features={[
          "Track profile views and search appearances",
          "Analyze connection and message response rates",
          "Discover industry trends and network distribution",
          "Get personalized recommendations to grow your network"
        ]}
        buttonText="Upgrade for Analytics"
        buttonHref="/dashboard?tab=premium"
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Analytics Overview</h3>
        <Button variant="outline" asChild>
          <Link href="/dashboard?tab=analytics">View Full Analytics</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profile Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{profileViews}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Connection Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{connectionRate.toFixed(1)}%</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Message Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{messageResponseRate.toFixed(1)}%</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              <span>Network Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-center justify-center">
              <p className="text-gray-500">View full analytics for detailed insights</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              <span>Weekly Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-40 flex items-center justify-center">
              <p className="text-gray-500">View full analytics for detailed insights</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 