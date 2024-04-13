"use client"
import React, { useState } from 'react';

interface AccordionItem {
    title: string;
    question: string;
    answer: string;
    colorBg: string;
    colorBorder: string;
  }

const accordionData: AccordionItem[] = [
    { 
      title: 'Course Access:', 
      question: 'How do I enroll in a course?', 
      answer: 'To enroll in a course, navigate to the course catalog and click on the course you want to enroll in. Then, follow the prompts to complete the enrollment process.', 
      colorBg: 'bg-amber-500', 
      colorBorder: 'border-amber-500' 
    },
    { 
      title: 'Technical Support:', 
      question: 'How do I get technical support?', 
      answer: 'If you need technical assistance, you can reach out to our support team via email at support@example.com or through the live chat feature available on our website.', 
      colorBg: 'bg-orange-500', 
      colorBorder: 'border-orange-500' 
    },
    { 
      title: 'Billing and Payments:', 
      question: 'How can I update my payment method?', 
      answer: 'To update your payment method, go to your account settings and select the "Payment Methods" section. From there, you can add a new payment method or update your existing one.', 
      colorBg: 'bg-red-500', 
      colorBorder: 'border-red-500' 
    },
    { 
      title: 'Platform Features:', 
      question: 'What features are available in the platform?', 
      answer: 'Our platform offers a wide range of features including course enrollment, progress tracking, discussion forums, quizzes, and certificates upon course completion.', 
      colorBg: 'bg-sky-500', 
      colorBorder: 'border-sky-500' 
    },
    { 
      title: 'Account Management:', 
      question: 'How can I change my email address?', 
      answer: 'To change your email address, go to your account settings and select the "Account Information" section. From there, you can update your email address.', 
      colorBg: 'bg-purple-500', 
      colorBorder: 'border-purple-500' 
    }
  ];

const faq: React.FC = () => {
  // Toggle State and Function
  const [isActive, setIsActive] = useState<number | null>(0);
  const handleToggle = (idx: number) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <div className="mx-auto flex mt-6 min-h-[300px] w-fit gap-1 rotate-90 md:rotate-0">
      {accordionData?.map((data, idx) => (
        <div key={idx} className="flex">
          {/* toggle item */}
          <button onClick={() => handleToggle(idx)} className={`flex h-full w-14 flex-col items-center justify-around ${data?.colorBg} relative rounded-lg text-white`}>
            {isActive === idx && <span className={`h-0 w-0 ${data?.colorBorder} absolute left-10 top-4 rotate-[225deg] border-b-[20px] border-r-[20px] border-r-transparent`}></span>}
            <p className="-rotate-90 md:rotate-0">{idx + 1}</p>
            <p className="rotate-[270deg] p-4">QUESTION</p>
          </button>
          {/* container */}
          <div className={`grid place-content-center rounded-lg bg-gray-200 dark:bg-[#18181B] shadow-md ${isActive === idx ? 'opacity-1 scale-1 h-[200px] md:h-auto w-[300px] md:w-56 px-5' : 'w-0 scale-0 opacity-0'} md:ml-2 mt-12 md:mt-0 text-black duration-300 ease-in-out -rotate-90 md:rotate-0`}>
            <h2 className="font-black lg:text-2xl dark:text-white">{data?.title}</h2>
            <p className="text-black/60 dark:text-white/60"> <span className='bg-orange-500'>Question:</span> {data?.question}</p>
            <p className="text-black/60 dark:text-white/60"><span className='bg-cyan-500 text-white'>Ans:</span>{data?.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default faq;

