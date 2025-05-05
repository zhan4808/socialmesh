"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { FaLinkedin, FaSpinner } from 'react-icons/fa';

interface MockResponse {
  ok: boolean;
  json: () => Promise<any>;
}

export default function ScrapePage() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScrapeLinkedIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    try {
      setLoading(true);
      setError(null);
      setResult(null);

      // Simulate API call to scraping endpoint
      const response = await new Promise<MockResponse>((resolve) => {
        setTimeout(() => {
          // Mock response based on URL containing 'linkedin'
          if (url.includes('linkedin.com/in/')) {
            // Extract username from URL
            const username = url.split('linkedin.com/in/')[1].split('/')[0];
            
            resolve({
              ok: true,
              json: async () => ({
                success: true,
                data: {
                  name: `${username.charAt(0).toUpperCase() + username.slice(1).replace(/-/g, ' ')}`,
                  headline: 'Software Engineer at Tech Company',
                  location: 'San Francisco Bay Area',
                  connections: 500 + Math.floor(Math.random() * 500),
                  about: 'Experienced software engineer with a focus on frontend development.',
                  experience: [
                    {
                      title: 'Senior Software Engineer',
                      company: 'Tech Company',
                      duration: '2020 - Present'
                    },
                    {
                      title: 'Software Engineer',
                      company: 'Previous Company',
                      duration: '2018 - 2020'
                    }
                  ],
                  education: [
                    {
                      school: 'University of California',
                      degree: 'Bachelor of Science, Computer Science',
                      years: '2014 - 2018'
                    }
                  ],
                  skills: ['JavaScript', 'React', 'TypeScript', 'Node.js', 'CSS']
                }
              })
            });
          } else {
            resolve({
              ok: false,
              json: async () => ({
                success: false,
                error: 'Invalid LinkedIn profile URL'
              })
            });
          }
        }, 1500);
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.data);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to scrape profile');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
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
    <div className="container mx-auto py-12 px-4 md:px-6">
      <motion.div 
        className="max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-4">Social Media Scraping Test</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enter a LinkedIn profile URL to test our scraping capabilities. This is a demo using mock data.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>LinkedIn Profile Scraper</CardTitle>
            <CardDescription>
              Enter a LinkedIn profile URL (e.g., https://linkedin.com/in/username)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleScrapeLinkedIn} className="space-y-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <FaLinkedin className="absolute left-3 top-3 h-4 w-4 text-[#0A66C2]" />
                  <Input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="pl-10"
                    disabled={loading}
                  />
                </div>
                <Button type="submit" disabled={loading || !url}>
                  {loading ? (
                    <>
                      <FaSpinner className="mr-2 h-4 w-4 animate-spin" />
                      Scraping...
                    </>
                  ) : (
                    'Scrape Profile'
                  )}
                </Button>
              </div>
            </form>

            {error && (
              <motion.div 
                className="mt-6 rounded-md bg-red-50 p-4 text-red-600 border border-red-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p>{error}</p>
              </motion.div>
            )}

            {result && (
              <motion.div 
                className="mt-6"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={item} className="rounded-t-lg bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
                  <h2 className="text-2xl font-bold">{result.name}</h2>
                  <p>{result.headline}</p>
                  <div className="mt-2 flex items-center text-sm">
                    <span>{result.location}</span>
                    <span className="mx-2">•</span>
                    <span>{result.connections} connections</span>
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="border border-t-0 rounded-b-lg p-6 space-y-6">
                  {result.about && (
                    <div>
                      <h3 className="font-semibold mb-2">About</h3>
                      <p className="text-muted-foreground">{result.about}</p>
                    </div>
                  )}
                  
                  {result.experience && result.experience.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2">Experience</h3>
                      <div className="space-y-3">
                        {result.experience.map((exp: any, i: number) => (
                          <div key={i} className="flex justify-between">
                            <div>
                              <div className="font-medium">{exp.title}</div>
                              <div className="text-sm text-muted-foreground">{exp.company}</div>
                            </div>
                            <div className="text-sm text-muted-foreground">{exp.duration}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {result.education && result.education.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2">Education</h3>
                      <div className="space-y-3">
                        {result.education.map((edu: any, i: number) => (
                          <div key={i}>
                            <div className="font-medium">{edu.school}</div>
                            <div className="text-sm text-muted-foreground">{edu.degree}</div>
                            <div className="text-sm text-muted-foreground">{edu.years}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {result.skills && result.skills.length > 0 && (
                    <div>
                      <h3 className="font-semibold mb-2">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {result.skills.map((skill: string, i: number) => (
                          <span 
                            key={i}
                            className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
} 