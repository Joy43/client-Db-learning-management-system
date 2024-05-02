
import Image from 'next/image';
import React from 'react';
import profile from "@/public/images/professional photo.png"
{/* <iframe
        title="Embedded Content"
        src="https://660d0f1e128a30a9812c5a45--spectacular-meringue-8e0074.netlify.app/"
        width="100%"
        height="1200px"
        frameBorder="4"
        scrolling="yes"
        allowFullScreen
      ></iframe> */}
export default function About() {
  return (
    <div className=" relative  bg-[#0A0C31]">
      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div className="relative p-2 flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-[#0C1E2F]">
       

           <Image
              alt="profile"
              src={profile}
              width={300}
              height={500}
             className='bg-white w-full'
            />
            
           
            <h4 className="text-xl mt-2 font-bold uppercase text-white">Shahsultan Islam Joy</h4>
             
              <strong className='text-purple-500'>About</strong>
              <p className="text-md font-light mt-1 text-white">
              I have extensive expertise in developing websites using JavaScript, React JS, Next JS, and other front-end technologies. In the backend
As a skilled React Developer and Full Stack Web Developer, 
              </p>
          </div>
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            {/* -------------left---------- */}
            <div className="w-full  md:w-6/12 px-4 ">
               {/* ----csss----- */}
              <div className="relative p-2 bg-[#0C1E2F] flex shadow-2xl flex-col mt-4">
               
                <div className="px-4 py-5 text-white flex-auto ">
                  <div className="text-pink-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-sitemap"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                  <p className="mb-4 text-blueGray-500">
                    Notus JS comes with a huge number of Fully Coded CSS components.
                  </p>
                </div>
                
              </div>
              {/* --------js---------- */}
              <div className="relative mt-4 bg-[#0C1E2F] shadow-2xl flex flex-col min-w-0">
                <div className="px-4 py-5 text-white flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-drafting-compass"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">JavaScript Components</h6>
                  <p className="mb-4 text-blueGray-500">
                    We also feature many dynamic components for React, NextJS, Vue and Angular.
                  </p>
                </div>
              </div>
            </div>
            {/* ----------rignt side */}
            <div className="w-full md:w-6/12 px-4">
              {/* ---------Node js------ */}
              <div className="relative shadow-2xl bg-[#0C1E2F] text-white flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-newspaper"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Node js</h6>
                  <p className="mb-4 text-blueGray-500">
                    This extension also comes with 3 sample pages. They are fully coded so you can start working
                    instantly.
                  </p>
                </div>
              </div>
              {/* ------- NEXT JS------*/}
              <div className="relative mt-4 bg-[#0C1E2F] text-white shadow-2xl flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">NEXT JS</h6>
                  <p className="mb-4 text-blueGray-500">
                    Built by developers for developers. You will love how easy is to to work with Notus JS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
