
import { useState, useEffect, useCallback } from 'react';

export const useDataInsights = (initialInsights: string[]) => {
  const [dataInsights, setDataInsights] = useState<string[]>(initialInsights);
  
  // Cycle through data insights
  useEffect(() => {
    if (dataInsights.length === 0) return;
    
    const insightTimer = setInterval(() => {
      setDataInsights(prev => {
        const rotated = [...prev];
        rotated.push(rotated.shift() || "");
        return rotated;
      });
    }, 3000);
    
    return () => clearInterval(insightTimer);
  }, []);

  return {
    currentInsight: dataInsights.length > 0 ? dataInsights[0] : "",
    allInsights: dataInsights
  };
};
