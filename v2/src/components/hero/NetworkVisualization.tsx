
import React, { useEffect, useRef } from 'react';
import { NetworkArrangement, ArrangementType } from './types';

interface NetworkVisualizationProps {
  networkRef: React.RefObject<SVGSVGElement>;
  currentArrangement: ArrangementType;
  arrangement: NetworkArrangement;
  mousePosition: { x: number; y: number };
  floatingOffsets: {[key: string]: {x: number, y: number}};
  hoveredNode: number | null;
  setHoveredNode: (index: number | null) => void;
}

const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({
  networkRef,
  currentArrangement,
  arrangement,
  mousePosition,
  floatingOffsets,
  hoveredNode,
  setHoveredNode
}) => {
  // Handle interactive node movement based on mouse position
  useEffect(() => {
    if (!networkRef.current) return;
    
    const interactiveMove = (element: SVGElement, baseX: number, baseY: number, platformKey?: string) => {
      if (!element) return;
      
      // Slower mouse response - reduced moveStrength for subtler effect
      const moveStrength = 0.01;
      const dx = (mousePosition.x - 400) * moveStrength;
      const dy = (mousePosition.y - 225) * moveStrength;
      
      // Add floating effect for platforms
      let floatX = 0;
      let floatY = 0;
      
      if (platformKey && floatingOffsets[platformKey]) {
        floatX = floatingOffsets[platformKey].x;
        floatY = floatingOffsets[platformKey].y;
      }
      
      const newX = baseX + dx + floatX;
      const newY = baseY + dy + floatY;
      
      // Smoother transitions with CSS
      element.style.transform = `translate(${newX - baseX}px, ${newY - baseY}px)`;
    };
    
    // Animate the central YOU node with synchronized circles
    const youNodeGroup = networkRef.current.querySelector('.you-node-group');
    if (youNodeGroup) {
      // Ensure both circles in the YOU node move together
      const youNodeCircles = youNodeGroup.querySelectorAll('circle');
      const youNodeText = youNodeGroup.querySelector('text');
      
      interactiveMove(youNodeGroup as SVGElement, arrangement.youNode.x, arrangement.youNode.y);
      
      // Make sure all elements within the YOU node group stay aligned
      youNodeCircles.forEach((circle) => {
        circle.setAttribute('cx', arrangement.youNode.x.toString());
        circle.setAttribute('cy', arrangement.youNode.y.toString());
      });
      
      if (youNodeText) {
        youNodeText.setAttribute('x', arrangement.youNode.x.toString());
        youNodeText.setAttribute('y', arrangement.youNode.y.toString());
      }
    }
    
    // Animate platform nodes with floating effect
    const platformGroups = networkRef.current.querySelectorAll('.platform-node-group');
    platformGroups.forEach((group, index) => {
      if (!arrangement.platforms[index]) return;
      
      const platformData = arrangement.platforms[index];
      const el = group as SVGGElement;
      const platformKey = `platform-${index}`;
      
      // Interactive movement based on mouse position + floating
      interactiveMove(el, platformData.x, platformData.y, platformKey);
      
      // Set base position for the platform node
      const circle = el.querySelector('circle');
      const icon = el.querySelector('.platform-icon');
      
      if (circle) {
        circle.setAttribute('cx', platformData.x.toString());
        circle.setAttribute('cy', platformData.y.toString());
      }
      
      if (icon) {
        // Position the icon in the center of the circle
        icon.setAttribute('transform', `translate(${platformData.x - 14}, ${platformData.y - 14})`); // Adjusted for larger icon
      }
    });
    
    // Animate secondary nodes with smaller movements
    const secondaryNodes = networkRef.current.querySelectorAll('.secondary-node');
    secondaryNodes.forEach((node, index) => {
      if (!arrangement.secondary[index]) return;
      
      const secondaryData = arrangement.secondary[index];
      const el = node as SVGCircleElement;
      
      // Interactive movement based on mouse position
      interactiveMove(el, secondaryData.x, secondaryData.y);
      
      // Update base properties
      el.setAttribute('cx', secondaryData.x.toString());
      el.setAttribute('cy', secondaryData.y.toString());
      el.setAttribute('r', secondaryData.size.toString());
      el.setAttribute('fill', secondaryData.color);
      el.setAttribute('fill-opacity', secondaryData.opacity.toString());
    });
    
    // Update connection lines
    updateConnectionLines();
  }, [mousePosition, arrangement, floatingOffsets]);

  // Update connection lines based on node positions
  const updateConnectionLines = () => {
    if (!networkRef.current) return;
    
    // Get the main platform nodes and central node positions
    const youNode = networkRef.current.querySelector('.you-node-group');
    const platformNodes = networkRef.current.querySelectorAll('.platform-node-group');
    const mainConnections = networkRef.current.querySelectorAll('.main-connection');
    
    if (!youNode) return;
    
    const youNodeTransform = youNode.getAttribute('transform') || '';
    let youNodeX = arrangement.youNode.x;
    let youNodeY = arrangement.youNode.y;
    
    // Extract translation from transform if it exists
    const transformMatch = youNodeTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
    if (transformMatch) {
      youNodeX += parseFloat(transformMatch[1]);
      youNodeY += parseFloat(transformMatch[2]);
    }
    
    // Update main connections to central node
    platformNodes.forEach((node, index) => {
      if (index >= mainConnections.length) return;
      
      const platformTransform = node.getAttribute('transform') || '';
      const platformData = arrangement.platforms[index];
      let platformX = platformData.x;
      let platformY = platformData.y;
      
      // Extract translation from transform if it exists
      const platformTransformMatch = platformTransform.match(/translate\(([^,]+),\s*([^)]+)\)/);
      if (platformTransformMatch) {
        platformX += parseFloat(platformTransformMatch[1]);
        platformY += parseFloat(platformTransformMatch[2]);
      }
      
      // Update the path for straight connection lines
      const connection = mainConnections[index] as SVGPathElement;
      connection.setAttribute('d', `M${youNodeX},${youNodeY} L${platformX},${platformY}`);
    });
  };

  return (
    <svg 
      ref={networkRef}
      viewBox="0 0 800 450" 
      className="w-full h-full"
      fill="none"
    >
      {/* Background Grid - minimal, non-flashing */}
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <rect width="50" height="50" fill="none" />
        <path d="M 50 0 L 50 50 M 0 50 L 50 50" stroke="rgba(255,255,255,0.02)" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      {/* Enhanced central glow */}
      <circle cx="400" cy="225" r="180" fill="url(#centralGlow)" fillOpacity="0.15" className="animate-pulse-slow"/>
      
      {/* Radial gradient for center glow */}
      <defs>
        <radialGradient id="centralGlow" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
          <stop offset="0%" stopColor="#9b87f5" />
          <stop offset="100%" stopColor="#9b87f5" stopOpacity="0" />
        </radialGradient>
        
        {/* Enhanced glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="15" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Enhanced line animation - now with glowing pulses */}
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9b87f5" stopOpacity="0.3">
            <animate attributeName="offset" values="0;1" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#9b87f5" stopOpacity="0.8">
            <animate attributeName="offset" values="0.5;1.5" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      
      {/* Network nodes with enhanced styling */}
      <g>
        {/* Main connections - need to come first so they appear behind nodes */}
        <g className="connections-group">
          {/* Main connections to central node - no more wavy lines */}
          {arrangement.platforms.map((platform, index) => (
            <path 
              key={`main-conn-${index}-${currentArrangement}`} // Force re-render on profile change
              className="main-connection"
              d={`M400,225 L${platform.x},${platform.y}`} 
              stroke="url(#lineGradient)" 
              strokeWidth="3" 
              strokeOpacity="0.8"
            />
          ))}
          
          {/* Data pulse animations along connections - enhanced glow effect */}
          {arrangement.platforms.map((platform, index) => (
            <circle
              key={`data-pulse-${index}-${currentArrangement}`} // Force re-render on profile change
              r="6"
              fill="#9b87f5"
              filter="url(#glow)"
              opacity="0.9"
            >
              <animateMotion
                path={`M400,225 L${platform.x},${platform.y}`}
                dur={`${3 + index * 0.5}s`}
                repeatCount="indefinite"
                rotate="auto"
              />
              <animate
                attributeName="r"
                values="4;7;4"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      
        {/* Central YOU node - now with enhanced styling */}
        <g className="you-node-group">
          <circle cx="400" cy="225" r="30" fill="#9b87f5" filter="url(#glow)" className="animate-network-pulse" />
          <circle cx="400" cy="225" r="22" fill="#9b87f5" />
          <text x="400" y="225" textAnchor="middle" fill="white" fontSize="11" dy="3" fontWeight="bold">YOU</text>
        </g>
        
        {/* Platform nodes with icons instead of text labels - now larger */}
        {arrangement.platforms.map((platform, index) => (
          <g 
            key={`platform-${index}-${currentArrangement}`} // Force re-render on profile change
            className="platform-node-group"
            onMouseEnter={() => setHoveredNode(index)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <circle cx={platform.x} cy={platform.y} r="24" fill={platform.color} opacity="0.8" filter="url(#glow)" className="platform-glow" />
            <circle cx={platform.x} cy={platform.y} r="18" fill={platform.color} />
            <foreignObject className="platform-icon" width="28" height="28" transform={`translate(${platform.x - 14}, ${platform.y - 14})`}>
              <div className="h-full w-full flex items-center justify-center">
                {platform.icon}
              </div>
            </foreignObject>
            
            {/* Connection activity pulse animation */}
            <circle cx={platform.x} cy={platform.y} r="30" fill="transparent" stroke={platform.color} strokeWidth="2" opacity="0">
              <animate
                attributeName="r"
                values="18;40"
                dur={`${2 + index * 0.5}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0"
                dur={`${2 + index * 0.5}s`}
                repeatCount="indefinite"
              />
            </circle>
            
            {/* Platform label that appears on hover */}
            {hoveredNode === index && (
              <g>
                <rect 
                  x={platform.x - 40} 
                  y={platform.y + 25} 
                  width="80" 
                  height="20" 
                  rx="4" 
                  fill="rgba(0,0,0,0.8)" 
                />
                <text 
                  x={platform.x} 
                  y={platform.y + 38} 
                  textAnchor="middle" 
                  fill="white" 
                  fontSize="10"
                >
                  {platform.name}
                </text>
              </g>
            )}
          </g>
        ))}
        
        {/* Secondary nodes are generated dynamically based on current arrangement */}
        {arrangement.secondary.map((node, index) => (
          <circle 
            key={`secondary-${index}-${currentArrangement}`} // Force re-render on profile change
            cx={node.x} 
            cy={node.y} 
            r={node.size} 
            fill={node.color} 
            fillOpacity={node.opacity} 
            className="secondary-node" 
          />
        ))}
      </g>
      
      {/* Enhanced interactive highlight effect */}
      <circle cx={mousePosition.x} cy={mousePosition.y} r="60" fill="white" fillOpacity="0.05" className="animate-pulse-slow" filter="blur(20px)" />
    </svg>
  );
};

export default NetworkVisualization;
