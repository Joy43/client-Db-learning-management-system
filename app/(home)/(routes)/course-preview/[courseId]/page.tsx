'use client'
import { useEffect, useState } from 'react';
import { getCourseListById } from '@/app/_services';
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDeatils';
import OptionSection from './_components/OptionSection';

import { useUser } from '@clerk/nextjs';
import EnrollmentSection from './_components/EnrollmentSection';

interface CourseDetail {
  chapter: {
    video: {
      url: string;
    };
  }[];
  userEnrollCourse?: {
    courseId: string;
  }[]; // Define userEnrollCourse as an array of objects with courseId property
}


interface CoursePreviewProps {
  params: {
    courseId: string;
  };
}

const CoursePreview: React.FC<CoursePreviewProps> = ({ params }) => {
  // const [courseDetail, setCourseDetails] = useState<CourseDetail | null>(null);
  // const [courseDetail, setCourseDetails] = useState([])
  const [courseDetail, setCourseDetails] = useState<CourseDetail | null>(null);
  const [userCourse, setUserCourse] = useState<CourseDetail['userEnrollCourse'][0] | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (params.courseId && user?.primaryEmailAddress?.emailAddress) {
      getCourseListById(params.courseId, user?.primaryEmailAddress?.emailAddress)
        .then((resp: CourseDetail) => {
          setCourseDetails(resp);
          
          // Check if userEnrollCourse exists and is not empty
          if (resp.userEnrollCourse && resp.userEnrollCourse.length > 0) {
            setUserCourse(resp.userEnrollCourse[0]);
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
  //   params.courseId?getCourseListById(params.courseId):null;
  // },[user])
  // const getCourse=()=>{
  //   getCourse(params.courseId,user?.primaryEmailAddress?.emailAddress)
  //   .then(resp=>{
  //     console.log(resp);
  //     setCourseDetails(resp.courseList);

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
