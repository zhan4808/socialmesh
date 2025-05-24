import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Clock, Link, MessageSquare, Calendar, Mail, Users } from 'lucide-react';

interface FollowUpStepProps {
  position: number;
  flowProgress: any;
  progressRanges: {
    followUp: number[];
  };
}

const FollowUpStep = ({ position, flowProgress, progressRanges }: FollowUpStepProps) => {
  return (
    <motion.div 
      style={{ 
        top: position,
        opacity: useTransform(flowProgress, [progressRanges.followUp[0], progressRanges.followUp[0] + 0.06, progressRanges.followUp[1]], [0, 1, 1]),
        y: useTransform(flowProgress, [progressRanges.followUp[0], progressRanges.followUp[0] + 0.08], [40, 0]),
        scale: useTransform(flowProgress, [progressRanges.followUp[0], progressRanges.followUp[0] + 0.06], [0.95, 1]),
        x: "-50%",
        left: "50%"
      }}
      className="absolute w-[400px]"
    >
      <div className="bg-nexus-dark/60 border border-nexus-purple/30 p-6 rounded-xl backdrop-blur-md flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-blue flex items-center justify-center mb-3">
          <Clock className="w-7 h-7 text-white" />
        </div>
        <h4 className="text-lg font-medium text-white">Follow-up Management</h4>
        <p className="text-sm text-gray-300 text-center">
          Automated follow-ups and relationship maintenance
        </p>
        
        {/* Timeline */}
        <div className="mt-4 relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-1 bg-nexus-purple/20 rounded-full"></div>
          
          {[
            { day: "Day 1", action: "Initial Connection", icon: <Link className="w-4 h-4" /> },
            { day: "Day 3", action: "Personalized Message", icon: <MessageSquare className="w-4 h-4" /> },
            { day: "Day 7", action: "Meeting Scheduled", icon: <Calendar className="w-4 h-4" /> },
            { day: "Day 14", action: "Follow-up Notes", icon: <Mail className="w-4 h-4" /> },
            { day: "Day 30", action: "Relationship Check-in", icon: <Users className="w-4 h-4" /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.2) }}
              className="mb-4 relative"
            >
              <div className="absolute -left-8 w-6 h-6 rounded-full bg-nexus-dark border-2 border-nexus-purple flex items-center justify-center">
                {item.icon}
              </div>
              <h5 className="text-sm font-medium text-white">{item.day}</h5>
              <p className="text-xs text-gray-300">{item.action}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FollowUpStep;
