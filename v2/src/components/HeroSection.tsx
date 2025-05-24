
import { useRef } from 'react';
import HeroHeading from './hero/HeroHeading';
import NetworkDisplay from './hero/NetworkDisplay';
import ProfileCard from './hero/ProfileCard';
import InsightWidget from './hero/InsightWidget';
import ProcessingWidget from './hero/ProcessingWidget';
import NetworkStatsWidget from './hero/NetworkStatsWidget';

// Import data 
import profileData from './hero/data/profiles';
import nodeArrangements from './hero/data/networkArrangements';
import networkMessages from './hero/data/networkMessages';

// Import hooks
import { useNetworkTransition } from './hero/hooks/useNetworkTransition';
import { useFloatingAnimation } from './hero/hooks/useFloatingAnimation';
import { useRotatingMessages } from './hero/hooks/useRotatingMessages';
import { useDataInsights } from './hero/hooks/useDataInsights';
import { useMouseInteraction } from './hero/hooks/useMouseInteraction';

const HeroSection: React.FC = () => {
  // Set up state management using custom hooks
  const { currentArrangement, isTransitioning } = useNetworkTransition('default');
  const floatingOffsets = useFloatingAnimation(nodeArrangements[currentArrangement]);
  const { activeMessage } = useRotatingMessages(networkMessages);
  const { currentInsight } = useDataInsights([
    "Analyzing connection patterns...",
    "Detecting relationship strength...",
    "Identifying networking opportunities...",
    "Optimizing outreach timing..."
  ]);
  const { mousePosition, hoveredNode, setHoveredNode, handleMouseMove } = useMouseInteraction();

  // Get current profile and arrangement
  const currentProfile = profileData[currentArrangement];
  const arrangement = nodeArrangements[currentArrangement];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 py-16 z-10 relative">
        <HeroHeading />
        
        <NetworkDisplay
          currentArrangement={currentArrangement}
          arrangement={arrangement}
          isTransitioning={isTransitioning}
          mousePosition={mousePosition}
          handleMouseMove={handleMouseMove}
          floatingOffsets={floatingOffsets}
          hoveredNode={hoveredNode}
          setHoveredNode={setHoveredNode}
        >
          {/* Profile Card */}
          <ProfileCard 
            profile={currentProfile} 
            isTransitioning={isTransitioning}
            arrangementKey={currentArrangement}
          />
          
          {/* AI Insight & Activity Widget */}
          <InsightWidget 
            profile={currentProfile}
            activeMessage={activeMessage}
            arrangementKey={currentArrangement}
          />
          
          {/* Processing Widget */}
          <ProcessingWidget 
            insight={currentInsight}
            arrangementKey={currentArrangement}
          />
          
          {/* Network Stats Widget */}
          <NetworkStatsWidget 
            profile={currentProfile}
            arrangementKey={currentArrangement}
          />
        </NetworkDisplay>
      </div>
    </section>
  );
};

export default HeroSection;
