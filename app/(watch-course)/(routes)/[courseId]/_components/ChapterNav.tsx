import React, { useEffect, useState } from 'react'
import { FaPlay, FaPlusSquare } from 'react-icons/fa'

function ChapterNav({course,userCourse,setActivechapter}) {
    console.log(course)
    const [activeIndex,setActiveIndex]=useState(0);
    useEffect(()=>{
      setActiveIndex(course?.chapter[0])
    },[])
  return (
    <div>
  <div>
    <div className='border-b p-5'>
        <h2 className='font-medium text-[20px]'>
          {course.name}  
        </h2>
       
    </div>
    <div>
      {course.chapter.map((chapter,index)=>{
        <div key={index}
        onClick={()=>{setActiveIndex(index);setActiveIndex(chapter)}}
        className={
          `flex gap-2 text-gray-500 text-[16px] px-5 cursor-pointer
          hover:bg-gray-100 ${activeIndex==index?'bg-green-100  text-green-700':null}`
        }>
         {
          activeIndex==index?<FaPlusSquare></FaPlusSquare>:<FaPlay></FaPlay>
         } 

<h2>{chapter.name}</h2>

        </div>
      })}
    </div>
  </div>
    </div>
  )
}

export default ChapterNav
