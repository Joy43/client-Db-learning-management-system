import React from 'react';
import { FaBook } from 'react-icons/fa';

interface CourseDetailProps {
  courseDeatil: {
    name: string;
    totalChapters:number;
    description:string;
    // Add other properties here
  };
}

function CourseDetails({ courseDeatil }: CourseDetailProps) {
  console.log(courseDeatil);
  
  return (
    <div className='mt-5 p-5 rounded-xl bg-[#160929]'>
      <h1 className='text-lg font-medium'>{courseDeatil.name}</h1>
      {/* You can access other properties of courseDeatil here */}
      <div className='flex items-center text text-purple-600 gap-2 mt-2'>
        <FaBook></FaBook>
        <h2>total Chapter <span>{courseDeatil.totalChapters}</span> </h2>

      </div>
      <p className='mt-2 line-clamp-3 text-gray-400'>{courseDeatil.description}lorem
      </p>
    </div>
  );
}

export default CourseDetails;
