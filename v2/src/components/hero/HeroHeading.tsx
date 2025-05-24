
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroHeading = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      <motion.div 
        className="mb-4 inline-block px-3 py-1 rounded-full bg-nexus-purple/20 border border-nexus-purple/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm text-nexus-purple-light">Now in private beta</span>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tighter"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Connect<span className="text-gradient"> your social universe</span> with intelligent mesh
      </motion.h1>
      
      <motion.p 
        className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        SocialMesh connects your network across all platforms. Discover hidden connections, 
        automate your networking, and build meaningful relationships with AI assistance.
      </motion.p>
      
      <motion.div 
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button className="bg-gradient text-white rounded-full from-nexus-purple to-nexus-blue hover:opacity-90 px-6 py-6 font-medium text-lg">
          <span>Join Waitlist</span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroHeading;
