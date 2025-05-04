import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../../lib/auth';
import Link from 'next/link';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  
  // Redirect to login if not logged in
  if (!session?.user) {
    redirect('/login');
  }
  
  return (
    <div className="mx-auto max-w-7xl p-8">
      <h1 className="mb-8 text-3xl font-bold">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Your Profile</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {session.user?.image ? (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-semibold text-white">
                  <img src={session.user.image} alt={session.user.name || 'User'} className="h-16 w-16 rounded-full object-cover" />
                </div>
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold text-gray-600">
                  {session.user?.name?.[0] || session.user?.email?.[0] || '?'}
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-semibold">{session.user?.name || 'User'}</h3>
                <p className="text-sm text-gray-600">{session.user?.email || 'No email provided'}</p>
              </div>
            </div>
            
            <div className="space-y-2 pt-4">
              <h4 className="text-sm font-medium text-gray-500">Account Information</h4>
              <div className="rounded-md bg-gray-50 p-3">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="font-medium">User ID:</span>
                  <span>{session.user?.id || 'Not available'}</span>
                  
                  <span className="font-medium">Expires:</span>
                  <span>{session.expires ? new Date(session.expires).toLocaleString() : 'Not available'}</span>
                </div>
              </div>
            </div>
            
            <form action="/api/auth/signout" method="post">
              <button
                type="submit"
                className="mt-6 w-full rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Your Social Connections</h2>
          <p className="text-gray-600">
            Connect your social networks to start managing your connections.
          </p>
          {/* Connection components will go here */}
        </div>
      </div>
    </div>
  );
} 