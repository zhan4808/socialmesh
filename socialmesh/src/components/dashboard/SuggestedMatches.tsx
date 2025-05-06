"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  title?: string;
  company?: string;
  industry?: string;
  skills?: string[];
  bio?: string;
};

type Match = {
  id: string;
  user: User;
  matchScore: number;
  commonInterests?: string[];
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED';
};

export function SuggestedMatches({ userId }: { userId: string }) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/matches");
        
        if (!response.ok) {
          throw new Error("Failed to fetch matches");
        }
        
        const data = await response.json();
        setMatches(data.matches || []);
      } catch (err) {
        console.error(err);
        setError("Failed to load suggested matches");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const handleConnect = async (matchId: string) => {
    try {
      const response = await fetch(`/api/matches/${matchId}/connect`, {
        method: "POST",
      });
      
      if (!response.ok) {
        throw new Error("Failed to connect");
      }
      
      // Update the match status in the local state
      setMatches(prev => 
        prev.map(match => 
          match.id === matchId 
            ? { ...match, status: 'PENDING' } 
            : match
        )
      );
    } catch (err) {
      console.error(err);
      setError("Failed to send connection request");
    }
  };

  const handleReject = async (matchId: string) => {
    try {
      const response = await fetch(`/api/matches/${matchId}/reject`, {
        method: "POST",
      });
      
      if (!response.ok) {
        throw new Error("Failed to reject");
      }
      
      // Update the match status in the local state
      setMatches(prev => 
        prev.map(match => 
          match.id === matchId 
            ? { ...match, status: 'REJECTED' } 
            : match
        )
      );
    } catch (err) {
      console.error(err);
      setError("Failed to reject match");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Finding your matches...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-2">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  if (matches.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold mb-2">No matches found</h3>
        <p className="text-gray-600 mb-4">
          We couldn't find any matches for you at the moment. Try updating your profile or preferences for better matches.
        </p>
        <Button>Update Preferences</Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Suggested Connections</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="overflow-hidden">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={match.user.image || ''} alt={match.user.name} />
                    <AvatarFallback>{match.user.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{match.user.name}</CardTitle>
                    {match.user.title && (
                      <CardDescription>{match.user.title}</CardDescription>
                    )}
                  </div>
                </div>
                <Badge variant="outline" className="bg-blue-50">
                  {match.matchScore}% Match
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              {match.user.company && (
                <p className="text-sm mb-2">
                  <span className="font-medium">Company:</span> {match.user.company}
                </p>
              )}
              
              {match.user.industry && (
                <p className="text-sm mb-2">
                  <span className="font-medium">Industry:</span> {match.user.industry}
                </p>
              )}
              
              {match.user.bio && (
                <p className="text-sm mb-4 line-clamp-2">{match.user.bio}</p>
              )}
              
              {match.user.skills && match.user.skills.length > 0 && (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Skills:</p>
                  <div className="flex flex-wrap gap-1">
                    {match.user.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {match.user.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{match.user.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
              )}
              
              {match.commonInterests && match.commonInterests.length > 0 && (
                <div>
                  <p className="text-sm font-medium mb-1">Common interests:</p>
                  <p className="text-sm text-gray-600">
                    {match.commonInterests.slice(0, 2).join(', ')}
                    {match.commonInterests.length > 2 && ` and ${match.commonInterests.length - 2} more`}
                  </p>
                </div>
              )}
            </CardContent>
            
            <CardFooter className="border-t bg-gray-50 p-4">
              {match.status === 'PENDING' ? (
                <Button className="w-full" disabled>
                  Connection Requested
                </Button>
              ) : match.status === 'ACCEPTED' ? (
                <Button className="w-full" disabled>
                  Connected
                </Button>
              ) : match.status === 'REJECTED' ? (
                <Button className="w-full" variant="outline" disabled>
                  Passed
                </Button>
              ) : (
                <div className="flex gap-2 w-full">
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => handleReject(match.id)}
                  >
                    Pass
                  </Button>
                  <Button 
                    className="flex-1"
                    onClick={() => handleConnect(match.id)}
                  >
                    Connect
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
} 