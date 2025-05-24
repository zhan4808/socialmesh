import React, { useRef } from 'react';
import { motion, useTransform } from 'framer-motion';
import { Network, UserCircle, Linkedin, Twitter, Mail, MessageSquare } from 'lucide-react';

interface NetworkAnalysisStepProps {
  position: number;
  flowProgress: any;
  progressRanges: {
    networkAnalysis: number[];
  };
}

const NetworkAnalysisStep = ({ position, flowProgress, progressRanges }: NetworkAnalysisStepProps) => {
  const networkRef = useRef<HTMLDivElement>(null);
  
  return (
    <motion.div 
        style={{ 
          top: position,
          opacity: useTransform(flowProgress, [progressRanges.networkAnalysis[0], progressRanges.networkAnalysis[0] + 0.05, progressRanges.networkAnalysis[1]], [0, 1, 1]),
          y: useTransform(flowProgress, [progressRanges.networkAnalysis[0], progressRanges.networkAnalysis[0] + 0.05], [30, 0]),
          x: "-50%",
          left: "50%"
        }}
        className="absolute w-[600px] relative"
      >
        {/* Stats indicators - positioned outside main container to avoid cutoff */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute right-0 top-16 bg-nexus-dark/90 backdrop-blur-md rounded-lg border border-nexus-purple/30 p-3 shadow-glow z-30"
        >
          <div className="text-xs text-gray-400">Connected</div>
          <div className="text-sm font-bold text-white">1,248</div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="absolute left-0 bottom-16 bg-nexus-dark/90 backdrop-blur-md rounded-lg border border-nexus-blue/30 p-3 shadow-glow z-30"
        >
          <div className="text-xs text-gray-400">Potential</div>
          <div className="text-sm font-bold text-white">84</div>
        </motion.div>

        <div className="bg-nexus-dark/60 border border-nexus-purple/30 p-6 rounded-xl backdrop-blur-md flex flex-col items-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-blue flex items-center justify-center mb-4">
              <Network className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-lg font-medium text-white mb-2">Network Analysis</h4>
            <p className="text-sm text-gray-300 text-center mb-4">
              AI-powered analysis identifies valuable connections
            </p>
          </div>
          
          {/* Network Visualization */}
          <div 
            ref={networkRef}
            className="w-full h-[200px] relative mt-2"
          >
            {/* Central Node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-nexus-purple/80 flex items-center justify-center z-20 network-node border border-white/20">
              <UserCircle className="w-6 h-6 text-white" />
            </div>
            
            {/* Platform Nodes - These will float around */}
            <div className="absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center z-10 network-node border border-white/20">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            
            <div className="absolute top-[30%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center z-10 network-node border border-white/20">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            
            <div className="absolute top-[65%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#D44638] flex items-center justify-center z-10 network-node border border-white/20">
              <Mail className="w-5 h-5 text-white" />
            </div>
            
            <div className="absolute top-[70%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center z-10 network-node border border-white/20">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            
            {/* Network Nodes - Secondary Connections */}
            {[...Array(15)].map((_, i) => {
              const angle = (i / 15) * Math.PI * 2;
              const distance = 30 + Math.random() * 70;
              const x = Math.cos(angle) * distance;
              const y = Math.sin(angle) * distance;
              const size = 4 + Math.random() * 8;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    width: `${size}px`,
                    height: `${size}px`
                  }}
                  className="absolute rounded-full bg-nexus-blue/70 border border-white/10 network-node"
                />
              );
            })}
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
              {/* Lines to main platform nodes */}
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2.5 }}
                x1="50%"
                y1="50%"
                x2="25%"
                y2="50%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="4,8"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2.5, delay: 0.2 }}
                x1="50%"
                y1="50%"
                x2="65%"
                y2="30%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="4,8"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2.5, delay: 0.4 }}
                x1="50%"
                y1="50%"
                x2="30%"
                y2="65%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="4,8"
              />
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 2.5, delay: 0.6 }}
                x1="50%"
                y1="50%"
                x2="70%"
                y2="70%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="4,8"
              />
              
              {/* Secondary connections with thinner lines */}
              {[...Array(15)].map((_, i) => {
                const angle = (i / 15) * Math.PI * 2;
                const distance = 30 + Math.random() * 70;
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;
                
                return (
                  <motion.line
                    key={i}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 3, delay: 0.1 * i }}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="3,9"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </motion.div>
    );
};

export default NetworkAnalysisStep;
