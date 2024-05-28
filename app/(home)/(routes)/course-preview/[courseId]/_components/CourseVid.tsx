'use client';

import React, { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Chapter as ChapterType } from './types';

interface CourseVidProps {
  activeChapter: ChapterType;
}

function CourseVid({ activeChapter }: CourseVidProps) {
  const videoRef = useRef<ReactPlayer>(null);
console.log(activeChapter)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.seekTo(0); // Reset the player to the start
    }
  }, [activeChapter]);

  return (
    <div className='flex-grow mt-14 border bg-[#0a0c31] rounded-lg p-3'>
      {/* <h2 className='text-xl font-semibold'>{activeChapter?.name}</h2> */}
      {/* <p>{activeChapter?.video?.url}</p> */}
      <ReactPlayer
        ref={videoRef}
        url={activeChapter.youtubeUrl || activeChapter?.video?.url}
        controls
        width='100%'
        className='mt-4'
      />
    </div>
  );
}

export default CourseVid;
