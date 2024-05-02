
'use client'

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import VideoPlayer from "./_components/VideoPlayer";
import CourseDetails from "./_components/CourseDeatils";
import OptionSection from "./_components/OptionSection";
import EnrollmentSection from "./_components/EnrollmentSection";
import { getCourseListById } from "@/app/_services";


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
  const [userCourse, setUserCourse] = useState<UserEnrolledCourse | null>(null); // Changed userCourse type to UserEnrolledCourse
  const { user } = useUser();

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
