import React from 'react';
import Image from 'next/image';
import { Connection, Platform } from '../types';

interface ConnectionCardProps {
  connection: Connection;
  onClick?: () => void;
}

export default function ConnectionCard({ connection, onClick }: ConnectionCardProps) {
  const getStrengthColor = (strength: number | null) => {
    if (!strength) return 'bg-gray-200';
    if (strength < 30) return 'bg-red-400';
    if (strength < 60) return 'bg-yellow-400';
    return 'bg-green-400';
  };
  
  const getPlatformIcon = (platform: Platform) => {
    switch(platform) {
      case Platform.LINKEDIN:
        return '🔗';
      case Platform.TWITTER:
        return '🐦';
      case Platform.FACEBOOK:
        return '📘';
      case Platform.EMAIL:
        return '📧';
      case Platform.WHATSAPP:
        return '📱';
      default:
        return '👤';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          {connection.imageUrl ? (
            <Image
              src={connection.imageUrl}
              alt={connection.name}
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-2xl">
              {connection.name.charAt(0)}
            </div>
          )}
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
            <span>{getPlatformIcon(connection.platformType)}</span>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{connection.name}</h3>
          {connection.jobTitle && (
            <p className="text-gray-600 text-sm">{connection.jobTitle}</p>
          )}
          {connection.company && (
            <p className="text-gray-600 text-sm">{connection.company}</p>
          )}
          
          <div className="mt-2 flex items-center space-x-2">
            <div className="text-xs text-gray-500">Connection Strength</div>
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${getStrengthColor(connection.strength ?? null)}`} 
                style={{ width: `${connection.strength ?? 0}%` }}
              />
            </div>
            <div className="text-xs font-medium">{connection.strength ?? 0}</div>
          </div>
        </div>
      </div>
      
      {connection.tags && connection.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1">
          {connection.tags.map((tag: string) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {connection.lastInteraction && (
        <div className="mt-2 text-xs text-gray-500">
          Last interaction: {new Date(connection.lastInteraction).toLocaleDateString()}
        </div>
      )}
    </div>
  );
} 