'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FaLinkedin, FaGoogle } from 'react-icons/fa';

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleProviderSignIn = async (provider: string) => {
    try {
      setIsLoading(true);
      await signIn(provider, { callbackUrl: '/dashboard' });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="space-y-6">
      <div>
        <button
          onClick={() => handleProviderSignIn('linkedin')}
          disabled={isLoading}
          className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
          ) : (
            <span className="flex items-center">
              <FaLinkedin className="mr-2 h-5 w-5" /> Sign in with LinkedIn
            </span>
          )}
        </button>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>
      
      <div>
        <button
          onClick={() => handleProviderSignIn('google')}
          disabled={isLoading}
          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FaGoogle className="mr-2 h-5 w-5 text-red-500" /> Sign in with Google
        </button>
      </div>
      
      <div className="mt-8 text-center text-xs text-gray-500">
        By signing in, you agree to our Terms of Service and Privacy Policy.
      </div>
    </div>
  );
} 