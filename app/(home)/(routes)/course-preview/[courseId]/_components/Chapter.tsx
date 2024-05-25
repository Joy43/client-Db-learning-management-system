'use client';
import React, { useEffect, useState } from 'react';
import { FaPlay, FaPlusSquare } from 'react-icons/fa';
import { Course as CourseType, Chapter as ChapterType } from './types';

interface ChapterProps {
  course: CourseType;
  setActiveChapter: (chapter: ChapterType) => void;
}

function Chapter({ course, setActiveChapter }: ChapterProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
    setActiveChapter(course.chapter[0]);
  }, [course, setActiveChapter]);

  return (
    <div>
      <div className='border-b p-5'>
        <h2 className='font-medium text-[20px]'>{course.name}</h2>
      </div>
      <div className='w-72 border shadow-sm bg-white h-screen z-50 mt-5'>
        {course.chapter.map((chapter, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveIndex(index);
              setActiveChapter(chapter);
            }}
            className={`flex gap-2 text-gray-500 text-[16px] px-5 cursor-pointer hover:bg-gray-100 ${
              activeIndex === index ? 'bg-green-100 text-green-700' : ''
            }`}
          >
            {activeIndex === index ? <FaPlusSquare /> : <FaPlay />}
            <h2>{chapter.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chapter;
