
import React from 'react';
import { motion, useTransform } from 'framer-motion';
import AnimatedParticlesAlongPath from './AnimatedParticlesAlongPath';

interface SocialIconConvergenceLinesProps {
  flowProgress: any,
  progressStart: number,
  progressEnd: number
}

const SocialIconConvergenceLines = ({
  flowProgress,
  progressStart,
  progressEnd
}: SocialIconConvergenceLinesProps) => {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
      {/* Define paths from each icon starting position to central point */}
      
      {/* Left side paths */}
      <motion.path
        d="M-300,-100 C-200,-20 -100,180 0,350"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="6,8"
        fill="none"
        style={{
          pathLength: useTransform(flowProgress, [progressStart, progressEnd - 0.05], [0, 1]),
          opacity: useTransform(flowProgress, [progressStart, progressEnd - 0.05, progressEnd], [0, 1, 0.3])
        }}
      />
      
      <motion.path
        d="M-220,50 C-150,120 -80,250 0,350"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="6,8"
        fill="none"
        style={{
          pathLength: useTransform(flowProgress, [progressStart + 0.02, progressEnd - 0.03], [0, 1]),
          opacity: useTransform(flowProgress, [progressStart + 0.02, progressEnd - 0.03, progressEnd], [0, 1, 0.3])
        }}
      />
      
      <motion.path
        d="M-260,150 C-180,200 -90,300 0,350"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="6,8"
        fill="none"
        style={{
          pathLength: useTransform(flowProgress, [progressStart + 0.04, progressEnd - 0.01], [0, 1]),
          opacity: useTransform(flowProgress, [progressStart + 0.04, progressEnd - 0.01, progressEnd], [0, 1, 0.3])
        }}
      />
      
      {/* Right side paths */}
      <motion.path
        d="M280,-120 C200,-40 100,150 0,350"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="6,8"
        fill="none"
        style={{
          pathLength: useTransform(flowProgress, [progressStart + 0.01, progressEnd - 0.04], [0, 1]),
          opacity: useTransform(flowProgress, [progressStart + 0.01, progressEnd - 0.04, progressEnd], [0, 1, 0.3])
        }}
      />
      
      <motion.path
        d="M200,80 C150,150 75,280 0,350"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="6,8"
        fill="none"
        style={{
          pathLength: useTransform(flowProgress, [progressStart + 0.03, progressEnd - 0.02], [0, 1]),
          opacity: useTransform(flowProgress, [progressStart + 0.03, progressEnd - 0.02, progressEnd], [0, 1, 0.3])
        }}
      />
      
      <motion.path
        d="M320,30 C250,100 125,250 0,350"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        strokeDasharray="6,8"
        fill="none"
        style={{
          pathLength: useTransform(flowProgress, [progressStart + 0.05, progressEnd], [0, 1]),
          opacity: useTransform(flowProgress, [progressStart + 0.05, progressEnd], [0, 1])
        }}
      />
      
      {/* Animated particles for each path */}
      <AnimatedParticlesAlongPath 
        path="M-300,-100 C-200,-20 -100,180 0,350"
        flowProgress={flowProgress}
        progressStart={progressStart}
        progressEnd={progressEnd - 0.05}
        count={4}
        delay={0}
      />
      
      <AnimatedParticlesAlongPath 
        path="M-220,50 C-150,120 -80,250 0,350"
        flowProgress={flowProgress}
        progressStart={progressStart + 0.02}
        progressEnd={progressEnd - 0.03}
        count={4}
        delay={0.02}
      />
      
      <AnimatedParticlesAlongPath 
        path="M-260,150 C-180,200 -90,300 0,350"
        flowProgress={flowProgress}
        progressStart={progressStart + 0.04}
        progressEnd={progressEnd - 0.01}
        count={4}
        delay={0.04}
      />
      
      <AnimatedParticlesAlongPath 
        path="M280,-120 C200,-40 100,150 0,350"
        flowProgress={flowProgress}
        progressStart={progressStart + 0.01}
        progressEnd={progressEnd - 0.04}
        count={4}
        delay={0.01}
      />
      
      <AnimatedParticlesAlongPath 
        path="M200,80 C150,150 75,280 0,350"
        flowProgress={flowProgress}
        progressStart={progressStart + 0.03}
        progressEnd={progressEnd - 0.02}
        count={4}
        delay={0.03}
      />
      
      <AnimatedParticlesAlongPath 
        path="M320,30 C250,100 125,250 0,350"
        flowProgress={flowProgress}
        progressStart={progressStart + 0.05}
        progressEnd={progressEnd}
        count={4}
        delay={0.05}
      />
    </svg>
  );
};

export default SocialIconConvergenceLines;
