import { Chapter as ChapterType } from './types';

interface VideoPlayerProps {
  chapter: ChapterType;
}

import React from 'react'

function CourseVid({ chapter }: VideoPlayerProps) {
  return (
    <div>
       <div className='border bg-[#0a0c31] rounded-lg p-3'>
      <h2 className='mb-3'>Course preview</h2>
      <video width="800" height="250" controls controlsList='nodownload'>
        <source src={chapter.video.url} type='video/mp4' />
        <track
          src="/public/subtitle/sample.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
    </div>
    </div>
  )
}

export default CourseVid
