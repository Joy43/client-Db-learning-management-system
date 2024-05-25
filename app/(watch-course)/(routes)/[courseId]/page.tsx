'use client';
import React, { useEffect, useState } from 'react';
import ChapterNav from './_components/ChapterNav';
import FullVideoPlayer from './_components/FullVideoPlayer';
import { UserButton, useUser } from '@clerk/nextjs';
import { getCourseListById } from '@/app/_services';

interface ViewCourseProps {
  params: {
    courseId: string;
  };
}

interface Chapter {
  id: string;
  name: string;
  video: {
    url: string;
  };
  youtubeUrl: string;
}

interface Course {
  chapter: Chapter[];
  description: string;
  free: boolean;
  id: string;
  name: string;
  totalChapters: number;
}

const ViewCourse: React.FC<ViewCourseProps> = ({ params }) => {
  const { user } = useUser();
  const [course, setCourse] = useState<Course | null>(null);
  const [userCourse, setUserCourse] = useState<any>(null);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

  useEffect(() => {
    if (user) {
      getCourse();
    }
  }, [user]);

  const getCourse = async () => {
    try {
      const response = await getCourseListById(params.courseId, user?.primaryEmailAddress?.emailAddress || '');
      setCourse(response.courseList);
      setUserCourse(response.userEnrollCourses);
      setActiveChapter(response.courseList.chapter[0] || null); // Set the first chapter as active by default
    } catch (error) {
      console.error('Error fetching course details:', error);
    }
  };

  return course ? (
    <div className='flex'>
      <div className='w-72 border shadow-sm bg-white h-screen z-50'>
        <ChapterNav course={course} userCourse={userCourse} setActiveChapter={setActiveChapter} />
      </div>
      <div className='flex-grow'>
        <div className='float-right p-5'>
          <UserButton />
        </div>
        <FullVideoPlayer activeChapter={activeChapter} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ViewCourse;
