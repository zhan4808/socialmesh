
import { useState, useEffect } from 'react';
import { NetworkArrangement } from '../types';

export const useFloatingAnimation = (arrangement: NetworkArrangement) => {
  const [floatingOffsets, setFloatingOffsets] = useState<{[key: string]: {x: number, y: number}}>({}); 

  // Set up floating animation for platform nodes
  useEffect(() => {
    const platforms = arrangement.platforms;
    const initialOffsets: {[key: string]: {x: number, y: number}} = {};
    
    // Initialize random offsets for floating animation
    platforms.forEach((_, index) => {
      initialOffsets[`platform-${index}`] = {
        x: 0,
        y: 0
      };
    });
    
    setFloatingOffsets(initialOffsets);
    
    // Animate floating effect
    const floatInterval = setInterval(() => {
      setFloatingOffsets(prev => {
        const newOffsets = {...prev};
        Object.keys(newOffsets).forEach(key => {
          // Generate smooth random movements
          newOffsets[key] = {
            x: Math.sin(Date.now() / 2000 + parseInt(key.split('-')[1])) * 8,
            y: Math.cos(Date.now() / 1800 + parseInt(key.split('-')[1])) * 8
          };
        });
        return newOffsets;
      });
    }, 50);
    
    return () => clearInterval(floatInterval);
  }, [arrangement]);

  return floatingOffsets;
};
