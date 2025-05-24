
import { motion } from 'framer-motion';

interface ProcessingWidgetProps {
  insight: string;
  arrangementKey: string;
}

const ProcessingWidget = ({ insight, arrangementKey }: ProcessingWidgetProps) => {
  return (
    <motion.div 
      className="absolute bottom-6 left-6 z-10 bg-black/40 backdrop-blur-md p-3 rounded-xl border border-gray-700/50 max-w-xs"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.4 }}
      key={`processing-${arrangementKey}`} // Force re-render on profile change
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-nexus-blue animate-pulse"></div>
        <div className="text-xs text-nexus-blue-light">Processing</div>
      </div>
      <div className="text-xs text-gray-300 mt-1">
        {insight}
      </div>
    </motion.div>
  );
};

export default ProcessingWidget;
