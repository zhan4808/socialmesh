
import { motion } from 'framer-motion';
import { ProfileData } from './types';

interface NetworkStatsWidgetProps {
  profile: ProfileData;
  arrangementKey: string;
}

const NetworkStatsWidget = ({ profile, arrangementKey }: NetworkStatsWidgetProps) => {
  return (
    <motion.div 
      className="absolute bottom-6 right-6 z-10 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-gray-700/50 max-w-xs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.3 }}
      key={`stats-${arrangementKey}`} // Force re-render on profile change
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
        <div className="text-xs text-green-400">Networking Performance</div>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400">Outreach hit rate</span>
          <span className="text-sm font-medium text-white hit-rate-value">
            {profile.stats.hitRate}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400">Connections</span>
          <span className="text-sm font-medium text-white connections-value">
            {profile.stats.connections}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-gray-400">Connection strength</span>
          <div className="flex items-center">
            <div className="h-1 w-12 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-nexus-purple to-nexus-blue rounded-full strength-progress"
                style={{ width: profile.stats.strength }}
              ></div>
            </div>
            <span className="ml-1 text-xs text-white">
              {profile.stats.strength}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NetworkStatsWidget;
