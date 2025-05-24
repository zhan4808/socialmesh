
import { ReactNode } from 'react';

// Define common types to be used across hero components
export type ProfileStats = {
  connections: string;
  strength: string;
  hitRate: string;
  meetings: string;
  [key: string]: string; // Allow additional stats
};

export interface ProfileData {
  name: string;
  role: string;
  company: string;
  img: string;
  description: string;
  bio: string;
  interests: string[];
  stats: ProfileStats;
}

export interface PlatformNode {
  x: number;
  y: number;
  icon: ReactNode;
  color: string;
  name: string;
}

export interface SecondaryNode {
  x: number;
  y: number;
  color: string;
  size: number;
  opacity: number;
}

export interface NetworkArrangement {
  platforms: PlatformNode[];
  secondary: SecondaryNode[];
  youNode: { x: number; y: number };
  stats: any[];
}

export interface NetworkMessage {
  type: string;
  message: string;
}

export type ArrangementType = 'default' | 'professional' | 'social' | 'communities';
