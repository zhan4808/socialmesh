'use client';

import { Session } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

interface ProfileDisplayProps {
  session: Session;
}

export default function ProfileDisplay({ session }: ProfileDisplayProps) {
  const user = session.user;
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {user?.image ? (
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image
              src={user.image}
              alt={user.name || 'User'}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold text-gray-600">
            {user?.name?.[0] || user?.email?.[0] || '?'}
          </div>
        )}
        
        <div>
          <h3 className="text-lg font-semibold">{user?.name || 'User'}</h3>
          <p className="text-sm text-gray-600">{user?.email || 'No email provided'}</p>
        </div>
      </div>
      
      <div className="space-y-2 pt-4">
        <h4 className="text-sm font-medium text-gray-500">Account Information</h4>
        <div className="rounded-md bg-gray-50 p-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span className="font-medium">Session ID:</span>
            <span>{(session as any).id || 'Not available'}</span>
            
            <span className="font-medium">Expires:</span>
            <span>{session.expires ? new Date(session.expires).toLocaleString() : 'Not available'}</span>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => signOut({ callbackUrl: '/' })}
        className="mt-6 w-full rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Sign Out
      </button>
    </div>
  );
} 