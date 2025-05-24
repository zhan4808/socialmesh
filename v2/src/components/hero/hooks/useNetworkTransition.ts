import { useState, useEffect } from 'react';
import { ArrangementType } from '../types';

export const useNetworkTransition = (initialArrangement: ArrangementType = 'default') => {
  const [currentArrangement, setCurrentArrangement] = useState<ArrangementType>(initialArrangement);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Auto transition between arrangements every 8 seconds (decoupled from isTransitioning)
  useEffect(() => {
    const autoTransitionTimer = setTimeout(() => {
      transitionToNextArrangement(true); // auto = true
    }, 8000);
    return () => clearTimeout(autoTransitionTimer);
  }, [currentArrangement]);

  // Transition to the next arrangement in sequence
  const transitionToNextArrangement = (auto = false) => {
    // Only block manual transitions if already transitioning
    if (!auto && isTransitioning) return;
    setIsTransitioning(true);
    const arrangements: ArrangementType[] = ['default', 'professional', 'social', 'communities'];
    const currentIndex = arrangements.indexOf(currentArrangement);
    const nextIndex = (currentIndex + 1) % arrangements.length;
    setTimeout(() => {
      setCurrentArrangement(arrangements[nextIndex]);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 300);
  };

  return {
    currentArrangement,
    isTransitioning,
    transitionToNextArrangement
  };
};
