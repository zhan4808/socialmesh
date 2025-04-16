"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";

export function ScrapeProfileForm() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!url.includes("linkedin.com/in/")) {
      setStatus("error");
      setMessage("Please enter a valid LinkedIn profile URL");
      return;
    }
    
    try {
      setIsLoading(true);
      setStatus("idle");
      setMessage("");
      
      const response = await axios.post("/api/profiles/scrape", { url });
      
      setStatus("success");
      setMessage(response.data.message || "Profile scraped successfully!");
      setUrl("");
    } catch (error) {
      setStatus("error");
      if (axios.isAxiosError(error) && error.response) {
        setMessage(error.response.data.error || "Failed to scrape profile");
      } else {
        setMessage("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border rounded-md p-5 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Import LinkedIn Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="url">LinkedIn Profile URL</Label>
          <Input
            id="url"
            placeholder="https://www.linkedin.com/in/username/"
            value={url}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
            disabled={isLoading}
            required
          />
        </div>
        
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Importing..." : "Import Profile"}
        </Button>
        
        {status === "success" && (
          <div className="p-3 bg-green-50 text-green-800 rounded-md text-sm">
            {message}
          </div>
        )}
        
        {status === "error" && (
          <div className="p-3 bg-red-50 text-red-800 rounded-md text-sm">
            {message}
          </div>
        )}
      </form>
    </div>
  );
} 