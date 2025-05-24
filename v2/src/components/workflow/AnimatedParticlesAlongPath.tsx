
import React from 'react';
import { motion, useTransform } from 'framer-motion';

interface AnimatedParticlesAlongPathProps {
  path: string,
  flowProgress: any,
  progressStart: number,
  progressEnd: number,
  count?: number,
  delay?: number
}

const AnimatedParticlesAlongPath = ({
  path,
  flowProgress,
  progressStart,
  progressEnd,
  count = 3,
  delay = 0
}: AnimatedParticlesAlongPathProps) => {
  return (
    <>
      {[...Array(count)].map((_, i) => {
        const particleDelay = i * ((progressEnd - progressStart) / count);
        
        return (
          <motion.circle
            key={i}
            r="3"
            fill="#9b87f5"
            filter="url(#glow)"
            style={{
              offsetPath: `path('${path}')`,
              offsetDistance: useTransform(
                flowProgress,
                [
                  progressStart + delay + particleDelay,
                  progressEnd
                ],
                ["0%", "100%"]
              ),
              opacity: useTransform(
                flowProgress,
                [
                  progressStart + delay + particleDelay,
                  progressStart + delay + particleDelay + 0.02,
                  progressEnd - 0.02,
                  progressEnd
                ],
                [0, 1, 1, 0]
              )
            }}
          />
        );
      })}
    </>
  );
};

export default AnimatedParticlesAlongPath;
