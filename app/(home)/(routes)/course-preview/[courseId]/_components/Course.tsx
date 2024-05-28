'use client';

import { useState, useEffect } from 'react';
import Chapter from './Chapter';
import CourseVid from './CourseVid';
import { Course as CourseType, Chapter as ChapterType } from './types';

interface CourseProps {
  course: CourseType;
}

function Course({ course }: CourseProps) {
  const [activeChapter, setActiveChapter] = useState<ChapterType>(course.chapter[0]);

  useEffect(() => {
    console.log('Active Chapter:', activeChapter);
  }, [activeChapter]);

  return (
    <div className='flex gap-4'>
      <Chapter course={course} setActiveChapter={setActiveChapter} />
      <CourseVid activeChapter={activeChapter} />
    </div>
  );
}

export default Course;
