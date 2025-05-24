
import React from 'react';

const SVGDefinitions = () => {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        {/* Line animation */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#9b87f5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6A8FFF" stopOpacity="0.1" />
        </linearGradient>
        
        {/* Vertical line gradient */}
        <linearGradient id="verticalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#9b87f5" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6A8FFF" stopOpacity="0.1" />
        </linearGradient>
        
        {/* Glow filter for particles */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
};

export default SVGDefinitions;
