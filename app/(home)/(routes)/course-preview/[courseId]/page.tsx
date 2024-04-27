
'use client'

import { getCourseListById } from "@/app/_services";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";
import CourseDetails from "./_components/CourseDeatils";
import OptionSection from "./_components/OptionSection";
import EnrollmentSection from "./_components/EnrollmentSection";


interface CourseDetail {
  chapter: {
    video: {
      url: string;
    };
  }[];
   
}
interface Course {
  userEnrollCourses?: {
    courseId: string;
  }[]; 
}

interface CoursePreviewProps {
  params: {
    courseId: string;
  };
}

function CoursePreview ({ params }) {
// const [userCourse, setUserCourse] = useState([]);
//   const [courseDetail, setCourseDetails] = useState([]);
  const [courseDetail, setCourseDetails] = useState<CourseDetail | null>(null);
  const [userCourse, setUserCourse] = useState;

  const { user } = useUser();

  useEffect(() => {
    if (params.courseId && user?.primaryEmailAddress?.emailAddress) {
      getCourseListById(params.courseId, user.primaryEmailAddress.emailAddress)
        .then((resp) => {
          setCourseDetails(resp);
          
         
          if (resp.userEnrollCourses && resp.userEnrollCourses.length > 0) {
            setUserCourse(resp.userEnrollCourses[0]);
          } else {
            setUserCourse(null);
          }
  
          console.log(resp);
        })
        .catch((error) => {
          console.error('Error fetching course:', error);
      
          console.error(error.message);
        });
    }
    console.log('userCourse:', userCourse);
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2">
          {courseDetail?.chapter[0]? 
           <VideoPlayer videoUrl={courseDetail.chapter[0]?.video.url} />:null}
            <CourseDetails courseDeatil={courseDetail}></CourseDetails>
          </div>
          {/* ---------enroll section------- */}
          <div className='mt-5'>
<OptionSection></OptionSection>
<EnrollmentSection courseDetail={courseDetail}
userCourse={userCourse}></EnrollmentSection>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoursePreview;
