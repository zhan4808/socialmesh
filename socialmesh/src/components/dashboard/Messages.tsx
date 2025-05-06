"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "lucide-react";

type Message = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: string;
};

type Conversation = {
  userId: string;
  userName: string;
  userImage?: string;
  lastMessage?: Message;
  unreadCount: number;
  messages: Message[];
};

export function Messages({ userId }: { userId: string }) {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [messageInput, setMessageInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/messages");
        
        if (!response.ok) {
          throw new Error("Failed to fetch conversations");
        }
        
        const data = await response.json();
        setConversations(data.conversations || []);
        
        // If there are conversations, select the first one
        if (data.conversations && data.conversations.length > 0) {
          setSelectedConversation(data.conversations[0]);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load messages");
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversations();
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedConversation || !messageInput.trim()) return;
    
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          receiverId: selectedConversation.userId,
          content: messageInput,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      const data = await response.json();
      
      // Add the new message to the conversation
      const newMessage: Message = data.message;
      
      setSelectedConversation(prev => {
        if (!prev) return null;
        return {
          ...prev,
          lastMessage: newMessage,
          messages: [...prev.messages, newMessage],
        };
      });
      
      // Update the conversations list
      setConversations(prevConversations => 
        prevConversations.map(conv => 
          conv.userId === selectedConversation.userId
            ? {
                ...conv,
                lastMessage: newMessage,
                messages: [...conv.messages, newMessage],
              }
            : conv
        )
      );
      
      // Clear the input
      setMessageInput("");
    } catch (err) {
      console.error(err);
      setError("Failed to send message");
    }
  };

  const selectConversation = async (conversation: Conversation) => {
    // Mark messages as read
    try {
      await fetch(`/api/messages/${conversation.userId}/read`, {
        method: "POST",
      });
      
      // Update the unread count
      setConversations(prevConversations => 
        prevConversations.map(conv => 
          conv.userId === conversation.userId
            ? { ...conv, unreadCount: 0 }
            : conv
        )
      );
    } catch (err) {
      console.error("Failed to mark messages as read:", err);
    }
    
    setSelectedConversation(conversation);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading conversations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 mb-2">{error}</p>
        <Button onClick={() => window.location.reload()}>Try Again</Button>
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
        <p className="text-gray-600 mb-4">
          Connect with professionals to start a conversation
        </p>
        <Button>Find Connections</Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Messages</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 border rounded-lg overflow-hidden">
          <div className="p-4 border-b bg-gray-50">
            <h3 className="font-semibold">Conversations</h3>
          </div>
          <div className="divide-y max-h-[500px] overflow-y-auto">
            {conversations.map((conversation) => (
              <div 
                key={conversation.userId}
                className={`flex items-center p-3 hover:bg-gray-50 cursor-pointer ${
                  selectedConversation?.userId === conversation.userId ? 'bg-blue-50' : ''
                }`}
                onClick={() => selectConversation(conversation)}
              >
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  {conversation.userImage ? (
                    <img 
                      src={conversation.userImage} 
                      alt={conversation.userName} 
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <span className="text-blue-500 font-semibold">
                      {conversation.userName.charAt(0)}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className="font-medium truncate">{conversation.userName}</p>
                    {conversation.unreadCount > 0 && (
                      <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                        {conversation.unreadCount}
                      </span>
                    )}
                  </div>
                  {conversation.lastMessage && (
                    <p className="text-sm text-gray-500 truncate">
                      {conversation.lastMessage.senderId === userId ? 'You: ' : ''}
                      {conversation.lastMessage.content}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:col-span-2 border rounded-lg overflow-hidden flex flex-col h-[500px]">
          {selectedConversation ? (
            <>
              <div className="p-4 border-b bg-gray-50 flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  {selectedConversation.userImage ? (
                    <img 
                      src={selectedConversation.userImage} 
                      alt={selectedConversation.userName} 
                      className="w-10 h-10 rounded-full"
                    />
                  ) : (
                    <span className="text-blue-500 font-semibold">
                      {selectedConversation.userName.charAt(0)}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold">{selectedConversation.userName}</h3>
              </div>
              
              <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {selectedConversation.messages.map((message) => (
                    <div 
                      key={message.id}
                      className={`flex ${message.senderId === userId ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[70%] p-3 rounded-lg ${
                          message.senderId === userId 
                            ? 'bg-blue-500 text-white rounded-br-none' 
                            : 'bg-white border rounded-bl-none'
                        }`}
                      >
                        <p>{message.content}</p>
                        <p className={`text-xs mt-1 ${message.senderId === userId ? 'text-blue-100' : 'text-gray-400'}`}>
                          {new Date(message.createdAt).toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <form 
                className="p-3 border-t flex gap-2" 
                onSubmit={handleSendMessage}
              >
                <Input
                  placeholder="Type a message..."
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" size="icon">
                  <SendIcon className="h-4 w-4" />
                </Button>
              </form>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a conversation to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 