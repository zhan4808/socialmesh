
import React from 'react';
import { motion, useTransform } from 'framer-motion';

interface ConvergingPathProps {
  startY: number,
  endY: number,
  flowProgress: any,
  progressStart: number,
  progressEnd: number
}

const ConvergingPath = ({
  startY,
  endY,
  flowProgress,
  progressStart,
  progressEnd
}: ConvergingPathProps) => {
  const pathHeight = endY - startY;
  const midPoint = startY + (pathHeight * 0.7);
  
  const leftPathStyle = {
    height: `${pathHeight * 0.7}px`,
    top: `${startY}px`,
    left: 'calc(50% - 120px)',
  };
  
  const rightPathStyle = {
    height: `${pathHeight * 0.7}px`,
    top: `${startY}px`,
    left: 'calc(50% + 120px)',
  };
  
  const bottomPathStyle = {
    height: `${pathHeight * 0.3}px`,
    top: `${midPoint}px`,
  };
  
  return (
    <>
      <motion.div
        className="absolute w-px bg-gradient-to-b from-nexus-purple/50 via-nexus-purple/70 to-nexus-purple/90"
        style={{
          ...leftPathStyle,
          scaleY: useTransform(flowProgress, [progressStart, progressStart + (progressEnd - progressStart) * 0.6], [0, 1]),
          transformOrigin: 'top',
          opacity: useTransform(flowProgress, [progressStart, progressStart + 0.05], [0, 1])
        }}
      />
      
      <motion.div
        className="absolute w-px bg-gradient-to-b from-nexus-purple/50 via-nexus-purple/70 to-nexus-purple/90"
        style={{
          ...rightPathStyle,
          scaleY: useTransform(flowProgress, [progressStart, progressStart + (progressEnd - progressStart) * 0.6], [0, 1]),
          transformOrigin: 'top',
          opacity: useTransform(flowProgress, [progressStart, progressStart + 0.05], [0, 1])
        }}
      />
      
      <motion.div
        className="absolute left-1/2 w-240px h-px bg-gradient-to-r from-nexus-purple/20 via-nexus-purple/90 to-nexus-purple/20"
        style={{
          top: `${midPoint}px`,
          width: '240px',
          transform: 'translateX(-50%)',
          scaleX: useTransform(flowProgress, [progressStart + (progressEnd - progressStart) * 0.5, progressStart + (progressEnd - progressStart) * 0.8], [0, 1]),
          opacity: useTransform(flowProgress, [progressStart + (progressEnd - progressStart) * 0.5, progressStart + (progressEnd - progressStart) * 0.6], [0, 1])
        }}
      />
      
      <motion.div
        className="absolute left-1/2 w-px bg-gradient-to-b from-nexus-purple/90 via-nexus-purple/70 to-nexus-purple/50"
        style={{
          ...bottomPathStyle,
          scaleY: useTransform(flowProgress, [progressStart + (progressEnd - progressStart) * 0.7, progressEnd], [0, 1]),
          transformOrigin: 'top',
          opacity: useTransform(flowProgress, [progressStart + (progressEnd - progressStart) * 0.7, progressStart + (progressEnd - progressStart) * 0.8], [0, 1])
        }}
      >
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-b-2 border-r-2 border-nexus-purple/70"
          style={{
            opacity: useTransform(flowProgress, [progressEnd - 0.05, progressEnd], [0, 1]),
            scale: useTransform(flowProgress, [progressEnd - 0.05, progressEnd], [0.5, 1])
          }}
        />
      </motion.div>
    </>
  );
};

export default ConvergingPath;
