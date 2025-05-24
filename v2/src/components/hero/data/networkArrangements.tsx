
import React from 'react';
import { Facebook, Twitter, Linkedin, Mail, Youtube, MessageSquare, Github, Instagram } from 'lucide-react';
import { NetworkArrangement } from '../types';

// Network arrangements data separated into its own file
const nodeArrangements: Record<string, NetworkArrangement> = {
  default: {
    platforms: [
      { x: 250, y: 150, icon: <Linkedin className="w-8 h-8 text-white" />, color: "#0077b5", name: "LinkedIn" },
      { x: 550, y: 160, icon: <Twitter className="w-8 h-8 text-white" />, color: "#1DA1F2", name: "Twitter" },
      { x: 300, y: 320, icon: <Mail className="w-8 h-8 text-white" />, color: "#D44638", name: "Email" },
      { x: 500, y: 300, icon: <MessageSquare className="w-8 h-8 text-white" />, color: "#25D366", name: "Messaging" },
      { x: 180, y: 250, icon: <Facebook className="w-8 h-8 text-white" />, color: "#4267B2", name: "Facebook" },
    ],
    secondary: [
      { x: 150, y: 100, color: "#0077b5", size: 10, opacity: 0.7 },
      { x: 200, y: 80, color: "#0077b5", size: 8, opacity: 0.6 },
      { x: 270, y: 90, color: "#0077b5", size: 9, opacity: 0.8 },
      { x: 320, y: 120, color: "#0077b5", size: 11, opacity: 0.7 },
      
      { x: 600, y: 120, color: "#1DA1F2", size: 10, opacity: 0.7 },
      { x: 650, y: 180, color: "#1DA1F2", size: 9, opacity: 0.6 },
      { x: 580, y: 220, color: "#1DA1F2", size: 8, opacity: 0.8 },
      
      { x: 250, y: 380, color: "#D44638", size: 9, opacity: 0.7 },
      { x: 350, y: 350, color: "#D44638", size: 10, opacity: 0.6 },
      { x: 280, y: 280, color: "#D44638", size: 8, opacity: 0.8 },
      
      { x: 550, y: 350, color: "#25D366", size: 9, opacity: 0.7 },
      { x: 480, y: 380, color: "#25D366", size: 8, opacity: 0.8 },
      
      { x: 220, y: 200, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 450, y: 120, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 480, y: 180, color: "#9b87f5", size: 6, opacity: 0.5 },
      { x: 380, y: 350, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 150, y: 280, color: "#9b87f5", size: 8, opacity: 0.5 },
      { x: 630, y: 270, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 430, y: 400, color: "#9b87f5", size: 6, opacity: 0.5 },
    ],
    youNode: { x: 400, y: 225 },
    stats: [
      { title: "Connections analyzed", value: "2,148" },
      { title: "Key relationships", value: "37" },
      { title: "Connection strength", value: "80%" },
      { title: "Outreach hit rate", value: "89%" },
      { title: "Meetings scheduled", value: "8" }
    ]
  },
  professional: {
    platforms: [
      { x: 270, y: 130, icon: <Linkedin className="w-8 h-8 text-white" />, color: "#0077b5", name: "LinkedIn" },
      { x: 520, y: 170, icon: <Twitter className="w-8 h-8 text-white" />, color: "#1DA1F2", name: "Twitter" },
      { x: 330, y: 350, icon: <Mail className="w-8 h-8 text-white" />, color: "#D44638", name: "Email" },
      { x: 450, y: 280, icon: <Github className="w-8 h-8 text-white" />, color: "#333", name: "Github" },
      { x: 180, y: 220, icon: <Youtube className="w-8 h-8 text-white" />, color: "#FF0000", name: "YouTube" },
    ],
    secondary: [
      { x: 180, y: 110, color: "#0077b5", size: 10, opacity: 0.7 },
      { x: 230, y: 70, color: "#0077b5", size: 8, opacity: 0.6 },
      { x: 300, y: 100, color: "#0077b5", size: 11, opacity: 0.8 },
      
      { x: 580, y: 130, color: "#1DA1F2", size: 9, opacity: 0.7 },
      { x: 620, y: 200, color: "#1DA1F2", size: 8, opacity: 0.6 },
      { x: 550, y: 240, color: "#1DA1F2", size: 10, opacity: 0.8 },
      
      { x: 270, y: 400, color: "#D44638", size: 9, opacity: 0.7 },
      { x: 380, y: 370, color: "#D44638", size: 10, opacity: 0.6 },
      
      { x: 500, y: 320, color: "#333", size: 9, opacity: 0.7 },
      { x: 520, y: 350, color: "#333", size: 8, opacity: 0.8 },
      
      { x: 120, y: 200, color: "#FF0000", size: 8, opacity: 0.7 },
      { x: 150, y: 270, color: "#FF0000", size: 7, opacity: 0.6 },
      
      { x: 250, y: 180, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 430, y: 140, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 460, y: 200, color: "#9b87f5", size: 6, opacity: 0.5 },
      { x: 400, y: 330, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 180, y: 300, color: "#9b87f5", size: 6, opacity: 0.5 },
    ],
    youNode: { x: 400, y: 225 },
    stats: [
      { title: "Professional connections", value: "1,543" },
      { title: "Industry influence", value: "High" },
      { title: "Career opportunities", value: "12" },
      { title: "Outreach hit rate", value: "78%" },
      { title: "Meetings scheduled", value: "5" }
    ]
  },
  social: {
    platforms: [
      { x: 230, y: 160, icon: <Facebook className="w-8 h-8 text-white" />, color: "#4267B2", name: "Facebook" },
      { x: 530, y: 180, icon: <Instagram className="w-8 h-8 text-white" />, color: "#C13584", name: "Instagram" },
      { x: 320, y: 340, icon: <MessageSquare className="w-8 h-8 text-white" />, color: "#25D366", name: "Messaging" },
      { x: 470, y: 270, icon: <Youtube className="w-8 h-8 text-white" />, color: "#FF0000", name: "YouTube" },
      { x: 180, y: 230, icon: <Twitter className="w-8 h-8 text-white" />, color: "#1DA1F2", name: "Twitter" },
    ],
    secondary: [
      { x: 160, y: 120, color: "#4267B2", size: 10, opacity: 0.7 },
      { x: 210, y: 90, color: "#4267B2", size: 9, opacity: 0.6 },
      { x: 280, y: 130, color: "#4267B2", size: 8, opacity: 0.8 },
      
      { x: 590, y: 140, color: "#C13584", size: 9, opacity: 0.7 },
      { x: 620, y: 210, color: "#C13584", size: 10, opacity: 0.6 },
      { x: 560, y: 250, color: "#C13584", size: 8, opacity: 0.8 },
      
      { x: 290, y: 390, color: "#25D366", size: 10, opacity: 0.7 },
      { x: 360, y: 360, color: "#25D366", size: 8, opacity: 0.6 },
      
      { x: 520, y: 320, color: "#FF0000", size: 9, opacity: 0.7 },
      { x: 490, y: 230, color: "#FF0000", size: 8, opacity: 0.8 },
      
      { x: 130, y: 210, color: "#1DA1F2", size: 8, opacity: 0.7 },
      { x: 220, y: 260, color: "#1DA1F2", size: 7, opacity: 0.6 },
      
      { x: 290, y: 190, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 430, y: 150, color: "#9b87f5", size: 6, opacity: 0.5 },
      { x: 380, y: 290, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 190, y: 310, color: "#9b87f5", size: 8, opacity: 0.5 },
    ],
    youNode: { x: 400, y: 225 },
    stats: [
      { title: "Social connections", value: "849" },
      { title: "Social activity", value: "High" },
      { title: "Event invites", value: "23" },
      { title: "Outreach hit rate", value: "93%" },
      { title: "Meetings scheduled", value: "11" }
    ]
  },
  communities: {
    platforms: [
      { x: 250, y: 140, icon: <Github className="w-8 h-8 text-white" />, color: "#333", name: "Github" },
      { x: 520, y: 150, icon: <Youtube className="w-8 h-8 text-white" />, color: "#FF0000", name: "YouTube" },
      { x: 280, y: 330, icon: <MessageSquare className="w-8 h-8 text-white" />, color: "#5865F2", name: "Discord" },
      { x: 480, y: 310, icon: <MessageSquare className="w-8 h-8 text-white" />, color: "#E01E5A", name: "Slack" },
      { x: 200, y: 240, icon: <Twitter className="w-8 h-8 text-white" />, color: "#1DA1F2", name: "Twitter" },
    ],
    secondary: [
      { x: 170, y: 100, color: "#333", size: 10, opacity: 0.7 },
      { x: 220, y: 80, color: "#333", size: 8, opacity: 0.6 },
      { x: 290, y: 100, color: "#333", size: 9, opacity: 0.8 },
      
      { x: 580, y: 120, color: "#FF0000", size: 10, opacity: 0.7 },
      { x: 610, y: 180, color: "#FF0000", size: 9, opacity: 0.6 },
      { x: 550, y: 220, color: "#FF0000", size: 8, opacity: 0.8 },
      
      { x: 240, y: 380, color: "#5865F2", size: 9, opacity: 0.7 },
      { x: 340, y: 350, color: "#5865F2", size: 10, opacity: 0.6 },
      
      { x: 530, y: 350, color: "#E01E5A", size: 9, opacity: 0.7 },
      { x: 460, y: 380, color: "#E01E5A", size: 8, opacity: 0.8 },
      
      { x: 150, y: 270, color: "#1DA1F2", size: 8, opacity: 0.7 },
      { x: 230, y: 200, color: "#1DA1F2", size: 7, opacity: 0.6 },
      
      { x: 350, y: 150, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 450, y: 130, color: "#9b87f5", size: 6, opacity: 0.5 },
      { x: 400, y: 320, color: "#9b87f5", size: 7, opacity: 0.6 },
      { x: 180, y: 320, color: "#9b87f5", size: 8, opacity: 0.5 },
    ],
    youNode: { x: 400, y: 225 },
    stats: [
      { title: "Communities joined", value: "16" },
      { title: "Content interactions", value: "1,247" },
      { title: "Community standing", value: "Leader" },
      { title: "Outreach hit rate", value: "85%" },
      { title: "Meetings scheduled", value: "14" }
    ]
  }
};

export default nodeArrangements;
