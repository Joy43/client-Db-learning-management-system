'use client';

import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoStopCircle } from "react-icons/io5";
import { Course as CourseType, Chapter as ChapterType } from './types';


interface ChapterProps {
  course: CourseType;
  setActiveChapter: (chapter: ChapterType) => void;
}

function Chapter({ course, setActiveChapter }: ChapterProps) {
  const [activeIndex, setActiveIndex] = useState(0);
console.log(course)
  useEffect(() => {
    setActiveIndex(0);
    setActiveChapter(course.chapter[0]);
  }, [course, setActiveChapter]);

  const handleChapterClick = (chapter: ChapterType, index: number) => {
    setActiveIndex(index);
    setActiveChapter(chapter);
  };

  return (
    <div className='grid'>
      <div className="border-b p-5">
        <h2 className="font-medium text-[20px]">{course.name}</h2>
      </div>
      <div className="w-72 border shadow-sm bg-[#160929] h-screen z-50 mt-5">
        {course.chapter.map((chapter, index) => (
          <div
            key={index}
            onClick={() => handleChapterClick(chapter, index)}
            className={`flex m-4 h-12 shadow-md rounded-md items-center  gap-2 text-gray-400 text-[16px] px-5 cursor-pointer hover:bg-[#0C1E2F] ${
              activeIndex === index ? 'bg-[#211336] text-white' : ''
            }`}
          >
         
       {activeIndex === index ? <IoStopCircle /> : <FaPlay />}
           <div> <h2>{chapter.name}</h2></div>
         
          </div>
        ))}
      </div>

    </div>
  );
}

export default Chapter;
