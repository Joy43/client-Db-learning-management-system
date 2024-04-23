import React from 'react'

function VideoPlayer({videoUrl}) {
  return (
    <div className='boder bg-[#160929] rounded-lg p-3'>
    
    <h2 className='mb-3' >Couse preview</h2>
    <video width="800" height="250"
    controls controlsList='nodownload'
    >
<source 
src={videoUrl} type='video/mp4'>
</source>
    </video>
    </div>
  )
}

export default VideoPlayer
