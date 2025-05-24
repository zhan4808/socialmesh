import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import BackgroundDecoration from './workflow/BackgroundDecoration';
import SVGDefinitions from './workflow/SVGDefinitions';
import SocialPlatformsStep from './workflow/SocialPlatformsStep';
import DataIntegrationStep from './workflow/DataIntegrationStep';
import NetworkAnalysisStep from './workflow/NetworkAnalysisStep';
import OpportunityStep from './workflow/OpportunityStep';
import ParallelTasksStep from './workflow/ParallelTasksStep';
import FollowUpStep from './workflow/FollowUpStep';

const WorkflowVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  
  // The scroll triggers for animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Map scroll progress to flow progress for animation
  const flowProgress = useTransform(scrollYProgress, [0, 0.95], [0, 1]);

  // Line drawing helper functions from SocialMediaFlow
  const calculateLinePath = (progress: number, startX: number, startY: number, endX: number, endY: number, delay: number, duration: number) => {
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
      opacity: Math.min(1, lineProgress * 3)
    };
  };

  const calculateStepOpacity = (progress: number, stepType: string) => {
    const stepDelays = {
      dataIntegration: 0.1,
      networkAnalysis: 0.25,
      opportunityIdentification: 0.4,
      parallelTasks: 0.55,
      followUp: 0.8
    };
    
    // Longer fade duration for parallel tasks and follow-up for smoother transitions
    const fadeInDuration = (stepType === 'parallelTasks' || stepType === 'followUp') ? 0.08 : 0.05;
    
    const delay = stepDelays[stepType as keyof typeof stepDelays] || 0;
    const stepProgress = Math.max(0, (progress - delay) / fadeInDuration);
    return Math.min(1, stepProgress);
  };
  
  // Actual measured step dimensions (from debug session)
  const stepDimensions = {
    dataIntegration: { height: 380 }, // Increased further to move line start even lower
    networkAnalysis: { height: 412 },
    opportunity: { height: 344 }, // Increased to lower split line start points
    parallelTasks: { height: 440 }, // Increased further to lower merge line start points
    followUp: { height: 356 }
  };

  // Animation for network and platform nodes
  useEffect(() => {
    if (!isInView) return;
    
    // Animate network nodes with gentle floating motion
    const animateNetworkNodes = () => {
      const nodes = document.querySelectorAll('.network-node');
      if (!nodes.length) return;
      
      nodes.forEach((node) => {
        const el = node as HTMLElement;
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 20;
        const duration = 7 + Math.random() * 8; // 7-15 seconds
        
        el.animate(
          [
            { transform: 'translate(0, 0)' },
            { transform: `translate(${randomX}px, ${randomY}px)` },
            { transform: 'translate(0, 0)' }
          ],
          {
            duration: duration * 1000,
            easing: 'ease-in-out',
            iterations: Infinity
          }
        );
      });
    };
    
    // Animate platform nodes too for more dynamic visualization
    const animatePlatformNodes = () => {
      const platformNodes = document.querySelectorAll('.platform-node');
      if (!platformNodes.length) return;
      
      platformNodes.forEach((node) => {
        const el = node as HTMLElement;
        const randomX = (Math.random() - 0.5) * 12;
        const randomY = (Math.random() - 0.5) * 12;
        const duration = 6 + Math.random() * 6;
        
        el.animate(
          [
            { transform: 'translate(0, 0)' },
            { transform: `translate(${randomX}px, ${randomY}px)` },
            { transform: 'translate(0, 0)' }
          ],
          {
            duration: duration * 1000,
            easing: 'ease-in-out',
            iterations: Infinity
          }
        );
      });
    };
    
    animateNetworkNodes();
    animatePlatformNodes();
    
    // Clean up animations when component unmounts
    return () => {
      document.querySelectorAll('.network-node, .platform-node').forEach((node) => {
        const el = node as HTMLElement;
        const animations = el.getAnimations();
        animations.forEach(animation => animation.cancel());
      });
    };
  }, [isInView]);

  // Constants for step positioning and spacing - customized spacing for specific transitions
  const SECTION_HEIGHT = 400; // Keep section height the same
  const SPACING_BETWEEN_STEPS = 80; // Base spacing between most steps
  const COMPACT_SPACING_DATA_TO_NETWORK = 50; // Reduced spacing between data integration and network analysis
  const EXTRA_SPACING_PARALLEL_TO_FOLLOWUP = 80; // Increased spacing between parallel tasks and follow-up (was 60)
  const TOTAL_HEIGHT = SECTION_HEIGHT * 6 + SPACING_BETWEEN_STEPS * 4 + COMPACT_SPACING_DATA_TO_NETWORK + EXTRA_SPACING_PARALLEL_TO_FOLLOWUP;

  // Calculate positions for each step with custom spacing
  const positions = {
    socialPlatforms: 0,
    dataIntegration: SECTION_HEIGHT + SPACING_BETWEEN_STEPS,
    networkAnalysis: SECTION_HEIGHT * 2 + SPACING_BETWEEN_STEPS + COMPACT_SPACING_DATA_TO_NETWORK,
    opportunityIdentification: SECTION_HEIGHT * 3 + SPACING_BETWEEN_STEPS * 2 + COMPACT_SPACING_DATA_TO_NETWORK,
    parallelTasks: SECTION_HEIGHT * 4 + SPACING_BETWEEN_STEPS * 3 + COMPACT_SPACING_DATA_TO_NETWORK,
    followUp: SECTION_HEIGHT * 5 + SPACING_BETWEEN_STEPS * 4 + COMPACT_SPACING_DATA_TO_NETWORK + EXTRA_SPACING_PARALLEL_TO_FOLLOWUP
  };
  
  // Updated progress ranges for step animation synchronized with line drawing
  const progressRanges = {
    socialPlatforms: [0.02, 0.25], // Start once entered the section (2%)
    dataIntegration: [0.1, 0.3],
    networkAnalysis: [0.25, 0.45],
    opportunityIdentification: [0.4, 0.6],
    parallelTasks: [0.55, 0.75],
    followUp: [0.8, 1]
  };
  
  return (
    <div className="py-20 relative" style={{ minHeight: `${TOTAL_HEIGHT}px` }} ref={containerRef}>
      <div className="sticky top-[15vh] container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-nexus-purple/20 border border-nexus-purple/30 mb-4">
            <span className="text-sm text-nexus-purple-light">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your networking <span className="text-gradient">workflow, automated</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            SocialMesh takes the complexity out of networking by automating the entire process
            from data collection to follow-up management.
          </p>
        </div>
        
        {/* Main workflow visualization */}
        <div className="relative max-w-5xl mx-auto py-8">
          {/* Background network decoration */}
          <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
            <BackgroundDecoration />
          </div>
          
          {/* Fixed SVG definitions for gradients and filters */}
          <SVGDefinitions />
          


          {/* Connecting Lines */}
          <motion.svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            style={{ zIndex: 1 }}
            viewBox={`0 0 100 ${TOTAL_HEIGHT}`}
            preserveAspectRatio="none"
          >
            {/* Data Integration to Network Analysis */}
            <motion.line
              x1={50}
              y1={positions.dataIntegration + stepDimensions.dataIntegration.height + 10}
              x2={useTransform(flowProgress, [0.15, 0.25], [50, 50])}
              y2={useTransform(flowProgress, [0.15, 0.25], [positions.dataIntegration + stepDimensions.dataIntegration.height + 10, positions.networkAnalysis + 10])}
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              opacity={useTransform(flowProgress, [0.15, 0.2], [0, 1])}
              className="animated-dash"
            />
            
            {/* Network Analysis to Opportunity Identification */}
            <motion.line
              x1={50}
              y1={positions.networkAnalysis + stepDimensions.networkAnalysis.height}
              x2={useTransform(flowProgress, [0.3, 0.4], [50, 50])}
              y2={useTransform(flowProgress, [0.3, 0.4], [positions.networkAnalysis + stepDimensions.networkAnalysis.height, positions.opportunityIdentification])}
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              opacity={useTransform(flowProgress, [0.3, 0.35], [0, 1])}
              className="animated-dash"
            />
            
            {/* Opportunity to Parallel Tasks - Split (Enhanced transitions) */}
            <motion.line
              x1={50}
              y1={positions.opportunityIdentification + stepDimensions.opportunity.height}
              x2={useTransform(flowProgress, [0.45, 0.52], [50, 50])}
              y2={useTransform(flowProgress, [0.45, 0.52], [positions.opportunityIdentification + stepDimensions.opportunity.height, positions.opportunityIdentification + stepDimensions.opportunity.height + 50])}
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              opacity={useTransform(flowProgress, [0.45, 0.49], [0, 1])}
              className="animated-dash"
            />
            <motion.line
              x1={50}
              y1={positions.opportunityIdentification + stepDimensions.opportunity.height + 50}
              x2={useTransform(flowProgress, [0.52, 0.58], [50, 25])}
              y2={useTransform(flowProgress, [0.52, 0.58], [positions.opportunityIdentification + stepDimensions.opportunity.height + 50, positions.parallelTasks - 15])}
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              opacity={useTransform(flowProgress, [0.52, 0.56], [0, 1])}
              className="animated-dash"
            />
            <motion.line
              x1={50}
              y1={positions.opportunityIdentification + stepDimensions.opportunity.height + 50}
              x2={useTransform(flowProgress, [0.52, 0.58], [50, 75])}
              y2={useTransform(flowProgress, [0.52, 0.58], [positions.opportunityIdentification + stepDimensions.opportunity.height + 50, positions.parallelTasks - 15])}
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              opacity={useTransform(flowProgress, [0.52, 0.56], [0, 1])}
              className="animated-dash"
            />
            
            {/* Parallel Tasks to Follow-up - Merge (Enhanced visibility) */}
            <motion.line
              x1={25}
              y1={positions.parallelTasks + stepDimensions.parallelTasks.height - 5}
              x2={useTransform(flowProgress, [0.7, 0.76], [25, 50])}
              y2={useTransform(flowProgress, [0.7, 0.76], [positions.parallelTasks + stepDimensions.parallelTasks.height - 5, positions.parallelTasks + stepDimensions.parallelTasks.height + 45])}
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              opacity={useTransform(flowProgress, [0.7, 0.74], [0, 1])}
              className="animated-dash"
            />
            <motion.line
              x1={75}
              y1={positions.parallelTasks + stepDimensions.parallelTasks.height - 5}
              x2={useTransform(flowProgress, [0.7, 0.76], [75, 50])}
              y2={useTransform(flowProgress, [0.7, 0.76], [positions.parallelTasks + stepDimensions.parallelTasks.height - 5, positions.parallelTasks + stepDimensions.parallelTasks.height + 45])}
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              opacity={useTransform(flowProgress, [0.7, 0.74], [0, 1])}
              className="animated-dash"
            />
            <motion.line
              x1={50}
              y1={positions.parallelTasks + stepDimensions.parallelTasks.height + 50}
              x2={useTransform(flowProgress, [0.76, 0.82], [50, 50])}
              y2={useTransform(flowProgress, [0.76, 0.82], [positions.parallelTasks + stepDimensions.parallelTasks.height + 50, positions.parallelTasks + stepDimensions.parallelTasks.height + 100])}
              stroke="#8B5CF6"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              opacity={useTransform(flowProgress, [0.76, 0.8], [0, 1])}
              className="animated-dash"
            />
          </motion.svg>
          
          <div className="relative" style={{ height: `${TOTAL_HEIGHT}px` }}>
            {/* Step 1: Social Platform Integration */}
            <SocialPlatformsStep 
              position={positions.socialPlatforms} 
              flowProgress={flowProgress} 
              progressRanges={{
                socialPlatforms: progressRanges.socialPlatforms
              }}
              dataIntegrationPosition={positions.dataIntegration}
            />
            
            {/* Step 2: Data Integration */}
            <motion.div style={{ opacity: useTransform(flowProgress, [0, 1], [(val: number) => calculateStepOpacity(val, 'dataIntegration'), (val: number) => 1]) }}>
              <DataIntegrationStep 
                position={positions.dataIntegration} 
                flowProgress={flowProgress} 
                progressRanges={{
                  dataIntegration: progressRanges.dataIntegration
                }} 
              />
            </motion.div>
            
            {/* Step 3: Network Analysis */}
            <motion.div style={{ opacity: useTransform(flowProgress, [0, 1], [(val: number) => calculateStepOpacity(val, 'networkAnalysis'), (val: number) => 1]) }}>
              <NetworkAnalysisStep 
                position={positions.networkAnalysis} 
                flowProgress={flowProgress} 
                progressRanges={{
                  networkAnalysis: progressRanges.networkAnalysis
                }} 
              />
            </motion.div>
            
            {/* Step 4: Opportunity Identification */}
            <motion.div style={{ opacity: useTransform(flowProgress, [0, 1], [(val: number) => calculateStepOpacity(val, 'opportunityIdentification'), (val: number) => 1]) }}>
              <OpportunityStep 
                position={positions.opportunityIdentification} 
                flowProgress={flowProgress} 
                progressRanges={{
                  opportunityIdentification: progressRanges.opportunityIdentification
                }} 
              />
            </motion.div>
            
            {/* Step 5: Parallel Tasks - Messaging and Meeting Coordination */}
            <motion.div style={{ opacity: useTransform(flowProgress, [0, 1], [(val: number) => calculateStepOpacity(val, 'parallelTasks'), (val: number) => 1]) }}>
              <ParallelTasksStep 
                position={positions.parallelTasks} 
                flowProgress={flowProgress} 
                progressRanges={{
                  parallelTasks: progressRanges.parallelTasks
                }} 
              />
            </motion.div>
            
            {/* Step 6: Follow-up Management */}
            <motion.div style={{ opacity: useTransform(flowProgress, [0, 1], [(val: number) => calculateStepOpacity(val, 'followUp'), (val: number) => 1]) }}>
              <FollowUpStep 
                position={positions.followUp} 
                flowProgress={flowProgress} 
                progressRanges={{
                  followUp: progressRanges.followUp
                }} 
              />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Keyframe animations for line dashes */}
      <style>{`
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

export default WorkflowVisualization;
