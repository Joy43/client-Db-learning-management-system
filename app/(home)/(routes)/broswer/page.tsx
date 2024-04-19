'use client';
import { getCourseList } from '@/app/_services';
import React, { useEffect, useState } from 'react';
import CategoryFilter from './_components/CategoryFilter';
import CourseList from './_components/CourseList';



export default function Page() {
  const[courses,setCourses]=useState([])
  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList()
    getCourseList()
    .then(resp => {
      console.log(resp);
      setCourses(resp); 
    })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  };

  return (
    <div>
      <CategoryFilter />
  {courses? <CourseList courses={courses} ></CourseList>:null}
    </div>
  );
}
