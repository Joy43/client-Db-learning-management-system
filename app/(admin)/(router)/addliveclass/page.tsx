'use client';

import React, { useState } from 'react';
import { Button, Input, TextareaAutosize } from "@mui/material";
import { Label } from "flowbite-react";
import SendIcon from '@mui/icons-material/Send';
import toast from 'react-hot-toast';

const Addliveclass: React.FC = () => {
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://db-lern-server.vercel.app/liveclass', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, link, time })
      });

      if (response.ok) {
        // alert('Live class submitted successfully!');
        toast.success('class Event info sucessfull'); 
        setDescription('');
        setLink('');
        setTime('');
      } else {
        const errorMsg = await response.text();
        
        toast.error("Failed to submit live class"+errorMsg)
      }
    } catch (error) {
      console.error('Error submitting live class:', error);
      alert('An error occurred while submitting the live class. Please try again later.');
    }
  };

  return (
    <div className="text-white bg-[#14141b] min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-md space-y-4 py-12">
        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold">Submit a New Live Class Link</h2>
          <p className="text-white">Share a link and some details with the Class Live EVENT.</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 shadow-2xl bg-slate-100 p-4 rounded-md">
          <div className="grid gap-2">
            <Label htmlFor="description">Description of live event</Label>
            <TextareaAutosize 
              className="min-h-[100px] text-black p-2" 
              id="description" 
              placeholder="Enter a brief description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="link">Link</Label>
            <Input 
              className="p-2" 
              id="link" 
              placeholder="https://example.com" 
              type="url" 
              value={link} 
              onChange={(e) => setLink(e.target.value)} 
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">Time</Label>
            <Input 
              className="p-2" 
              id="time" 
              type="datetime-local" 
              value={time} 
              onChange={(e) => setTime(e.target.value)} 
              required
            />
          </div>
          <div className="text-center justify-center">
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Addliveclass;
