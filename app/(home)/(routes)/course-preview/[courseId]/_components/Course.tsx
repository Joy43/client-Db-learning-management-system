'use client';
import  { useState } from 'react';
import Chapter from './Chapter';


import { Course as CourseType, Chapter as ChapterType } from './types';
import CourseVid from './CourseVid';

interface CourseProps {
  course: CourseType;
}


function Course({ course }: CourseProps) {
    const [activeChapter, setActiveChapter] = useState<ChapterType>(course.chapter[0]);

  return (
    <div className='grid'>
      <Chapter course={course} setActiveChapter={setActiveChapter} />
<CourseVid  chapter={activeChapter}></CourseVid>
    </div>
  );
}

export default Course;
