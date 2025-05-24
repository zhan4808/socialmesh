// socialmediaflow
import React, { useState, useEffect, useRef } from 'react';

// Define SVG paths for social media icons
const socialIconPaths = {
  facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  twitter: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z",
  linkedin: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  message: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  slack: "M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z",
  instagram: "M17.5 6.5h.01 M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z M16 11.37a4 4 0 1 1-3.83-3.83 4 4 0 0 1 3.83 3.83z",
  youtube: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
  github: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
};

const SocialMediaFlow = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const previousScrollY = useRef(0);
  const animationHeight = useRef(0);
  
  // Define our social media icons with initial scattered positions
  const socialIcons = [
    { id: 1, icon: 'facebook', startX: -120, startY: -140, color: '#1877F2' },
    { id: 2, icon: 'twitter', startX: -80, startY: -180, color: '#1DA1F2' },
    { id: 3, icon: 'linkedin', startX: 20, startY: -160, color: '#0A66C2' },
    { id: 4, icon: 'message', startX: 110, startY: -120, color: '#25D366' },
    { id: 5, icon: 'slack', startX: -150, startY: -60, color: '#5865F2' },
    { id: 6, icon: 'instagram', startX: 140, startY: -80, color: '#E4405F' },
    { id: 7, icon: 'youtube', startX: 90, startY: -50, color: '#FF0000' },
    { id: 8, icon: 'github', startX: -60, startY: -40, color: '#333333' }
  ];
  
  // Setup animation and scroll handling
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    // Calculate animation height
    animationHeight.current = window.innerHeight * 5; 
    
    // Set the section height to create scroll space for the animation
    section.style.height = `${animationHeight.current}px`;
    
    const handleScroll = () => {
      if (!containerRef.current || !section) return;
      
      // Get the section's position relative to the viewport
      const rect = section.getBoundingClientRect();
      const sectionTop = -rect.top;
      
      // Calculate how far we've scrolled into the section
      const sectionScrolled = Math.max(0, sectionTop);
      
      // Calculate progress (0 to 1)
      const progress = Math.min(1, sectionScrolled / (animationHeight.current - window.innerHeight));
      
      // Update scroll progress
      setScrollProgress(progress);
      
      // Pin the container while animating (sticky effect)
      if (sectionTop >= 0 && progress < 1) {
        // During animation - fixed position
        containerRef.current.style.position = 'fixed';
        containerRef.current.style.top = '0';
        containerRef.current.style.left = '0';
        containerRef.current.style.width = '100%';
        containerRef.current.style.height = '100vh';
        containerRef.current.style.zIndex = '10';
      } else if (progress >= 1) {
        // After animation - position at bottom of section
        containerRef.current.style.position = 'absolute';
        containerRef.current.style.top = `${animationHeight.current - window.innerHeight}px`;
        containerRef.current.style.left = '0';
        containerRef.current.style.width = '100%';
        containerRef.current.style.height = '100vh';
        containerRef.current.style.zIndex = '0';
      } else {
        // Before animation - position at top of section
        containerRef.current.style.position = 'absolute';
        containerRef.current.style.top = '0';
        containerRef.current.style.left = '0';
        containerRef.current.style.width = '100%';
        containerRef.current.style.height = '100vh';
        containerRef.current.style.zIndex = '0';
      }
      
      // Store current scroll position for direction detection
      previousScrollY.current = window.scrollY;
    };
    
    // Initial call to set up positions
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
      // Recalculate heights on resize
      animationHeight.current = window.innerHeight * 5;
      section.style.height = `${animationHeight.current}px`;
      handleScroll();
    });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  
  // Fixed positions in the center of the viewport (using the coordinate system where center is 0,0)
  const centerX = 0;
  
  // Calculate positions for elements (all in a vertical line)
  const blueBoxY = -50;
  const redCircleY = 50;
  const greenCircleY = 150;
  const blackCircleY = 150;
  
  // Position green and black circles side by side
  const greenCircleX = -50;
  const blackCircleX = 50;
  
  // Calculate split point (where the line branches)
  const splitY = 100;
  
  // Calculate path for animated lines with proper progress calculation
  const calculateLinePath = (progress, startX, startY, endX, endY, delay, duration) => {
    // Calculate progress for this specific line
    const lineProgress = Math.max(0, Math.min(1, (progress - delay) / duration));
    
    if (lineProgress <= 0) return { 
      x1: startX, 
      y1: startY, 
      x2: startX, 
      y2: startY,
      opacity: 0
    };
    
    return {
      x1: startX,
      y1: startY,
      x2: startX + (endX - startX) * lineProgress,
      y2: startY + (endY - startY) * lineProgress,
      opacity: Math.min(1, lineProgress * 3) // Fade in quickly
    };
  };
  
  // Calculate circle opacity based on when the line reaches it
  const calculateCircleOpacity = (progress, circleType) => {
    switch(circleType) {
      case 'blue':
        // Blue circle fades in when icons start disappearing (around 60%)
        const blueProgress = Math.max(0, (progress - 0.6) / 0.05);
        return Math.min(1, blueProgress);
      case 'red':
        // Red circle fades in when the line starts reaching it (around 80%)
        const redProgress = Math.max(0, (progress - 0.8) / 0.15);
        return Math.min(1, redProgress);
      case 'green':
        // Green circle fades in when red circle is fully visible and line reaches it (around 95%)
        const greenProgress = Math.max(0, (progress - 0.95) / 0.05);
        return Math.min(1, greenProgress);
      case 'black':
        // Black circle fades in when red circle is fully visible and line reaches it (around 95%)
        const blackProgress = Math.max(0, (progress - 0.95) / 0.05);
        return Math.min(1, blackProgress);
      default:
        return 1;
    }
  };
  
  // Function to calculate position along a bezier curve
  const calculateBezierPoint = (t, p0, p1, p2, p3) => {
    const oneMinusT = 1 - t;
    const oneMinusTSquared = oneMinusT * oneMinusT;
    const oneMinusTCubed = oneMinusTSquared * oneMinusT;
    const tSquared = t * t;
    const tCubed = tSquared * t;
    
    return {
      x: oneMinusTCubed * p0.x + 3 * oneMinusTSquared * t * p1.x + 3 * oneMinusT * tSquared * p2.x + tCubed * p3.x,
      y: oneMinusTCubed * p0.y + 3 * oneMinusTSquared * t * p1.y + 3 * oneMinusT * tSquared * p2.y + tCubed * p3.y
    };
  };
  
  // Calculate position of an icon as it flows toward the box
  const calculateIconPosition = (icon, progress) => {
    // P0 = icon start position (scattered)
    const p0 = { x: icon.startX, y: icon.startY };
    
    // P3 = destination (box center)
    const p3 = { x: centerX, y: blueBoxY };
    
    // Control points to create a flowing, tree-like movement
    const angleToCenter = Math.atan2(p3.y - p0.y, p3.x - p0.x);
    const distance = Math.sqrt(Math.pow(p3.x - p0.x, 2) + Math.pow(p3.y - p0.y, 2));
    
    // Branch-like control points
    const p1 = { 
      x: p0.x + Math.cos(angleToCenter + 0.2) * distance * 0.3,
      y: p0.y + Math.sin(angleToCenter + 0.2) * distance * 0.3 + (icon.id % 2 ? 30 : -30)
    };
    
    const p2 = { 
      x: p3.x + Math.cos(angleToCenter + Math.PI + 0.1) * distance * 0.2,
      y: p3.y + Math.sin(angleToCenter + Math.PI + 0.1) * distance * 0.3 - 20
    };
    
    // Each icon moves at slightly different speeds for more natural motion
    const adjustedProgress = Math.min(1, progress * (1 + (icon.id % 5) * 0.1));
    
    return calculateBezierPoint(adjustedProgress, p0, p1, p2, p3);
  };
  
  // Calculate opacity based on progress
  const calculateOpacity = (progress, icon) => {
    const fadeStart = 0.7 + (icon.id % 5) * 0.03;
    
    if (progress < fadeStart) return 1;
    
    return Math.max(0, 1 - (progress - fadeStart) / (1 - fadeStart));
  };
  
  // Calculate size based on progress
  const calculateSize = (progress, icon) => {
    const baseSize = 28;
    const minSize = 18;
    
    const sizeProgress = Math.min(1, progress * (1 + (icon.id % 3) * 0.1));
    
    return baseSize - (baseSize - minSize) * sizeProgress;
  };

  // Custom SVG Icon component
  const SocialIcon = ({ path, color, size }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );

  return (
    <div className="w-full">
      {/* This is the section that creates scroll space for the animation */}
      <div ref={sectionRef} className="w-full relative">
        {/* This is the container that gets pinned during animation */}
        <div 
          ref={containerRef} 
          className="w-full h-screen flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Visual indicator of scroll progress */}
          <div className="absolute top-6 left-0 w-full flex justify-center pointer-events-none opacity-70">
            <div className="bg-gray-200 h-2 w-64 rounded-full overflow-hidden">
              <div 
                className="bg-blue-500 h-full rounded-full transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
          
          {/* Instruction text */}
          <div className="absolute top-12 text-center text-gray-700 px-4 pointer-events-none">
            <p className="text-sm">Scroll to control the animation ({Math.round(scrollProgress * 100)}%)</p>
          </div>
          
          {/* The animation container */}
          <div className="relative w-96 h-96 flex items-center justify-center">
            {/* Animated dotted lines */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              style={{ zIndex: 1 }}
              viewBox="-200 -200 400 400"
            >
              {/* Line from blue box to red circle - only starts when icons are nearly transparent */}
              {scrollProgress > 0.75 && (() => {
                const path = calculateLinePath(
                  scrollProgress,
                  centerX, blueBoxY + 30,    // Start: bottom of blue box
                  centerX, redCircleY - 25,  // End: top of red circle
                  0.75,   // Start at 75% (when icons are nearly gone)
                  0.15    // Duration 15%
                );
                
                return (
                  <line 
                    x1={path.x1} 
                    y1={path.y1} 
                    x2={path.x2} 
                    y2={path.y2}
                    stroke="#666"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    strokeLinecap="round"
                    opacity={path.opacity}
                    className="animated-dash"
                  />
                );
              })()}
              
              {/* Line from red circle to split point - only after red circle is fully visible */}
              {scrollProgress > 0.9 && (() => {
                const path = calculateLinePath(
                  scrollProgress,
                  centerX, redCircleY + 25,  // Start: bottom of red circle
                  centerX, splitY,           // End: split point
                  0.9,    // Start at 90% (when red circle is fully visible)
                  0.05    // Duration 5%
                );
                
                return (
                  <line 
                    x1={path.x1} 
                    y1={path.y1} 
                    x2={path.x2} 
                    y2={path.y2}
                    stroke="#666"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    strokeLinecap="round"
                    opacity={path.opacity}
                    className="animated-dash"
                  />
                );
              })()}
              
              {/* Line from split point to green circle - only after red circle is fully visible */}
              {scrollProgress > 0.92 && (() => {
                const path = calculateLinePath(
                  scrollProgress,
                  centerX, splitY,              // Start: split point
                  greenCircleX, greenCircleY - 25, // End: top of green circle
                  0.92,   // Start at 92%
                  0.05    // Duration 5%
                );
                
                return (
                  <line 
                    x1={path.x1} 
                    y1={path.y1} 
                    x2={path.x2} 
                    y2={path.y2}
                    stroke="#666"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    strokeLinecap="round"
                    opacity={path.opacity}
                    className="animated-dash"
                  />
                );
              })()}
              
              {/* Line from split point to black circle - only after red circle is fully visible */}
              {scrollProgress > 0.92 && (() => {
                const path = calculateLinePath(
                  scrollProgress,
                  centerX, splitY,              // Start: split point
                  blackCircleX, blackCircleY - 25, // End: top of black circle
                  0.92,   // Start at 92%
                  0.05    // Duration 5%
                );
                
                return (
                  <line 
                    x1={path.x1} 
                    y1={path.y1} 
                    x2={path.x2} 
                    y2={path.y2}
                    stroke="#666"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    strokeLinecap="round"
                    opacity={path.opacity}
                    className="animated-dash"
                  />
                );
              })()}
            </svg>
            
            {/* The main blue box - only appears when icons converge */}
            <div 
              className="absolute bg-gray-100 rounded-lg flex items-center justify-center"
              style={{
                width: '60px',
                height: '60px',
                transform: `translate(${centerX}px, ${blueBoxY}px)`,
                opacity: calculateCircleOpacity(scrollProgress, 'blue'),
                boxShadow: `0 0 ${5 + scrollProgress * 5}px rgba(0, 0, 0, 0.05)`,
                transition: 'opacity 0.3s, box-shadow 0.2s',
                zIndex: 5
              }}
            >
              <div 
                className="absolute bg-blue-400 rounded-full"
                style={{
                  width: 32,
                  height: 32,
                  opacity: 0.9,
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Red Circle */}
            <div 
              className="absolute rounded-lg flex items-center justify-center bg-gray-100"
              style={{
                width: '50px',
                height: '50px',
                transform: `translate(${centerX}px, ${redCircleY}px)`,
                opacity: calculateCircleOpacity(scrollProgress, 'red'),
                transition: 'opacity 0.3s',
                zIndex: 5,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-red-500 rounded-full" />
              </div>
            </div>
            
            {/* Green Circle */}
            <div 
              className="absolute rounded-lg flex items-center justify-center bg-gray-100"
              style={{
                width: '50px',
                height: '50px',
                transform: `translate(${greenCircleX}px, ${greenCircleY}px)`,
                opacity: calculateCircleOpacity(scrollProgress, 'green'),
                transition: 'opacity 0.3s',
                zIndex: 5,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-green-500 rounded-full" />
              </div>
            </div>
            
            {/* Black Circle */}
            <div 
              className="absolute rounded-lg flex items-center justify-center bg-gray-100"
              style={{
                width: '50px',
                height: '50px',
                transform: `translate(${blackCircleX}px, ${blackCircleY}px)`,
                opacity: calculateCircleOpacity(scrollProgress, 'black'),
                transition: 'opacity 0.3s',
                zIndex: 5,
                boxShadow: '0 0 5px rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 bg-gray-800 rounded-full" />
              </div>
            </div>
            
            {/* Render each social media icon - keep them above blue circle */}
            {socialIcons.map(icon => {
              const position = calculateIconPosition(icon, scrollProgress);
              const opacity = calculateOpacity(scrollProgress, icon);
              const size = calculateSize(scrollProgress, icon);
              
              return (
                <div
                  key={`icon-${icon.id}`}
                  className="absolute transition-all duration-200 ease-out"
                  style={{
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    opacity,
                    zIndex: 15 // Higher z-index to stay above blue circle
                  }}
                >
                  <SocialIcon path={socialIconPaths[icon.icon]} color={icon.color} size={size} />
                </div>
              );
            })}
          </div>
          
          {/* Completion text */}
          <div 
            className="absolute bottom-12 text-center transition-opacity duration-500"
            style={{ 
              opacity: scrollProgress > 0.9 ? 1 : 0,
              transform: "translateY(0px)"
            }}
          >
            <p className="text-gray-600">Animation complete!</p>
            <p className="text-gray-500 text-sm mt-1">Continue scrolling to see more content<br />or scroll back up to replay</p>
          </div>
        </div>
      </div>
      
      {/* Content after animation */}
      <div className="w-full bg-gray-50">
        <div className="max-w-xl mx-auto py-16 px-4">
          <h2 className="text-xl font-semibold text-center mb-4">Content After Animation</h2>
          <p className="text-gray-700 text-center mb-8">
            You've successfully scrolled through the entire animation and reached the content below.
          </p>
          
          {[1, 2, 3].map(i => (
            <div key={i} className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-medium text-lg mb-2">Section {i}</h3>
              <p className="text-gray-700">
                This is an example content section that appears after the animation is complete.
                The animation component now works properly, allowing you to scroll all the way through.
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        
        .animated-dash {
          animation: dash 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialMediaFlow;