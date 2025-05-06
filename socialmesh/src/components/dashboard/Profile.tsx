"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X, PlusCircle, Pencil } from "lucide-react";

type UserProfile = {
  id: string;
  name: string;
  email: string;
  image?: string;
  title?: string;
  company?: string;
  industry?: string;
  location?: string;
  bio?: string;
  skills: string[];
  website?: string;
};

export function Profile({ userId }: { userId: string }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState<Partial<UserProfile>>({});
  const [newSkill, setNewSkill] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/profile`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        
        const data = await response.json();
        setProfile(data);
        setEditedProfile(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load profile data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (!newSkill.trim()) return;
    
    setEditedProfile(prev => ({
      ...prev,
      skills: [...(prev.skills || []), newSkill.trim()],
    }));
    setNewSkill("");
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setEditedProfile(prev => ({
      ...prev,
      skills: (prev.skills || []).filter(skill => skill !== skillToRemove),
    }));
  };

  const handleSaveProfile = async () => {
    try {
      setIsSaving(true);
      
      const response = await fetch(`/api/profile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedProfile),
      });
      
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      
      const updatedProfile = await response.json();
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      setError("Failed to update profile");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading profile...</p>
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

  if (!profile) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold mb-2">Profile not found</h3>
        <p className="text-gray-600 mb-4">
          Unable to load your profile information
        </p>
        <Button onClick={() => window.location.reload()}>Reload</Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Profile</h2>
        {!isEditing ? (
          <Button onClick={() => setIsEditing(true)}>
            <Pencil className="h-4 w-4 mr-2" />
            Edit Profile
          </Button>
        ) : (
          <div className="space-x-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveProfile} disabled={isSaving}>
              {isSaving ? 'Saving...' : 'Save Changes'}
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
            <CardDescription>
              Update your professional details and skills
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Professional Title</Label>
                {isEditing ? (
                  <Input 
                    id="title"
                    name="title"
                    value={editedProfile.title || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. Senior Software Engineer"
                  />
                ) : (
                  <p className="text-sm py-2">{profile.title || 'Not specified'}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                {isEditing ? (
                  <Input 
                    id="company"
                    name="company"
                    value={editedProfile.company || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. Google"
                  />
                ) : (
                  <p className="text-sm py-2">{profile.company || 'Not specified'}</p>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="industry">Industry</Label>
                {isEditing ? (
                  <Input 
                    id="industry"
                    name="industry"
                    value={editedProfile.industry || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. Technology"
                  />
                ) : (
                  <p className="text-sm py-2">{profile.industry || 'Not specified'}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                {isEditing ? (
                  <Input 
                    id="location"
                    name="location"
                    value={editedProfile.location || ''}
                    onChange={handleInputChange}
                    placeholder="e.g. San Francisco, CA"
                  />
                ) : (
                  <p className="text-sm py-2">{profile.location || 'Not specified'}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              {isEditing ? (
                <Textarea 
                  id="bio"
                  name="bio"
                  value={editedProfile.bio || ''}
                  onChange={handleInputChange}
                  placeholder="Tell others about yourself..."
                  rows={4}
                />
              ) : (
                <p className="text-sm py-2">{profile.bio || 'No bio provided yet'}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="skills">Skills</Label>
              <div className="flex flex-wrap gap-2">
                {(isEditing ? editedProfile.skills : profile.skills)?.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-2">
                    {skill}
                    {isEditing && (
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => handleRemoveSkill(skill)}
                      />
                    )}
                  </Badge>
                ))}
                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      id="newSkill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      placeholder="Add a skill..."
                      className="max-w-[200px]"
                      onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
                    />
                    <Button type="button" size="icon" onClick={handleAddSkill}>
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                  </div>
                )}
                {(!isEditing && (!profile.skills || profile.skills.length === 0)) && (
                  <p className="text-sm py-2 text-gray-500">No skills added yet</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              {isEditing ? (
                <Input 
                  id="website"
                  name="website"
                  value={editedProfile.website || ''}
                  onChange={handleInputChange}
                  placeholder="e.g. https://myportfolio.com"
                />
              ) : (
                profile.website ? (
                  <a 
                    href={profile.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-blue-500 hover:underline py-2 inline-block"
                  >
                    {profile.website}
                  </a>
                ) : (
                  <p className="text-sm py-2">Not specified</p>
                )
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>
              Your basic account details
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                {profile.image ? (
                  <img 
                    src={profile.image} 
                    alt={profile.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-gray-500">
                    {profile.name?.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              {isEditing ? (
                <Input 
                  id="name"
                  name="name"
                  value={editedProfile.name || ''}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="text-sm py-2">{profile.name}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <p className="text-sm py-2">{profile.email}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 