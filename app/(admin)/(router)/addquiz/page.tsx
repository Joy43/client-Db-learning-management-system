'use client'
import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
const QuizCard: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [answer, setAnswer] = useState('');
  const [loading,setloading]=useState(false);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = async () => {
    const quizData = {
      question,
      options,
      answer
    };

    try {
      await axios.post('https://db-lern-server.vercel.app/questions', quizData);
  
      toast.success('Quiz data submitted successfully!')
      setloading(true);
    } catch (error) {
      console.error('Error submitting quiz data:', error);
    toast.error("Error submitting quiz data:",)
    }
  };

  return (
    <div className="rounded-lg bg-slate-100 border bg-card text-card-foreground shadow-sm w-full max-w-md" data-v0-t="card">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Quiz</h3>
        <p className="text-sm text-muted-foreground">Answer the following question.</p>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="question"
          >
            Question
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="question"
            placeholder="Enter the question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="options"
          >
            Options
          </label>
          <div className="grid gap-2">
            {options.map((option, index) => (
              <input
                key={index}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id={`option${index + 1}`}
                placeholder={`Option ${index + 1}`}
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="answer"
          >
            Answer
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="answer"
            placeholder="Enter the answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div className="space-y-2">
        <Button   onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
            Submit Quiz
            </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
