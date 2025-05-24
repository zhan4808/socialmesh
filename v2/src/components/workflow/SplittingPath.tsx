
import React from 'react';
import { motion, useTransform } from 'framer-motion';

interface SplittingPathProps {
  startY: number,
  endY: number,
  flowProgress: any,
  progressStart: number,
  progressEnd: number
}

const SplittingPath = ({
  startY,
  endY,
  flowProgress,
  progressStart,
  progressEnd
}: SplittingPathProps) => {
  const pathHeight = endY - startY;
  
  const leftPathStyle = {
    height: `${pathHeight * 0.6}px`,
    top: `${startY}px`,
    transform: 'translateX(-80px) rotate(-15deg)',
    transformOrigin: 'top center'
  };
  
  const rightPathStyle = {
    height: `${pathHeight * 0.6}px`,
    top: `${startY}px`,
    transform: 'translateX(80px) rotate(15deg)',
    transformOrigin: 'top center'
  };
  
  return (
    <>
      <motion.div
        className="absolute left-1/2 w-px bg-gradient-to-b from-nexus-purple/70 via-nexus-purple/40 to-nexus-purple/20"
        style={{
          height: `${pathHeight * 0.4}px`,
          top: `${startY}px`,
          scaleY: useTransform(flowProgress, [progressStart, progressStart + (progressEnd - progressStart) * 0.5], [0, 1]),
          transformOrigin: 'top',
          opacity: useTransform(flowProgress, [progressStart, progressStart + 0.05], [0, 1])
        }}
      />
      
      <motion.div
        className="absolute left-1/2 w-px bg-gradient-to-b from-nexus-purple/70 via-nexus-purple/40 to-nexus-purple/20"
        style={{
          ...leftPathStyle,
          scaleY: useTransform(flowProgress, 
            [progressStart + (progressEnd - progressStart) * 0.3, progressEnd], 
            [0, 1]
          ),
          transformOrigin: 'top',
          opacity: useTransform(flowProgress, 
            [progressStart + (progressEnd - progressStart) * 0.3, progressStart + (progressEnd - progressStart) * 0.4], 
            [0, 1]
          )
        }}
      >
        <motion.div
          className="absolute -bottom-2 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 rotate-45 border-b-2 border-r-2 border-nexus-purple/70"
          style={{
            opacity: useTransform(flowProgress, [progressEnd - 0.05, progressEnd], [0, 1]),
            scale: useTransform(flowProgress, [progressEnd - 0.05, progressEnd], [0.5, 1]),
            transform: 'translateX(-50%) translateY(50%) rotate(45deg)'
          }}
        />
      </motion.div>
      
      <motion.div
        className="absolute left-1/2 w-px bg-gradient-to-b from-nexus-purple/70 via-nexus-purple/40 to-nexus-purple/20"
        style={{
          ...rightPathStyle,
          scaleY: useTransform(flowProgress, 
            [progressStart + (progressEnd - progressStart) * 0.3, progressEnd], 
            [0, 1]
          ),
          transformOrigin: 'top',
          opacity: useTransform(flowProgress, 
            [progressStart + (progressEnd - progressStart) * 0.3, progressStart + (progressEnd - progressStart) * 0.4], 
            [0, 1]
          )
        }}
      >
        <motion.div
          className="absolute -bottom-2 left-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 rotate-45 border-b-2 border-r-2 border-nexus-purple/70"
          style={{
            opacity: useTransform(flowProgress, [progressEnd - 0.05, progressEnd], [0, 1]),
            scale: useTransform(flowProgress, [progressEnd - 0.05, progressEnd], [0.5, 1]),
            transform: 'translateX(-50%) translateY(50%) rotate(45deg)'
          }}
        />
      </motion.div>
    </>
  );
};

export default SplittingPath;
