// Define our own types instead of importing from @prisma/client
// which doesn't seem to be properly set up yet

export type User = {
  id: string;
  email: string;
  name?: string | null;
  image?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type Connection = {
  id: string;
  userId: string;
  platformType: Platform;
  connectionId: string;
  name: string;
  jobTitle?: string | null;
  company?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  profileUrl?: string | null;
  imageUrl?: string | null;
  connectionLevel?: number | null;
  location?: string | null;
  bio?: string | null;
  tags: string[];
  notes?: string | null;
  firstConnected?: Date | null;
  lastInteraction?: Date | null;
  strength?: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export type PlatformAccount = {
  id: string;
  userId: string;
  platformType: Platform;
  platformId: string;
  accessToken?: string | null;
  refreshToken?: string | null;
  tokenExpiry?: Date | null;
  lastSynced?: Date | null;
  username?: string | null;
  profileUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export type ConnectionEvent = {
  id: string;
  userId: string;
  connectionId: string;
  eventType: EventType;
  platform: Platform;
  timestamp: Date;
  metadata?: any | null;
  createdAt: Date;
}

export type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  connectionId?: string | null;
  platform: Platform;
  externalId?: string | null;
  content: string;
  timestamp: Date;
  metadata?: any | null;
  createdAt: Date;
}

export type UserWithRelations = User & {
  connections?: Connection[];
  platformAccounts?: PlatformAccount[];
};

export type ConnectionWithEvents = Connection & {
  events: ConnectionEvent[];
};

export enum Platform {
  LINKEDIN = 'LINKEDIN',
  TWITTER = 'TWITTER',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM',
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  WHATSAPP = 'WHATSAPP',
  TELEGRAM = 'TELEGRAM',
  DISCORD = 'DISCORD',
  SLACK = 'SLACK',
  OTHER = 'OTHER',
}

export enum EventType {
  CONNECTED = 'CONNECTED',
  MESSAGE_SENT = 'MESSAGE_SENT',
  MESSAGE_RECEIVED = 'MESSAGE_RECEIVED',
  PROFILE_VIEWED = 'PROFILE_VIEWED',
  CONTENT_LIKED = 'CONTENT_LIKED',
  CONTENT_SHARED = 'CONTENT_SHARED',
  MEETING = 'MEETING',
  CALL = 'CALL',
  EMAIL = 'EMAIL',
  TAGGED = 'TAGGED',
  OTHER = 'OTHER',
}

export type NetworkAnalytics = {
  totalConnections: number;
  averageStrength: number | null;
  connectionsPerPlatform: Record<string, number>;
  topTags: Array<{ tag: string; count: number }>;
  lastCalculated: Date;
};

export type ConnectionStrengthDetails = {
  recency: number;
  frequency: number;
  diversity: number;
  reciprocity: number;
  score: number;
};

export type ConnectionFilters = {
  platformTypes?: Platform[];
  searchQuery?: string;
  minStrength?: number;
  maxStrength?: number;
  tags?: string[];
  sortBy?: 'name' | 'lastInteraction' | 'strength' | 'company';
  sortOrder?: 'asc' | 'desc';
};

export type SocialScrapeStatus = {
  platform: Platform;
  status: 'idle' | 'running' | 'completed' | 'failed';
  lastRun?: Date;
  message?: string;
  connectionsCount?: number;
}; 