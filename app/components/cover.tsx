// components/Cover.tsx
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import studyimg from "@/public/images/study.gif";
import { Avatar, AvatarGroup, Card, CircularProgress } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useUser } from '@clerk/nextjs';

interface User {
  id: string;
  profileImageUrl: string;
  fullName: string;
}

const Cover: React.FC = () => {
  const { isLoading, user } = useUser();
 


  useEffect(() => {
    AOS.init();
  }, []);

  if (isLoading ) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress disableShrink />
      </div>
    );
  }

  return (
    <Card className="mt-6 mb-4">
      <div className="lg:flex sm:grid" data-aos="fade-up">
        <div className="shadow-md p-2">
          <Image
            src={studyimg}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Picture of the author"
          />
        </div>
        <div data-aos="fade-right" className="bg-black">
          <div className="sm:px-2 px-3 mx-3 max-h-[800px] py-20 rounded-t-2xl bg-[#0c1e2f]">
            <div className="flex justify-center flex-col">
              <div className="bg-[#1F2937] mx-auto max-w-[250px] pr-3 pl-1 py-[6px] rounded-full gap-2 flex items-center text-white">
                <span className="bg-[#22C55E] sm:px-3 px-2 sm:py-1 py-[3px] sm:text-base text-sm rounded-full">
                  New
                </span>
                Lms courses added
              </div>
              <div className="mt-10">
                <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-[600px] mx-auto text-center font-extrabold">
                  Improve your Online Learning Experience Better Instantly
                </h2>
                <p className="lg:text-xl md:text-lg text-[#8896AB] mt-5 max-w-[600px] text-center mx-auto text-sm">
                  We have online course & 500k online registered. Find your desired form others.
                </p>
                <div className="mt-5 flex md:flex-row max-w-[450px] mx-auto justify-center gap-2 flex-col">
                  <div className="md:ml-auto md:mr-0 lg:w-[55%] relative">
                    <svg
                      className="absolute mt-[10px] ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.38 8.06 7.75 8.94.57.11.78-.25.78-.55v-3.06c0-.31-.22-.59-.53-.64C5.61 16.31 4 14.29 4 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6c-.34 0-.67-.04-1-.09-.31-.05-.54-.33-.54-.64v-3.07c0-.3-.21-.66.57-.59 3.43.65 6.18 3.25 6.18 6.49v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5c0-4.57-3.61-8.25-8-8.75z" />
                    </svg>
                    <input
                      placeholder="Enter your email"
                      className="pr-3 pl-8 rounded-lg w-full py-3"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="md:mr-auto md:ml-0 lg:w-[45%]">
                    <button className="bg-[#22C55E] sm:py-3 py-2 sm:text-base text-sm px-18 text-white rounded-lg h-full w-full">
                      Get Touch
                    </button>
                  </div>
                </div>
                <AvatarGroup size="sm" sx={{ '--Avatar-size': '28px' }}>
                
                    <Avatar key={user?.id} src={user?.profileImageUrl} alt={user?.fullName} />
                
                  <Avatar>+1K</Avatar>
                </AvatarGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Cover;
