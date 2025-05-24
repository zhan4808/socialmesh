
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { ArrangementType, NetworkArrangement } from './types';
import NetworkVisualization from './NetworkVisualization';

interface NetworkDisplayProps {
  currentArrangement: ArrangementType;
  arrangement: NetworkArrangement;
  isTransitioning: boolean;
  mousePosition: { x: number, y: number };
  handleMouseMove: (e: React.MouseEvent<HTMLDivElement>) => void;
  floatingOffsets: {[key: string]: {x: number, y: number}};
  hoveredNode: number | null;
  setHoveredNode: (index: number | null) => void;
  children: React.ReactNode;
}

const NetworkDisplay: React.FC<NetworkDisplayProps> = ({
  currentArrangement,
  arrangement,
  isTransitioning,
  mousePosition,
  handleMouseMove,
  floatingOffsets,
  hoveredNode,
  setHoveredNode,
  children
}) => {
  const networkRef = useRef<SVGSVGElement>(null);

  return (
    <motion.div 
      className="relative mt-12 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div 
        className="bg-nexus-dark/40 border border-gray-800 rounded-xl p-4 backdrop-blur-md card-shine overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{ position: 'relative' }} // Fix for framer-motion warning
      >
        <motion.div
          className="aspect-[16/9] rounded-lg bg-nexus-dark/80 overflow-hidden relative"
          animate={{ 
            opacity: isTransitioning ? 0.7 : 1,
            scale: isTransitioning ? 0.98 : 1
          }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Render children components (widgets) */}
          {children}
          
          <NetworkVisualization 
            networkRef={networkRef}
            currentArrangement={currentArrangement}
            arrangement={arrangement}
            mousePosition={mousePosition}
            floatingOffsets={floatingOffsets}
            hoveredNode={hoveredNode}
            setHoveredNode={setHoveredNode}
          />
          
          {/* Enhanced glow effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-nexus-purple/10 to-nexus-blue/10 opacity-50"></div>
        </motion.div>
      </div>
      
      {/* Enhanced decorative elements - subtle and non-distracting */}
      <div className="absolute -top-4 -left-4 w-12 h-12 grid grid-cols-2 gap-1">
        <div className="w-3 h-3 rounded-full bg-nexus-purple/50 animate-pulse-slow"></div>
        <div className="w-3 h-3 rounded-full bg-nexus-purple/30"></div>
        <div className="w-3 h-3 rounded-full bg-nexus-purple/30"></div>
        <div className="w-3 h-3 rounded-full bg-nexus-purple/50 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="absolute -bottom-4 -right-4 w-12 h-12 grid grid-cols-2 gap-1">
        <div className="w-3 h-3 rounded-full bg-nexus-blue/50 animate-pulse-slow"></div>
        <div className="w-3 h-3 rounded-full bg-nexus-blue/30"></div>
        <div className="w-3 h-3 rounded-full bg-nexus-blue/30"></div>
        <div className="w-3 h-3 rounded-full bg-nexus-blue/50 animate-pulse-slow" style={{ animationDelay: '0.8s' }}></div>
      </div>
    </motion.div>
  );
};

export default NetworkDisplay;
