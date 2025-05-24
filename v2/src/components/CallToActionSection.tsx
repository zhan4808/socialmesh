
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-nexus-purple/20 to-nexus-blue/20 
          rounded-2xl border border-gray-800 p-8 md:p-12 lg:p-16 relative overflow-hidden card-shine">
          
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-nexus-purple/10 blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-nexus-blue/10 blur-xl"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-nexus-purple/20 border border-nexus-purple/30 mb-4">
              <span className="text-sm text-nexus-purple-light">Limited Beta Access</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to transform how you <span className="text-gradient">visualize your network</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join our waitlist today to get early access to Nexus and be among the first to
              experience the future of social connection mapping.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="bg-gradient text-white from-nexus-purple to-nexus-blue hover:opacity-90 px-8 py-6 font-medium text-lg">
                <span>Get Early Access</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-white/5 px-8 py-6 font-medium text-lg">
                Schedule a Demo
              </Button>
            </div>
          </div>
          
          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 relative z-10">
            <div className="text-center bg-nexus-dark/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-nexus-purple mb-2">200k+</div>
              <p className="text-gray-300">Connections analyzed</p>
            </div>
            <div className="text-center bg-nexus-dark/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-nexus-blue mb-2">15+</div>
              <p className="text-gray-300">Platforms supported</p>
            </div>
            <div className="text-center bg-nexus-dark/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <div className="text-3xl font-bold text-nexus-purple-light mb-2">98%</div>
              <p className="text-gray-300">User satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
