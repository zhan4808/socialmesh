import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Linkedin, Facebook, Mail, Twitter, Instagram, MessageSquare } from 'lucide-react';

interface SocialPlatformsStepProps {
  position: number;
  flowProgress: any;
  progressRanges: {
    socialPlatforms: number[];
  };
  dataIntegrationPosition: number;
}

const SocialPlatformsStep = ({ position, flowProgress, progressRanges, dataIntegrationPosition }: SocialPlatformsStepProps) => {
  // Social media icons with scattered positions (using original Lucide icons)
  const socialIcons = [
    { id: 1, icon: <Facebook className="w-7 h-7" />, startX: -200, startY: -80, color: 'bg-[#4267B2]', name: 'Facebook' },
    { id: 2, icon: <Twitter className="w-7 h-7" />, startX: -150, startY: -120, color: 'bg-[#1DA1F2]', name: 'Twitter' },
    { id: 3, icon: <Linkedin className="w-7 h-7" />, startX: 50, startY: -100, color: 'bg-[#0077b5]', name: 'LinkedIn' },
    { id: 4, icon: <Mail className="w-7 h-7" />, startX: 180, startY: -60, color: 'bg-[#D44638]', name: 'Email' },
    { id: 5, icon: <Instagram className="w-7 h-7" />, startX: 220, startY: -100, color: 'bg-gradient-to-tr from-[#405DE6] via-[#833AB4] via-[#C13584] via-[#E1306C] via-[#FD1D1D] to-[#F56040]', name: 'Instagram' },
    { id: 6, icon: <MessageSquare className="w-7 h-7" />, startX: -80, startY: -40, color: 'bg-[#25D366]', name: 'Messaging' }
  ];

  // Destination - even higher up above the data integration card
  const destinationX = 0;
  const destinationY = dataIntegrationPosition - position - 160; // Position even higher above the data integration card

  // Bezier calculation functions (from socialmediaflow)
  const calculateBezierPoint = (t: number, p0: any, p1: any, p2: any, p3: any) => {
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

  // Create simpler bezier-like animation transforms for each icon
  const createIconTransforms = (icon: any) => {
    // Use progress ranges for better control  
    const staticStartProgress = progressRanges.socialPlatforms[0]; // Start of social platforms section (2%)
    const fadeInDuration = 0.04; // 4% scroll progress for fade in
    const bezierStartProgress = 0.06; // Bezier starts at 6% scroll progress
    const iconBezierStart = bezierStartProgress + (icon.id % 6) * 0.01; // Slight stagger
    const endProgress = progressRanges.socialPlatforms[1];
    
    // Create curved motion by using intermediate points
    const midPoint = iconBezierStart + (endProgress - iconBezierStart) * 0.5;
    
    // Create flowing curved motion from scattered position to center bottom with variation
    const curveVariation = (icon.id % 2 ? 1 : -1) * 30; // Add some curve variation
    const x = useTransform(
      flowProgress, 
      [staticStartProgress, iconBezierStart, midPoint, endProgress], 
      [icon.startX, icon.startX, icon.startX * 0.3 + curveVariation, destinationX]
    );
    
    const y = useTransform(
      flowProgress, 
      [staticStartProgress, iconBezierStart, midPoint, endProgress], 
      [icon.startY, icon.startY, icon.startY * 0.3 + destinationY * 0.5, destinationY]
    );

    // Opacity: icons fade in early, stay visible, then fade as they converge
    const opacity = useTransform(
      flowProgress, 
      [staticStartProgress, staticStartProgress + fadeInDuration, iconBezierStart, endProgress * 0.9, endProgress], 
      [0, 1, 1, 1, 0]
    );
    
    // Size reduction as they converge
    const scale = useTransform(flowProgress, [iconBezierStart, endProgress], [1, 0.5]);

    return { x, y, opacity, scale };
  };



  return (
    <motion.div 
      className="absolute left-0 w-full h-[350px]"
      style={{ 
        top: position,
        opacity: useTransform(flowProgress, [progressRanges.socialPlatforms[0], progressRanges.socialPlatforms[0] + 0.02, progressRanges.socialPlatforms[1]], [0, 1, 1]),
        zIndex: 40, // Ensure the entire step container is above other elements
      }}
    >
      <motion.h3 
        className="text-center text-xl text-nexus-purple-light mb-8"
        style={{
          opacity: useTransform(flowProgress, [progressRanges.socialPlatforms[0], progressRanges.socialPlatforms[0] + 0.04], [0, 1]),
          y: useTransform(flowProgress, [progressRanges.socialPlatforms[0], progressRanges.socialPlatforms[0] + 0.04], [20, 0])
        }}
      >
        Connect Your Social Platforms
      </motion.h3>
      
             {/* Bezier animated social icons */}
       <div className="w-full h-[350px] relative" style={{ zIndex: 50 }}>
         <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 60 }}>
           <div className="relative w-96 h-96" style={{ zIndex: 70 }}>
             {socialIcons.map(icon => {
               const transforms = createIconTransforms(icon);
               
               return (
                 <motion.div
                   key={`icon-${icon.id}`}
                   className="absolute flex flex-col items-center"
                   style={{
                     x: transforms.x,
                     y: transforms.y,
                     opacity: transforms.opacity,
                     scale: transforms.scale,
                     zIndex: 100, // Much higher z-index to ensure icons are always on top
                     left: '50%',
                     top: '50%',
                     marginLeft: -28, // Half of container size (56px)
                     marginTop: -28
                   }}
                 >
                   <div className={`w-14 h-14 rounded-xl ${icon.color} flex items-center justify-center shadow-glow`}>
                     {icon.icon}
                   </div>
                   <span className="text-sm text-gray-300 mt-2">{icon.name}</span>
                 </motion.div>
               );
             })}
           </div>
         </div>
       </div>
    </motion.div>
  );
};

export default SocialPlatformsStep;
