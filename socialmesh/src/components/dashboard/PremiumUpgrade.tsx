"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

type PremiumPlan = {
  id: string;
  name: string;
  price: string;
  features: {
    text: string;
    included: boolean;
  }[];
  tier: string;
};

const premiumPlans: PremiumPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    tier: "FREE",
    features: [
      { text: "10 connections per day", included: true },
      { text: "20 messages per day", included: true },
      { text: "Basic profile", included: true },
      { text: "Analytics dashboard", included: false },
      { text: "Priority in search results", included: false },
      { text: "Advanced filters", included: false },
    ],
  },
  {
    id: "basic",
    name: "Basic",
    price: "$9.99/mo",
    tier: "BASIC",
    features: [
      { text: "30 connections per day", included: true },
      { text: "50 messages per day", included: true },
      { text: "Enhanced profile visibility", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Priority in search results", included: false },
      { text: "Advanced filters", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$19.99/mo",
    tier: "PROFESSIONAL",
    features: [
      { text: "75 connections per day", included: true },
      { text: "100 messages per day", included: true },
      { text: "Enhanced profile visibility", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Priority in search results", included: true },
      { text: "Advanced filters", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "$39.99/mo",
    tier: "ENTERPRISE",
    features: [
      { text: "Unlimited connections", included: true },
      { text: "Unlimited messages", included: true },
      { text: "Enhanced profile visibility", included: true },
      { text: "Advanced analytics dashboard", included: true },
      { text: "Top priority in search results", included: true },
      { text: "Advanced filters and dedicated support", included: true },
    ],
  },
];

export function PremiumUpgrade() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState("FREE");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPremiumStatus = async () => {
      try {
        const response = await fetch("/api/premium");
        if (response.ok) {
          const data = await response.json();
          setCurrentPlan(data.premiumTier || "FREE");
        }
      } catch (error) {
        console.error("Failed to fetch premium status:", error);
      }
    };

    fetchPremiumStatus();
  }, []);

  const handleUpgrade = async (tier: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/premium", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ premiumTier: tier }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to upgrade");
      }

      // Update current plan and refresh
      setCurrentPlan(tier);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Premium Plans</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {premiumPlans.map((plan) => (
          <Card 
            key={plan.id}
            className={`border ${plan.tier === currentPlan ? 'border-blue-400 ring-2 ring-blue-400' : ''}`}
          >
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-2xl font-bold">{plan.price}</span>
                {plan.tier !== "FREE" && <span className="text-sm ml-1">per month</span>}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    ) : (
                      <X className="h-5 w-5 text-red-400 mr-2 shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-gray-500"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                disabled={isLoading || plan.tier === currentPlan}
                onClick={() => handleUpgrade(plan.tier)}
                variant={plan.tier === currentPlan ? "outline" : "default"}
              >
                {plan.tier === currentPlan
                  ? "Current Plan"
                  : plan.tier === "FREE"
                  ? "Downgrade"
                  : "Upgrade"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-6 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Why upgrade to premium?</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
            <span>Access detailed analytics to optimize your networking strategy</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
            <span>Get priority in search results and matchmaking</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
            <span>Increase your daily connection and message limits</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
            <span>Receive personalized networking insights based on your activity</span>
          </li>
        </ul>
      </div>
    </div>
  );
} 