"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AnalyticsData = {
  analytics: {
    id: string;
    userId: string;
    profileViews: number;
    searchAppearances: number;
    connectionRate: number | null;
    responseRate: number | null;
    industryConnectionsData: Record<string, number> | null;
    skillsMatchData: Record<string, number> | null;
    weeklyActivity: {
      profileViews: number;
      newConnections: number;
      messagesSent: number;
      messagesReceived: number;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  summary: {
    totalConnections: number;
    acceptedConnections: number;
    connectionRate: number;
    totalMessagesSent: number;
    totalMessagesReceived: number;
    responseRate: number;
    industryDistribution: Record<string, number>;
    weeklyActivity: {
      profileViews: number;
      newConnections: number;
      messagesSent: number;
      messagesReceived: number;
    };
  };
};

// Placeholder charts
const BarChart = ({ data, title }: { data: Record<string, number>; title: string }) => (
  <div className="h-64 w-full">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <div className="relative h-48 w-full">
      {Object.entries(data).map(([label, value], i) => (
        <div key={label} className="flex items-center mb-2">
          <div className="w-40 truncate text-sm">{label}</div>
          <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: `${Math.min(100, (value / Math.max(...Object.values(data))) * 100)}%` }}
            ></div>
          </div>
          <div className="w-10 text-right text-sm ml-2">{value}</div>
        </div>
      ))}
    </div>
  </div>
);

const LineChart = ({ data, title }: { data: Record<string, number>; title: string }) => (
  <div className="h-64 w-full">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <div className="relative h-48 w-full bg-gray-50 border rounded-md flex items-end justify-around p-4">
      {Object.entries(data).map(([label, value], i) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className="w-12 bg-blue-500 rounded-t-md"
            style={{ height: `${Math.min(100, (value / Math.max(...Object.values(data))) * 100)}%` }}
          ></div>
          <div className="text-xs mt-2 truncate w-16 text-center">{label}</div>
        </div>
      ))}
    </div>
  </div>
);

const PieChart = ({ data, title }: { data: Record<string, number>; title: string }) => (
  <div className="h-64 w-full">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-medium">{title}</h3>
    </div>
    <div className="relative h-48 w-full flex items-center justify-center">
      <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-200">
        {Object.entries(data).map(([label, value], i, arr) => {
          const total = Object.values(data).reduce((sum, val) => sum + val, 0);
          const percentage = (value / total) * 100;
          
          // Creating a simple pie chart representation
          const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
          return (
            <div
              key={label}
              className={`absolute inset-0 ${colors[i % colors.length]}`}
              style={{
                clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((percentage / 100) * Math.PI * 2)}% ${50 - 50 * Math.sin((percentage / 100) * Math.PI * 2)}%, 50% 50%)`
              }}
            ></div>
          );
        })}
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-4">
      {Object.entries(data).map(([label, value], i) => {
        const total = Object.values(data).reduce((sum, val) => sum + val, 0);
        const percentage = (value / total) * 100;
        const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
        return (
          <div key={label} className="flex items-center text-sm">
            <div className={`w-3 h-3 rounded-full ${colors[i % colors.length]} mr-1`}></div>
            <span className="truncate">{label}</span>
            <span className="ml-1 text-gray-500">({percentage.toFixed(1)}%)</span>
          </div>
        );
      })}
    </div>
  </div>
);

export function Analytics({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeMetricsTab, setActiveMetricsTab] = useState("overview");

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/analytics");
        
        if (!response.ok) {
          if (response.status === 403) {
            setError("Premium subscription required to access analytics");
          } else {
            setError("Failed to load analytics data");
          }
          return;
        }
        
        const data = await response.json();
        setAnalyticsData(data);
      } catch (err) {
        setError("An error occurred while fetching analytics");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-red-500">Analytics Unavailable</CardTitle>
            <CardDescription className="text-center">{error}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="mb-4">Upgrade to premium to access detailed analytics about your networking activity.</p>
            <Button>Upgrade to Premium</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!analyticsData) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>No analytics data available</p>
      </div>
    );
  }

  const { summary } = analyticsData;

  // Prepare data for charts
  const connectionsData = {
    "Total": summary.totalConnections,
    "Accepted": summary.acceptedConnections,
    "Pending": summary.totalConnections - summary.acceptedConnections,
  };

  const messagesData = {
    "Sent": summary.totalMessagesSent,
    "Received": summary.totalMessagesReceived,
  };

  const activityData = {
    "Profile Views": summary.weeklyActivity.profileViews,
    "New Connections": summary.weeklyActivity.newConnections,
    "Messages Sent": summary.weeklyActivity.messagesSent,
    "Messages Received": summary.weeklyActivity.messagesReceived,
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Analytics & Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Profile Views</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{analyticsData.analytics.profileViews}</div>
            <p className="text-sm text-gray-500">People who viewed your profile</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Connection Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.connectionRate.toFixed(1)}%</div>
            <p className="text-sm text-gray-500">Successful connection requests</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summary.responseRate.toFixed(1)}%</div>
            <p className="text-sm text-gray-500">Messages that received a response</p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs value={activeMetricsTab} onValueChange={setActiveMetricsTab} className="mb-6">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="connections">Connections</TabsTrigger>
          <TabsTrigger value="messaging">Messaging</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <LineChart data={activityData} title="Weekly Activity" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Connection Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart data={connectionsData} title="Connection Summary" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="connections">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Connection Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Total Connections</h3>
                    <div className="text-3xl font-bold">{summary.totalConnections}</div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Acceptance Rate</h3>
                    <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-blue-500"
                        style={{ width: `${summary.connectionRate}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm">
                      <span>0%</span>
                      <span>{summary.connectionRate.toFixed(1)}%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Connections by Industry</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart 
                  data={summary.industryDistribution || {}} 
                  title="Connections by Industry" 
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="messaging">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Messaging Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-1">Messages Sent</h3>
                    <div className="text-2xl font-bold">{summary.totalMessagesSent}</div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-1">Messages Received</h3>
                    <div className="text-2xl font-bold">{summary.totalMessagesReceived}</div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-1">Response Rate</h3>
                    <div className="relative h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="absolute top-0 left-0 h-full bg-green-500"
                        style={{ width: `${summary.responseRate}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-1 text-sm">
                      <span>0%</span>
                      <span>{summary.responseRate.toFixed(1)}%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Message Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <PieChart data={messagesData} title="Message Distribution" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      <Card>
        <CardHeader>
          <CardTitle>Premium Insights</CardTitle>
          <CardDescription>
            Advanced analytics to help you optimize your networking strategy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Best Time to Connect</h3>
              <p className="text-sm text-gray-600">
                Based on your data, the optimal time to send connection requests is 
                <span className="font-medium"> Tuesday between 10am - 12pm</span>, 
                when professionals in your industry are most active.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Key Skills Recommendations</h3>
              <p className="text-sm text-gray-600">
                To increase your match rate, consider highlighting these skills that are in high demand 
                in your industry: <span className="font-medium">Data Analysis, Project Management, and Communication</span>.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold">Networking Focus</h3>
              <p className="text-sm text-gray-600">
                Your profile is performing well with professionals in 
                <span className="font-medium"> Technology and Finance</span> sectors. 
                Consider expanding your network in these industries for more valuable connections.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 