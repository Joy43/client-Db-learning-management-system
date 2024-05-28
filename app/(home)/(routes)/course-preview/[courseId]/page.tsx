
'use client'
import CircularProgress from '@mui/material/CircularProgress';

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";
import CourseDetails from "./_components/CourseDeatils";
import OptionSection from "./_components/OptionSection";
import EnrollmentSection from "./_components/EnrollmentSection";
import { getCourseListById } from "@/app/_services";
import Chapter from "./_components/Chapter";
import Course from "./_components/Course";



interface Chapter {
  video: {
    url: string;
  };
}

interface CourseDetail {
  chapter: Chapter[];
}

interface UserEnrolledCourse {
  courseId: string;
}

interface CoursePreviewProps {
  params: {
    courseId: string;
  };
}

const CoursePreview: React.FC<CoursePreviewProps> = ({ params }) => {
  const [courseDetail, setCourseDetails] = useState<CourseDetail | null>(null);
  const [userCourse, setUserCourse] = useState< courseDetail | null>(null); // Changed userCourse type to UserEnrolledCourse
  const { user } = useUser();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (params.courseId && user?.primaryEmailAddress?.emailAddress) {
        try {
          const resp = await getCourseListById(params.courseId, user.primaryEmailAddress.emailAddress);
          setCourseDetails(resp);
          setUserCourse(resp.userEnrollCourses && resp.userEnrollCourses.length > 0 ? resp.userEnrollCourses[0] : null);
          console.log(resp);
        } catch (error) {
          console.error('Error fetching course:', error);
        }
      }
    };

    fetchCourse();

    return () => {
      // Clean up
    };
  }, [params.courseId, user]);

 


  // useEffect(()=>{
  //   params.courseId?getCourse(params.courseId):null;
  // },[params.courseId,user])

  // const getCourse=()=>{
  //   getCourseListById(params.courseId,user?.primaryEmailAddress?.emailAddress)
  //   .then(resp=>{
  //     console.log(resp);
  //     setCourseDetails(resp.courseList);
  //     setUserCourse(resp?.userEnrollCourses[0])


  //   })
  // }

  return (
    <div className="text-white">
      {courseDetail ? (
        <div className="">
<div className='grid grid-cols-2  gap-3'>
<CourseDetails courseDeatil={courseDetail}></CourseDetails> 
<OptionSection></OptionSection>

</div>
          {/* <div className="col-span-2">
          {courseDetail?.chapter[0]? 
           <VideoPlayer videoUrl={courseDetail.chapter[0]?.video.url} />:null}
            
          </div> */}
          {/* ---------enroll section------- */}
          <div className='mt-5 grid gap-4'>
<div> {}</div>
{/* <EnrollmentSection courseDetail={courseDetail}
userCourse={userCourse}></EnrollmentSection> */}

        <Course course={courseDetail}  />
        
          </div>
        </div>
      ) : (
        <CircularProgress disableShrink />
      )}
    </div>
  );
};

export default CoursePreview;
