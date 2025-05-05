'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { FaLinkedin, FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  
  const handleProviderSignIn = async (provider: string) => {
    try {
      setIsLoading(true);
      await signIn(provider, { callbackUrl: '/dashboard' });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/dashboard'
      });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      } 
    }
  };
  
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Dev login form */}
      <motion.div variants={item}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Development Login</CardTitle>
            <CardDescription>
              Use any email/password for quick testing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCredentialsSignIn} className="space-y-4">
              <div className="space-y-2">
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="relative">
                  <FaLock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign in for development'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div variants={item} className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-muted"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
        </div>
      </motion.div>
      
      <motion.div variants={item}>
        <Button
          onClick={() => handleProviderSignIn('linkedin')}
          disabled={isLoading}
          variant="outline"
          className="w-full relative"
        >
          <FaLinkedin className="mr-2 h-5 w-5 text-[#0A66C2]" /> 
          Sign in with LinkedIn
        </Button>
      </motion.div>
      
      <motion.div variants={item}>
        <Button
          onClick={() => handleProviderSignIn('google')}
          disabled={isLoading}
          variant="outline"
          className="w-full"
        >
          <FaGoogle className="mr-2 h-5 w-5 text-[#DB4437]" /> 
          Sign in with Google
        </Button>
      </motion.div>
      
      <motion.div variants={item} className="text-center text-xs text-muted-foreground">
        By signing in, you agree to our Terms of Service and Privacy Policy.
      </motion.div>
    </motion.div>
  );
} 