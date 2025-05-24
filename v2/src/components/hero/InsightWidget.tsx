
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { ProfileData, NetworkMessage } from './types';

interface InsightWidgetProps {
  profile: ProfileData;
  activeMessage: NetworkMessage;
  arrangementKey: string;
}

const InsightWidget = ({ profile, activeMessage, arrangementKey }: InsightWidgetProps) => {
  return (
    <motion.div 
      className="absolute top-6 right-6 z-10 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-gray-700/50 max-w-xs"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      key={`insight-${arrangementKey}`} // Force re-render on profile change
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-nexus-purple animate-pulse"></div>
        <div className="text-xs text-nexus-purple-light">AI Insight & Activity</div>
      </div>
      <div className="text-xs text-gray-300 mb-3">
        {activeMessage.message}
      </div>
      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-700/30">
        <Calendar className="w-3 h-3 text-nexus-blue-light" />
        <div className="text-xs text-nexus-blue-light mr-2">Meetings this week: </div>
        <div className="text-xs text-white font-semibold meetings-value">
          {profile.stats.meetings}
        </div>
      </div>
    </motion.div>
  );
};

export default InsightWidget;
