"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { type Profile, type VoteResult } from "@/lib/types";
import { StudentCard } from "./StudentCard";
import { Button } from "./ui/button";

export function StudentComparison() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [result, setResult] = useState<VoteResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVoting, setIsVoting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAlumni, setIsAlumni] = useState(false);

  // Fetch profiles for comparison
  const fetchProfiles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get(`/api/profiles/compare?isAlumni=${isAlumni}`);
      
      if (response.data.success) {
        setProfiles(response.data.profiles);
      } else {
        setError(response.data.error || "Failed to load profiles");
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to load profiles");
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load of profiles
  useEffect(() => {
    fetchProfiles();
  }, [isAlumni]);

  // Handle profile selection/voting
  const handleVote = async (result: VoteResult) => {
    if (profiles.length < 2 || isVoting) return;
    
    try {
      setIsVoting(true);
      setResult(result);
      
      const response = await axios.post("/api/profiles/vote", {
        firstProfileId: profiles[0].id,
        secondProfileId: profiles[1].id,
        result,
      });

      // Show result briefly
      setTimeout(() => {
        setResult(null);
        fetchProfiles(); // Get new profiles after voting
      }, 1500);
      
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to submit vote");
      
      // Reset after a moment
      setTimeout(() => {
        setResult(null);
        setError(null);
      }, 2000);
    } finally {
      setTimeout(() => {
        setIsVoting(false);
      }, 1500);
    }
  };

  // Handle skipping the current comparison
  const handleSkip = () => {
    if (isVoting) return;
    fetchProfiles();
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="mb-8 text-center">
        <div className="inline-flex rounded-full shadow-sm" role="group">
          <button
            type="button"
            onClick={() => setIsAlumni(false)}
            className={`px-6 py-2 text-sm font-medium rounded-l-full transition-all ${
              !isAlumni 
                ? 'bg-black text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Current Students
          </button>
          <button
            type="button"
            onClick={() => setIsAlumni(true)}
            className={`px-6 py-2 text-sm font-medium rounded-r-full transition-all ${
              isAlumni 
                ? 'bg-black text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Alumni
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin h-12 w-12 border-4 border-[#CFAC43] border-t-transparent rounded-full"></div>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center p-8 bg-red-50 rounded-lg">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={fetchProfiles}>Try Again</Button>
        </div>
      ) : profiles.length < 2 ? (
        <div className="flex justify-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            Not enough profiles available for comparison. Please check back later.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="w-full md:w-1/2">
              <StudentCard
                profile={profiles[0]}
                isWinner={result === "FIRST_WON"}
                isLoser={result === "SECOND_WON"}
              />
            </div>
            
            <div className="flex flex-col items-center py-4">
              <span className="text-2xl font-bold mb-2">VS</span>
            </div>
            
            <div className="w-full md:w-1/2">
              <StudentCard
                profile={profiles[1]}
                isWinner={result === "SECOND_WON"}
                isLoser={result === "FIRST_WON"}
              />
            </div>
          </div>

          <div className="text-center mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => handleVote("FIRST_WON")}
                disabled={isVoting}
                className="bg-black text-white hover:bg-gray-800"
              >
                Left Profile Wins
              </Button>
              
              <Button
                onClick={() => handleVote("TIE")}
                disabled={isVoting}
                variant="outline"
              >
                It's a Tie
              </Button>
              
              <Button
                onClick={() => handleVote("SECOND_WON")}
                disabled={isVoting}
                className="bg-black text-white hover:bg-gray-800"
              >
                Right Profile Wins
              </Button>
            </div>
            
            <button
              onClick={handleSkip}
              disabled={isVoting}
              className="text-sm text-gray-500 hover:text-gray-800 underline"
            >
              Skip this comparison
            </button>
          </div>
          
          {isVoting && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="animate-spin h-12 w-12 border-4 border-[#CFAC43] border-t-transparent rounded-full mx-auto mb-4"></div>
                <p>Processing your vote...</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
