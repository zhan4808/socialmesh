
import React from 'react';

const BackgroundDecoration = () => {
  return (
    <>
      {/* Scattered dots */}
      {[...Array(25)].map((_, i) => (
        <div 
          key={`dot-${i}`} 
          className="absolute rounded-full bg-white/5"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        ></div>
      ))}
      
      {/* Subtle grid lines */}
      {[...Array(12)].map((_, i) => (
        <div 
          key={`grid-h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-nexus-purple/5 to-transparent"
          style={{
            width: '100%',
            top: `${(i * 8) + 4}%`,
            opacity: 0.3 + (Math.random() * 0.2),
          }}
        ></div>
      ))}
      
      {/* Glowing orbs */}
      <div className="absolute top-[15%] -left-32 w-64 h-64 rounded-full bg-nexus-purple/10 blur-3xl opacity-30"></div>
      <div className="absolute top-[45%] -right-32 w-64 h-64 rounded-full bg-nexus-blue/10 blur-3xl opacity-30"></div>
      <div className="absolute bottom-[20%] -left-32 w-64 h-64 rounded-full bg-nexus-purple/10 blur-3xl opacity-30"></div>
    </>
  );
};

export default BackgroundDecoration;
