import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

function FullVideoPlayer({activeChapter}) {
  console.log(activeChapter)
  return (
    <div className='p-5'>
      <video width="1000" height="250" controls controlsList='nodownload'>
        <source src={activeChapter?.video?.url} type='video/mp4' />
        <track
          src="/public/subtitle/sample.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
      </video>
      <div className='p-5 border rounded-lg mt-5 flex justify-center items-center'>
        <h2>{activeChapter.name}</h2>
        <button className='bg-purpul-500 text-white rounded-lg bg-purple-500'>
        <FaCheckCircle></FaCheckCircle> <h2>Mark as complete</h2>
      </button>
      </div>
     
    </div>
  )
}

export default FullVideoPlayer
