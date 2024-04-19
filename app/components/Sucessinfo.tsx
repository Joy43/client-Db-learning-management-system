
import React from 'react';
import success from '@/public/images/sucess.png'; 
import Image from 'next/image';
import CountUp from 'react-countup';
const SuccessInfo: React.FC = () => {
    return (
         <div className="bg-gray-800  flex items-center justify-center">
            <div className="bg-[#0a0c31] justify-center items-center max-w-max text-white p-8 rounded-lg shadow-md">
                {/* <div className="relative">
                <Image src="https://i.ibb.co/hFYPj2k/sucess.png" layout="fill"
                 objectFit="cover" objectPosition="center" />

                </div> */}
                <h1 className="text-2xl text-center  font-extrabold mt-4">
                    DB Learn for 2021-2024 academic Year Success
                </h1>
                <br />
                <h2 className=" font-semibold text-2xl text-center">
                    Your success is our Inspiration
                </h2>
                {/* ---------count--------- */}
                <div className='flex mt-6 gap-3 justify-around'>
                <div className=' shadow-2xl bg-slate-800 p-2 w-40  border-y-cyan-100'>
                  {/* total student  */}
                <CountUp start={0} end={8800}>
  {({ countUpRef, start }) => (
    <div>
      <span className='text-4xl ml-4 text-center font-extrabold text-blue-500' ref={countUpRef} />
      <br />
      <button className='text-xl' onClick={start}>Total student</button>
    </div>
  )}
</CountUp>
                </div>
                {/* -------- sucess ful student------- */}
                <div className='shadow-2xl bg-slate-800 p-2 w-40 h-24 border-y-cyan-100'>
                <CountUp start={0} end={1200}>
  {({ countUpRef, start }) => (
    <div>
      <span className='text-4xl ml-4 text-center font-extrabold text-blue-500' ref={countUpRef}  />
      <span className='text-5xl ml-1 text-center font-extrabold text-blue-500'>+</span>
      <br />
      <button onClick={start}>Sucessful students</button>
    </div>
  )}
</CountUp>
                </div>
{/* --------to noice------ */}

<div className='shadow-2xl bg-slate-800 p-2 w-40 h-24 border-y-cyan-100'>
                <CountUp start={0} end={200}>
  {({ countUpRef, start }) => (
    <div>
      <span className='text-4xl ml-5 text-center font-extrabold text-blue-500' ref={countUpRef} />
      <br />
      <button onClick={start}>Top performance students</button>
    </div>
  )}
</CountUp>
                </div>

                </div>
            </div>
      </div>
    );
};

export default SuccessInfo;
