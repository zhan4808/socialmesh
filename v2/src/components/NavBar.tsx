
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6">
      <div className={`transition-all duration-300 w-full max-w-4xl ${
        isScrolled 
          ? 'bg-nexus-dark/70 backdrop-blur-xl border border-white/10 shadow-lg'
          : 'bg-transparent'
      } rounded-xl py-2 px-4`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-none group">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">Social</span>
                <span className="text-gradient relative">
                  Mesh
                  <div className="absolute -top-1 -right-2 w-2 h-2 bg-nexus-purple rounded-full opacity-80 animate-pulse"></div>
                </span>
              </span>
            </div>
          </a>
          
          {/* Center Nav Links - Desktop */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex gap-5">
              <a href="#features" className="text-gray-300 hover:text-white transition-all duration-300">
                Features
              </a>
              <a href="#integrations" className="text-gray-300 hover:text-white transition-all duration-300">
                Integrations
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-all duration-300">
                About
              </a>
            </div>
          </div>
          
          {/* Right Actions - Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white transition-all duration-300">
              Log in
            </a>
            <Button className="rounded-full bg-gradient from-nexus-purple to-nexus-blue hover:opacity-90">
              Join Waitlist
            </Button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 rounded-full bg-nexus-dark/60 backdrop-blur-md border border-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[5rem] inset-x-4 bg-nexus-dark/95 backdrop-blur-md border border-gray-800 rounded-2xl animate-fade-in shadow-xl">
          <nav className="py-4 flex flex-col gap-2">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white py-2 px-6 hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#integrations" 
              className="text-gray-300 hover:text-white py-2 px-6 hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white py-2 px-6 hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <div className="border-t border-gray-800 my-2"></div>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white py-2 px-6 hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Log in
            </a>
            <div className="px-4 pb-2">
              <Button className="rounded-full bg-gradient from-nexus-purple to-nexus-blue hover:opacity-90 w-full">
                Join Waitlist
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
