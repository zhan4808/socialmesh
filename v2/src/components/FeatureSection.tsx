
import { ArrowRight, BarChart2, Database, Network, Share2, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Network size={24} className="text-nexus-purple" />,
    title: "Cross-platform visualization",
    description: "See your entire social universe in a single interactive map, across all platforms and services."
  },
  {
    icon: <Database size={24} className="text-nexus-blue" />,
    title: "Automated data collection",
    description: "Seamlessly gather and organize your social data from LinkedIn, Twitter, email, and more."
  },
  {
    icon: <BarChart2 size={24} className="text-nexus-purple-light" />,
    title: "Relationship analytics",
    description: "Discover your most valuable connections and identify opportunities to strengthen relationships."
  },
  {
    icon: <Shield size={24} className="text-nexus-blue-light" />,
    title: "Privacy-focused",
    description: "Your data remains private and secure. We never share your information with third parties."
  },
  {
    icon: <Zap size={24} className="text-nexus-purple" />,
    title: "AI-powered insights",
    description: "Receive personalized recommendations for networking opportunities and relationship building."
  },
  {
    icon: <Share2 size={24} className="text-nexus-blue" />,
    title: "Connection export",
    description: "Export your visualization data to PDF, share insights, or integrate with your CRM."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-nexus-purple/20 border border-nexus-purple/30 mb-4">
            <span className="text-sm text-nexus-purple-light">Powerful Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover the power of your <span className="text-gradient">social connections</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our platform brings together your entire digital social network to help you visualize, 
            analyze and strengthen your most important relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-nexus-dark/40 border border-gray-800 rounded-xl p-6 hover:bg-nexus-dark/60 transition-all duration-300
                transform hover:-translate-y-1 group card-shine"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <a href="#" className="text-nexus-purple group-hover:text-nexus-purple-light flex items-center text-sm">
                Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-nexus-purple/10 blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-nexus-blue/10 blur-3xl opacity-30"></div>
    </section>
  );
};

export default FeatureSection;
