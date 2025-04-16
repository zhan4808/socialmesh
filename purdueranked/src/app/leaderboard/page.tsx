"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Leaderboard } from "@/components/Leaderboard";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">
            Purdue Ranked <span className="text-purdue-gold">Leaderboard</span>
          </h1>
          
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            The top-ranked Purdue students and alumni based on community voting.
            Rankings are determined by ELO ratings calculated from head-to-head comparisons.
          </p>
          
          <Leaderboard />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 