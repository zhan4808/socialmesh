"use client";

import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { useAuth } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Header() {
  const { user, isAuthenticated } = useAuth();

  return (
    <header className="bg-[#000000] text-white p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-[#CFAC43]">Purdue</span> Ranked
            </h1>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-[#CFAC43] transition-colors">
              Home
            </Link>
            <Link href="/leaderboard" className="hover:text-[#CFAC43] transition-colors">
              Leaderboard
            </Link>
            {isAuthenticated && (
              <Link href="/dashboard" className="hover:text-[#CFAC43] transition-colors">
                Dashboard
              </Link>
            )}
            <Link href="/about" className="hover:text-[#CFAC43] transition-colors">
              About
            </Link>
          </nav>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link href="/profile">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user?.image || ""} alt={user?.name || "User"} />
                  <AvatarFallback>
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-white border-white hover:bg-white hover:text-black"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-white hover:bg-white hover:text-black"
              onClick={() => signIn("linkedin")}
            >
              Connect LinkedIn
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
