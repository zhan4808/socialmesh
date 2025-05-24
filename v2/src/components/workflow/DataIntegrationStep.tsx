import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Database } from 'lucide-react';

interface DataIntegrationStepProps {
  position: number;
  flowProgress: any;
  progressRanges: {
    dataIntegration: number[];
  };
}

const DataIntegrationStep = ({ position, flowProgress, progressRanges }: DataIntegrationStepProps) => {
  return (
    <motion.div 
      style={{ 
        top: position,
        opacity: useTransform(flowProgress, [progressRanges.dataIntegration[0], progressRanges.dataIntegration[0] + 0.05, progressRanges.dataIntegration[1]], [0, 1, 1]),
        y: useTransform(flowProgress, [progressRanges.dataIntegration[0], progressRanges.dataIntegration[0] + 0.05], [30, 0]),
        x: "-50%",
        left: "50%" 
      }}
      className="absolute w-[350px]"
    >
      <div className="bg-nexus-dark/60 border border-nexus-purple/30 p-6 rounded-xl backdrop-blur-md flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-blue flex items-center justify-center mb-4">
          <Database className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-lg font-medium text-white mb-2">Data Integration</h4>
        <p className="text-sm text-gray-300 text-center">
          Centralizing your connections from all platforms into a single database
        </p>
        
        {/* Visual data integration progress */}
        <div className="mt-5 w-full bg-nexus-dark/80 rounded-lg p-3 border border-nexus-purple/20">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-400">Platforms</span>
            <span className="text-xs text-gray-400">Contacts</span>
          </div>
          
          {[
            { name: "LinkedIn", color: "bg-[#0077b5]", count: "512" },
            { name: "Twitter", color: "bg-[#1DA1F2]", count: "349" },
            { name: "Email", color: "bg-[#D44638]", count: "218" }
          ].map((platform, i) => (
            <motion.div
              key={i}
              initial={{ width: "30%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 1.5, 
                delay: 0.3 + (i * 0.2), 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              className="h-6 mb-2 rounded flex items-center overflow-hidden"
            >
              <div className={`h-full rounded-l ${platform.color} w-8 flex items-center justify-center`}>
                <span className="text-xs text-white">{platform.name[0]}</span>
              </div>
              <div className="h-full flex-grow bg-nexus-purple/20 rounded-r flex items-center justify-end px-2">
                <span className="text-xs text-nexus-purple-light">{platform.count}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DataIntegrationStep;
