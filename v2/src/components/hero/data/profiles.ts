
import { ProfileData } from '../types';

// Profiles data separated into its own file
const profileData: Record<string, ProfileData> = {
  default: {
    name: "Alex Morgan",
    role: "Marketing Manager",
    company: "Innovate Digital",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Balanced professional & social connections",
    bio: "Connecting brands with customers through storytelling",
    interests: ["Digital Marketing", "Content Strategy", "Photography"],
    stats: {
      connections: "2,148",
      strength: "80%",
      hitRate: "89%",
      meetings: "8",
      relationships: "37"
    }
  },
  professional: {
    name: "Sarah Chen",
    role: "Tech Lead",
    company: "CloudScale Solutions",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
    description: "Tech-focused networking strategy",
    bio: "Building scalable solutions for enterprise clients",
    interests: ["Cloud Architecture", "AI/ML", "Open Source"],
    stats: {
      connections: "1,543",
      strength: "75%",
      hitRate: "78%",
      meetings: "5",
      influence: "High",
      opportunities: "12"
    }
  },
  social: {
    name: "Mike Johnson",
    role: "Content Creator",
    company: "CreativeMind Studios",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Community-driven social presence",
    bio: "Creating engaging video content for global audiences",
    interests: ["Video Production", "Social Media", "Travel"],
    stats: {
      connections: "849",
      strength: "85%",
      hitRate: "93%",
      meetings: "11",
      activity: "High",
      events: "23"
    }
  },
  communities: {
    name: "Taylor Wu",
    role: "Developer Advocate",
    company: "OpenTech Foundation",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Open source community builder",
    bio: "Bringing developers together to build the future",
    interests: ["Developer Relations", "Public Speaking", "Hackathons"],
    stats: {
      connections: "1,246",
      strength: "88%",
      hitRate: "85%",
      meetings: "14",
      communities: "16",
      interactions: "1,247",
      standing: "Leader"
    }
  }
};

export default profileData;
