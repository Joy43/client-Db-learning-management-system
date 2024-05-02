'use client';
import React, { useEffect, useState } from 'react'
import ChapterNav from './_components/ChapterNav';
import FullVideoPlayer from './_components/FullVideoPlayer';
import { UserButton, useUser } from '@clerk/nextjs';


function ViewCourse({params}) {
    const {user}=useUser();
const[course,setCourse]=useState([])
const[userCourse,setUserCourse]=useState()
    useEffect(()=>{
user?getCourse():null;
    },[user])

    const getCourse= async()=>{
await getCourseById(params?.courseId,
    user?.primaryEmailAddress?.emailAddress)

.then(resp=>{
    console.log(resp);
    setCourse(resp.courseList);
   setUserCourse(resp.userEnrollCourses);

})

    }

  return  course &&(
    <div className='flex'>
     <div className='w-72 boder shadow-sm bg-white h-screen z-50'>
        <ChapterNav course={course}
        userCourse={userCourse} setActivechapter={(chapter)=>setActivechapter(chapter)}></ChapterNav>
     </div>
     <div>
        <div className='float-right p-5'>
            <UserButton></UserButton>
        </div>
        <FullVideoPlayer activeChapter={activeChapter}></FullVideoPlayer>
     </div>
    </div>
  )
}

export default ViewCourse;
