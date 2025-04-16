"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth-client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import axios from "axios";

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Redirect to sign in if not authenticated
  if (!isLoading && !isAuthenticated) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!linkedinUrl) {
      setError("Please enter your LinkedIn URL");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("/api/profile/scrape", {
        linkedinUrl,
      });

      if (response.data.success) {
        setSuccess("Your LinkedIn profile has been successfully imported!");
        // Wait a moment before redirecting
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setError(response.data.error || "Failed to import profile");
      }
    } catch (error: any) {
      setError(
        error.response?.data?.error || 
        error.response?.data?.details || 
        "Failed to import profile"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
            
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin h-8 w-8 border-4 border-[#CFAC43] border-t-transparent rounded-full"></div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-2">Account Information</h2>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <p><span className="font-medium">Name:</span> {user?.name || "Not provided"}</p>
                    <p><span className="font-medium">Email:</span> {user?.email || "Not provided"}</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-4">Connect Your LinkedIn Profile</h2>
                  <p className="text-gray-600 mb-4">
                    Enter your LinkedIn profile URL to import your information. Your profile will be 
                    added to our system and can be compared with other Purdue students.
                  </p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="linkedin-url" className="block text-sm font-medium mb-1">
                        LinkedIn Profile URL
                      </label>
                      <input
                        id="linkedin-url"
                        type="text"
                        placeholder="https://www.linkedin.com/in/yourprofile"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        value={linkedinUrl}
                        onChange={(e) => setLinkedinUrl(e.target.value)}
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
                        {error}
                      </div>
                    )}
                    
                    {success && (
                      <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md">
                        {success}
                      </div>
                    )}
                    
                    <Button
                      type="submit"
                      className="bg-[#000000] hover:bg-[#333333] text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
                          Importing Profile...
                        </span>
                      ) : (
                        "Import LinkedIn Profile"
                      )}
                    </Button>
                  </form>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 