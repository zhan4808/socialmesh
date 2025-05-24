
import { useState, useEffect } from 'react';
import { NetworkMessage } from '../types';

export const useRotatingMessages = (messages: NetworkMessage[]) => {
  const [activeMessage, setActiveMessage] = useState(0);
  
  // Rotate through network messages
  useEffect(() => {
    if (messages.length === 0) return;
    
    const messageTimer = setInterval(() => {
      setActiveMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    
    return () => clearInterval(messageTimer);
  }, [messages.length]);

  return {
    activeMessage: messages.length > 0 ? messages[activeMessage] : null,
    messageIndex: activeMessage
  };
};
