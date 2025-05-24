
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroHeading = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Expose global functions for easy access
  useEffect(() => {
    // Make functions globally accessible
    (window as any).viewWaitlistEmails = () => {
      const emails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
      console.table(emails);
      return emails;
    };

    (window as any).exportWaitlistEmails = exportAllEmails;

    // Keyboard shortcut: Ctrl+Shift+W to view emails
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'W') {
        e.preventDefault();
        (window as any).viewWaitlistEmails();
        toast({
          title: "Waitlist emails logged to console",
          description: "Check the browser console to view all emails.",
        });
      }
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [toast]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Formspree (replace YOUR_FORM_ID with your actual form ID)
      const response = await fetch('https://formspree.io/f/xgvkjwqq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'SocialMesh Waitlist'
        }),
      });

      if (response.ok) {
        // Also save to localStorage as backup
        const existingEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
        const timestamp = new Date().toISOString();
        existingEmails.push({ email, timestamp });
        localStorage.setItem('waitlistEmails', JSON.stringify(existingEmails));

        console.log('✅ New waitlist signup:', { email, timestamp });

        toast({
          title: "Welcome to the waitlist!",
          description: "Thank you for joining. We'll notify you when SocialMesh is ready.",
        });

        setEmail('');
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to export all collected emails (for development/admin use)
  const exportAllEmails = () => {
    const allEmails = JSON.parse(localStorage.getItem('waitlistEmails') || '[]');
    if (allEmails.length === 0) {
      toast({
        title: "No emails to export",
        description: "No emails have been collected yet.",
      });
      return;
    }

    const csvHeader = 'Email,Timestamp\n';
    const csvContent = csvHeader + allEmails.map((entry: any) => `${entry.email},${entry.timestamp}`).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `all_waitlist_emails_${Date.now()}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    toast({
      title: "Export complete!",
      description: `Exported ${allEmails.length} email(s) to CSV.`,
    });
  };

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
        <form onSubmit={handleEmailSubmit} className="flex items-center bg-nexus-dark/60 backdrop-blur-sm rounded-full border border-gray-700/50 p-2 max-w-md w-full">
          <div className="flex items-center flex-1">
            <Mail className="h-5 w-5 text-gray-400 ml-4 mr-3" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-none bg-transparent text-white placeholder-gray-400 focus:ring-0 focus:outline-none flex-1"
              required
            />
          </div>
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="bg-gradient text-white rounded-full from-nexus-purple to-nexus-blue hover:opacity-90 px-6 py-3 font-medium text-base ml-2 whitespace-nowrap"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                <span>Joining...</span>
              </>
            ) : (
              <>
                <span>Join Waitlist</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default HeroHeading;
