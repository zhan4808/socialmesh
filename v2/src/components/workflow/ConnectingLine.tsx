
import React from 'react';
import { motion, useTransform } from 'framer-motion';

interface ConnectingLineProps {
  startY: number,
  endY: number,
  flowProgress: any,
  progressStart: number,
  progressEnd: number,
  showArrow?: boolean
}

const ConnectingLine = ({
  startY,
  endY,
  flowProgress,
  progressStart,
  progressEnd,
  showArrow = false
}: ConnectingLineProps) => {
  const lineHeight = endY - startY;
  const lineStyle = { height: `${lineHeight}px`, top: `${startY}px` };
  
  return (
    <motion.div
      className="absolute left-1/2 w-px bg-gradient-to-b from-nexus-purple/20 via-nexus-purple/50 to-nexus-purple/20"
      style={{
        ...lineStyle,
        scaleY: useTransform(flowProgress, [progressStart, progressEnd], [0, 1]),
        transformOrigin: 'top',
        opacity: useTransform(flowProgress, [progressStart, progressStart + 0.05, progressEnd - 0.05, progressEnd], [0, 1, 1, 0.7])
      }}
    >
      {showArrow && (
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 border-b-2 border-r-2 border-nexus-purple/70"
          style={{
            opacity: useTransform(flowProgress, [progressEnd - 0.05, progressEnd], [0, 1]),
            scale: useTransform(flowProgress, [progressEnd - 0.05, progressEnd], [0.5, 1])
          }}
        />
      )}
    </motion.div>
  );
};

export default ConnectingLine;
