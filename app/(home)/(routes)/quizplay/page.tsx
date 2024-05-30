'use client';

import React, { useEffect, useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';

const Quizplay = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [correctAnswers, setCorrectAnswers] = useState<{ [key: string]: string }>({});
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessages, setModalMessages] = useState<string[]>([]);

  useEffect(() => {
    axios.get('https://db-lern-server.vercel.app/questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.error("Error fetching questions:", error));
  }, []);

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    axios.post('https://db-lern-server.vercel.app/submitquiz', { answers, email })
      .then(response => {
        if (response.data && Array.isArray(response.data.correctAnswers)) {
          const correctAnswersMap = response.data.correctAnswers.reduce((acc: any, curr: any) => {
            acc[curr.questionId] = curr.answer;
            return acc;
          }, {});
          setCorrectAnswers(correctAnswersMap);
          setSubmitted(true);
          
          let totalCorrect = 0;
          const messages: string[] = [];

          response.data.correctAnswers.forEach((correctAnswer: any, index: number) => {
            const userAnswer = answers[correctAnswer.questionId];
            if (userAnswer === correctAnswer.answer) {
              totalCorrect += 1;
              messages.push(`Question ${index + 1}: Correct!`);
            } else {
              messages.push(`Question ${index + 1}: Incorrect. Correct answer is ${correctAnswer.answer}`);
            }
          });
          messages.push(`You got ${totalCorrect} out of ${questions.length} correct!`);

          setModalMessages(messages);
          setModalOpen(true);
        } else {
          throw new Error("Invalid response structure");
        }
      })
      .catch(error => {
        console.error("Error submitting quiz:", error);
        toast.error("There was an error submitting the quiz. Please try again later.");
      });
  };

  const handleClose = () => {
    setModalOpen(false);
    setModalMessages([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Quiz Time</h1>
          <p className="text-gray-600 dark:text-gray-400">Test your knowledge with this fun quiz!</p>
        </div>
        <div className="mt-8 space-y-6">
          {questions.map((question: any, index) => (
            <div key={question._id}>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{index}.{question.question}</h2>
              <div className="mt-2 space-y-2">
                {question.options.map((option: string, index: number) => {
                  let optionClass = "ml-3 text-gray-700 dark:text-gray-400";
                  if (submitted) {
                    if (option === correctAnswers[question._id]) {
                      optionClass += " bg-green-200 dark:bg-green-600";
                    } else if (answers[question._id] === option) {
                      optionClass += " bg-red-200 dark:bg-red-600";
                    }
                  }
                  return (
                    <label key={index} className="flex items-center">
                      <input
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        name={`question-${question._id}`}
                        type="radio"
                        value={option}
                        onChange={() => handleAnswerChange(question._id, option)}
                        disabled={submitted}
                      />
                      <span className={optionClass}>{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        
          <div className="flex justify-center mt-4">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={submitted}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
      {/* ------------modal---------- */}
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', boxShadow: 24, p: 4 }}>
          <Typography id="modal-title" variant="h6" component="h2">
            Quiz Results
          </Typography>
          <div className='font-semibold'>
            <Typography id="modal-description" sx={{ mt: 2 }}>
              {modalMessages.map((message, index) => (
                <div key={index}>{message}</div>
              ))}
            </Typography>
          </div>
          <Button onClick={handleClose} variant="contained" color="primary" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Quizplay;
