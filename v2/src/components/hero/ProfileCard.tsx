
import { motion } from 'framer-motion';
import { ProfileData } from './types';

interface ProfileCardProps {
  profile: ProfileData;
  isTransitioning: boolean;
  arrangementKey: string;
}

const ProfileCard = ({ profile, isTransitioning, arrangementKey }: ProfileCardProps) => {
  return (
    <motion.div 
      className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-xl p-4 rounded-xl border border-gray-700/50 transition-all duration-500 flex flex-col max-w-[240px]"
      animate={{
        opacity: isTransitioning ? 0 : 1,
        y: isTransitioning ? -10 : 0
      }}
      transition={{ duration: 0.4 }}
      key={`profile-${arrangementKey}`} // Force re-render on profile change
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-nexus-purple to-nexus-blue flex items-center justify-center overflow-hidden border-2 border-white/20">
          <img 
            src={profile.img} 
            alt={profile.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-sm font-medium text-white">
            {profile.name}
          </div>
          <div className="text-xs text-gray-400">
            {profile.role}
          </div>
          <div className="text-xs text-nexus-purple-light">
            {profile.company}
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-300 mt-1 mb-2">
        {profile.bio}
      </div>
      
      <div className="flex flex-wrap gap-1 my-1">
        {profile.interests.map((interest, idx) => (
          <span key={idx} className="text-[10px] bg-nexus-purple/20 text-nexus-purple-light px-2 py-0.5 rounded-full">
            {interest}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProfileCard;
