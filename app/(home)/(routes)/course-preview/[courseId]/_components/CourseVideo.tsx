'use client';
import React from 'react';
import { Chapter as ChapterType } from './types';

interface VideoPlayerProps {
  chapter: ChapterType;
}

function CourseVideo({ chapter }: VideoPlayerProps) {
  return (
    <div className='flex-1 p-5'>
      <h2 className='font-medium text-[20px]'>{chapter.name}</h2>
      <div className='mt-5'>
        <video controls className='w-full'>
          <source src={chapter.video.url} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default CourseVideo;
