'use client';
import Image from 'next/image';
import  { useState } from 'react';
import faq from "@/public/images/faq.gif"

interface AccordionItem {
    title: string;
    question: string;
    answer: string;
    colorBg: string;
    colorBorder: string;
  }

const accordionData: AccordionItem[] = [
    { 
      title: 'Course Access', 
      question: 'How do I enroll in a course?', 
      answer: 'To enroll in a course, navigate to the course catalog and click on the course you want to enroll in. ', 
      colorBg: 'bg-amber-500', 
      colorBorder: 'border-amber-500' 
    },
    { 
      title: 'Technical ', 
      question: 'How do I get technical support?', 
      answer: 'If you need technical assistance, you can reach out to our support team via email at support@example.', 
      colorBg: 'customBlue', 
      colorBorder: 'border-orange-500' 
    },
    { 
      title: ' Payments', 
      question: 'How can I update my payment method?', 
      answer: 'To update your payment method, go to your account settings and select the "Payment Methods" section. ', 
      colorBg: 'customBlue', 
      colorBorder: 'border-red-500' 
    },
    { 
      title: 'Features', 
      question: 'What features are available in the platform?', 
      answer: 'Our platform offers a wide range of features including course enrollment,  quizzes, ', 
      colorBg: 'bg-sky-500', 
      colorBorder: 'border-sky-500' 
    },
    { 
      title: 'Account Management', 
      question: 'How can I change my email address?', 
      answer: ' go to your account settings and select the "Account Information" section.', 
      colorBg: 'bg-purple-500', 
      colorBorder: 'border-purple-500' 
    }
  ];

const Faq: React.FC = () => {
  // Toggle State and Function
  const [isActive, setIsActive] = useState<number | null>(0);
  const handleToggle = (idx: number) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
 <div className='lg:flex sm:grid' data-aos="fade-up" >
  
   
   <div >
    <Image src={faq} width={600} alt='faq ans and question'>

    </Image>
   </div>

   <div className="mx-auto flex mt-6 min-h-[300px] w-fit gap-1 rotate-90 md:rotate-0">
      
      {accordionData?.map((data, idx) => (
        <div key={idx} className="flex">
          {/* toggle item */}
          <button onClick={() => handleToggle(idx)} className={`flex h-full w-14 flex-col items-center justify-around bg-[#1e1558] relative rounded-lg text-white`}>
            {isActive === idx && <span className={`h-0 w-0 ${data?.colorBorder} absolute left-10 top-4 rotate-[225deg] border-b-[20px] border-r-[20px] border-r-transparent`}></span>}
            <p className="-rotate-90 md:rotate-0">{idx + 1}</p>
            <p className="rotate-[270deg] p-4">QUESTION</p>
          </button>
          {/* container */}
          <div className={`grid gap-2 place-content-center rounded-lg bg-[#0a0c31]  shadow-md ${isActive === idx ? 'opacity-1 scale-1 h-[200px] md:h-auto w-[300px] md:w-56 px-5' : 'w-0 scale-0 opacity-0'} md:ml-2 mt-12 md:mt-0 text-black duration-300 ease-in-out -rotate-90 md:rotate-0`}>
            <h2 className="text-white text-center lg:text-2xl ">{data?.title}</h2>
            <p className="text-white"> <span className='text-xl font-extrabold divide-dashed bg-indigo-950 p-1'>Question:</span> {data?.question}</p>
            <p className="text-white"><span className='bg-indigo-950 p-1 text-white'>Ans:</span>{data?.answer}</p>
          </div>
        </div>
      ))}
    </div>

 </div>

  );
};

export default Faq;

