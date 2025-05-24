import React from 'react';
import { motion, useTransform } from 'framer-motion';

interface SocialPlatformIconProps { 
  icon: React.ReactNode, 
  color: string,
  name: string,
  initialPosition: { x: number, y: number },
  flowProgress: any,
  progressStart: number,
  progressEnd: number,
  delay?: number
}

const SocialPlatformIcon = ({ 
  icon, 
  color, 
  name, 
  initialPosition, 
  flowProgress,
  progressStart,
  progressEnd,
  delay = 0
}: SocialPlatformIconProps) => {
  // Animation based on scroll progress - completely revised
  // We'll keep icons in their scattered positions until halfway through the range
  const midPoint = progressStart + ((progressEnd - progressStart) * 0.6);
  
  const x = useTransform(
    flowProgress, 
    [progressStart, midPoint, progressEnd], 
    [initialPosition.x, initialPosition.x, 0]
  );
  
  const y = useTransform(
    flowProgress, 
    [progressStart, midPoint, progressEnd], 
    [initialPosition.y, initialPosition.y, 350]
  );
  
  const scale = useTransform(
    flowProgress, 
    [progressStart, midPoint, midPoint + 0.05, progressEnd - 0.02, progressEnd], 
    [1, 1, 1.1, 0.9, 0.7]
  );
  
  // Opacity to fade out as they "fall" into the data integration step
  const opacity = useTransform(
    flowProgress,
    [progressStart, midPoint, progressEnd - 0.03, progressEnd],
    [1, 1, 1, 0]
  );
  
  return (
    <motion.div
      className="absolute left-1/2 top-0 transform -translate-x-1/2 flex flex-col items-center platform-node z-10"
      style={{ x, y, scale, opacity }}
      transition={{ 
        type: "spring",
        bounce: 0.2,
        duration: 0.8, 
        delay
      }}
    >
      <div className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center shadow-glow`}>
        {icon}
      </div>
      <span className="text-sm text-gray-300 mt-2">{name}</span>
    </motion.div>
  );
};

export default SocialPlatformIcon;
