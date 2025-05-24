import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Zap, Users, Link } from 'lucide-react';

interface OpportunityStepProps {
  position: number;
  flowProgress: any;
  progressRanges: {
    opportunityIdentification: number[];
  };
}

const OpportunityStep = ({ position, flowProgress, progressRanges }: OpportunityStepProps) => {
  return (
    <motion.div 
      style={{ 
        top: position,
        opacity: useTransform(flowProgress, [progressRanges.opportunityIdentification[0], progressRanges.opportunityIdentification[0] + 0.05, progressRanges.opportunityIdentification[1]], [0, 1, 1]),
        y: useTransform(flowProgress, [progressRanges.opportunityIdentification[0], progressRanges.opportunityIdentification[0] + 0.05], [30, 0]),
        x: "-50%",
        left: "50%"
      }}
      className="absolute w-[600px]"
    >
      <div className="bg-nexus-dark/60 border border-nexus-purple/30 p-6 rounded-xl backdrop-blur-md flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-blue flex items-center justify-center mb-4">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-lg font-medium text-white mb-2">Opportunity Identification</h4>
        <p className="text-sm text-gray-300 text-center mb-4 max-w-sm">
          Discover potential connections and networking opportunities
        </p>
        
        {/* Opportunity Cards */}
        <div className="mt-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Alex Morgan", role: "Product Manager", company: "TechCorp", type: "Introduction", icon: <Users className="w-4 h-4" /> },
            { name: "Jamie Chen", role: "Investor", company: "Venture Capital", type: "Follow-up", icon: <Link className="w-4 h-4" /> },
            { name: "Sam Taylor", role: "Engineering Lead", company: "StartupX", type: "Reconnect", icon: <Zap className="w-4 h-4" /> }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.2) }}
              className="bg-nexus-dark/80 rounded-lg p-3 border border-white/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-nexus-blue/20 flex items-center justify-center">
                  {card.icon}
                </div>
                <span className="text-xs text-nexus-blue-light">{card.type}</span>
              </div>
              <h5 className="text-sm font-medium text-white">{card.name}</h5>
              <p className="text-xs text-gray-400">{card.role}, {card.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default OpportunityStep;
