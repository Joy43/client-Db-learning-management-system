'use client';

import React, { useEffect, useState } from 'react';
import CategoryFilter from './_components/CategoryFilter';
import CourseList from './_components/CourseList';
import { getCourseList } from '@/app/_services';

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [coursesOrg, setCoursesOrg] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList()
      .then(resp => {
        console.log(resp);
        setCourses(resp); 
        setCoursesOrg(resp);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  };

  const filterCourse = (category) => {
    if (category === 'all') {
      setCourses(coursesOrg);
      return;
    }
    const filteredList = coursesOrg.filter(course => {
      return course.tag && course.tag.includes(category);
    });
    setCourses(filteredList);
  };

  return (
    <div>
      <CategoryFilter selectedCategory={(category) => filterCourse(category)} />
      {courses ? <CourseList courses={courses} /> : null}
    </div>
  );
}
