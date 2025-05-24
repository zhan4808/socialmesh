import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { MessageSquare, Calendar } from 'lucide-react';

interface ParallelTasksStepProps {
  position: number;
  flowProgress: any;
  progressRanges: {
    parallelTasks: number[];
  };
}

const ParallelTasksStep = ({ position, flowProgress, progressRanges }: ParallelTasksStepProps) => {
  return (
    <motion.div 
      style={{ 
        top: position,
        opacity: useTransform(flowProgress, [progressRanges.parallelTasks[0], progressRanges.parallelTasks[0] + 0.05, progressRanges.parallelTasks[1]], [0, 1, 1]),
      }}
      className="absolute left-0 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
        {/* Left: Automated Messaging */}
        <motion.div 
          style={{
            x: useTransform(flowProgress, [progressRanges.parallelTasks[0], progressRanges.parallelTasks[0] + 0.06], [-30, 0]),
            opacity: useTransform(flowProgress, [progressRanges.parallelTasks[0], progressRanges.parallelTasks[0] + 0.04], [0, 1]),
          }}
          className="bg-nexus-dark/60 border border-nexus-purple/30 p-6 rounded-xl backdrop-blur-md"
        >
          <div className="flex flex-col items-center mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-blue flex items-center justify-center mb-3">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-lg font-medium text-white">Automated Messaging</h4>
            <p className="text-sm text-gray-300 text-center">
              Send personalized, curated messages
            </p>
          </div>
          
          {/* Message Bubbles */}
          <div className="relative h-[140px] mt-3 mb-2">
            <div className="absolute left-0 w-full top-0">
              {[
                "Hi Jamie, I noticed you're working on AI-driven analytics. I'd love to connect!",
                "Alex, it was great meeting you at the tech conference last week. Let's catch up soon.",
                "Interesting article you shared about blockchain. I have some thoughts to discuss."
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.3 }}
                  className={`bg-nexus-purple/20 border border-nexus-purple/30 rounded-xl p-2 mb-2 max-w-[90%] ${index % 2 === 1 ? 'ml-auto bg-nexus-blue/20 border-nexus-blue/30' : ''}`}
                >
                  <p className="text-xs text-gray-200 leading-relaxed">{text}</p>
                  <div className="mt-1 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Personalized by AI</span>
                    <span className="text-xs text-nexus-purple-light">Ready to send</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Right: Meeting Coordination */}
        <motion.div 
          style={{
            x: useTransform(flowProgress, [progressRanges.parallelTasks[0] + 0.02, progressRanges.parallelTasks[0] + 0.08], [30, 0]),
            opacity: useTransform(flowProgress, [progressRanges.parallelTasks[0] + 0.02, progressRanges.parallelTasks[0] + 0.06], [0, 1]),
          }}
          className="bg-nexus-dark/60 border border-nexus-purple/30 p-6 rounded-xl backdrop-blur-md"
        >
          <div className="flex flex-col items-center mb-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-blue flex items-center justify-center mb-3">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-lg font-medium text-white">Meeting Coordination</h4>
            <p className="text-sm text-gray-300 text-center">
              Schedule and set up meetings automatically
            </p>
          </div>
          
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 bg-nexus-dark/80 rounded-xl p-3 border border-white/10"
          >
            <div className="flex justify-between items-center mb-2">
              <h5 className="text-sm font-medium text-white">October 2025</h5>
              <div className="flex gap-2">
                <button className="w-6 h-6 rounded-full bg-nexus-dark/60 flex items-center justify-center">
                  <span className="text-sm text-gray-400">←</span>
                </button>
                <button className="w-6 h-6 rounded-full bg-nexus-dark/60 flex items-center justify-center">
                  <span className="text-sm text-gray-400">→</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                <div key={day} className="text-xs text-gray-400">{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: 31 }, (_, i) => i + 1).map(date => {
                const isHighlighted = [4, 12, 18, 25].includes(date);
                return (
                  <div 
                    key={date} 
                    className={`text-xs py-1 rounded-full ${
                      isHighlighted 
                        ? 'bg-nexus-purple text-white' 
                        : 'text-gray-300 hover:bg-nexus-dark/40'
                    }`}
                  >
                    {date}
                  </div>
                );
              })}
            </div>
            
            <div className="mt-3 text-xs text-gray-400">
              <div className="flex items-center mb-1">
                <div className="w-2 h-2 rounded-full bg-nexus-purple mr-2"></div>
                <span>Meeting with Alex - Oct 4, 10:00 AM</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-nexus-purple mr-2"></div>
                <span>Coffee with Jamie - Oct 12, 3:30 PM</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ParallelTasksStep;
