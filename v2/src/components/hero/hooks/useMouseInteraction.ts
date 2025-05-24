
import { useState } from 'react';

export const useMouseInteraction = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Track mouse position for interactive movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 800;
    const y = (e.clientY - rect.top) / rect.height * 450;
    
    // Smooth mouse movement by updating position gradually
    setMousePosition(prev => ({
      x: prev.x + (x - prev.x) * 0.1, // Slower, smoother follow
      y: prev.y + (y - prev.y) * 0.1
    }));
  };

  return {
    mousePosition,
    hoveredNode,
    setHoveredNode,
    handleMouseMove
  };
};
