"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface LeaderboardProfile {
  id: string;
  name: string;
  imageUrl: string | null;
  eloRating: number;
  currentTitle: string | null;
  currentCompany: string | null;
  major: string | null;
}

interface PaginationInfo {
  total: number;
  offset: number;
  limit: number;
  hasMore: boolean;
}

export function Leaderboard() {
  const [profiles, setProfiles] = useState<LeaderboardProfile[]>([]);
  const [pagination, setPagination] = useState<PaginationInfo>({
    total: 0,
    offset: 0,
    limit: 10,
    hasMore: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAlumni, setIsAlumni] = useState(false);

  const fetchLeaderboard = async (offset = 0) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await axios.get(
        `/api/profiles/leaderboard?isAlumni=${isAlumni}&offset=${offset}&limit=${pagination.limit}`
      );
      
      if (response.data.success) {
        setProfiles(response.data.profiles);
        setPagination(response.data.pagination);
      } else {
        setError(response.data.error || "Failed to load leaderboard");
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to load leaderboard");
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load of profiles
  useEffect(() => {
    fetchLeaderboard(0);
  }, [isAlumni]);

  const handleNextPage = () => {
    if (pagination.hasMore) {
      fetchLeaderboard(pagination.offset + pagination.limit);
    }
  };

  const handlePrevPage = () => {
    if (pagination.offset > 0) {
      fetchLeaderboard(Math.max(0, pagination.offset - pagination.limit));
    }
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
          <Button onClick={() => fetchLeaderboard(0)}>Try Again</Button>
        </div>
      ) : profiles.length === 0 ? (
        <div className="flex justify-center p-8 bg-gray-50 rounded-lg">
          <p className="text-gray-600">
            No profiles available in the leaderboard yet.
          </p>
        </div>
      ) : (
        <>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rank
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Profile
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Role
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ELO
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {profiles.map((profile, index) => {
                  const initials = profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("");
                  
                  const rank = pagination.offset + index + 1;
                  
                  return (
                    <tr 
                      key={profile.id} 
                      className={rank <= 3 ? "bg-gray-50" : ""}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {rank}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <Avatar>
                              <AvatarImage src={profile.imageUrl || ""} alt={profile.name} />
                              <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {profile.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {profile.major || "Purdue Student"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm text-gray-900">
                          {profile.currentTitle || "—"}
                        </div>
                        {profile.currentCompany && (
                          <div className="text-sm text-gray-500">
                            {profile.currentCompany}
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {profile.eloRating}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {(pagination.offset > 0 || pagination.hasMore) && (
            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                Showing {pagination.offset + 1} - {Math.min(pagination.offset + profiles.length, pagination.total)} of {pagination.total}
              </div>
              <div className="flex space-x-2">
                <Button 
                  onClick={handlePrevPage} 
                  disabled={pagination.offset === 0}
                  variant="outline"
                  className="text-sm"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNextPage}
                  disabled={!pagination.hasMore}
                  variant="outline"
                  className="text-sm"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
