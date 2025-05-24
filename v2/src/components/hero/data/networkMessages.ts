
import { NetworkMessage } from '../types';

// Network messages data separated into its own file
const networkMessages: NetworkMessage[] = [
  { type: "opportunity", message: "New connection opportunity with Jane Smith, VP at TechCorp" },
  { type: "meeting", message: "Coffee chat scheduled with Mark Williams next Tuesday" },
  { type: "insight", message: "3 contacts at Acme Inc. could help with your job search" },
  { type: "connection", message: "David from CloudScale viewed your profile yesterday" },
  { type: "event", message: "Tech Meetup this Thursday - 5 connections attending" }
];

export default networkMessages;
