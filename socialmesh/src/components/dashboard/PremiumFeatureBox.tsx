import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

type PremiumFeatureBoxProps = {
  title: string;
  description: string;
  features: string[];
  buttonText?: string;
  buttonHref?: string;
  showUpgradeButton?: boolean;
};

export function PremiumFeatureBox({
  title,
  description,
  features,
  buttonText = "Upgrade to Premium",
  buttonHref = "/dashboard?tab=premium",
  showUpgradeButton = true,
}: PremiumFeatureBoxProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {showUpgradeButton && (
          <Button asChild className="w-full">
            <Link href={buttonHref}>{buttonText}</Link>
          </Button>
        )}
      </CardContent>
    </Card>
  );
} 