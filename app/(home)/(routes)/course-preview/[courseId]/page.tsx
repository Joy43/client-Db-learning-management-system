'use client'
import { useEffect, useState } from 'react';
import { getCourseListById } from '@/app/_services';
import VideoPlayer from './_components/VideoPlayer';
import CourseDetails from './_components/CourseDeatils';
import OptionSection from './_components/OptionSection';




interface CourseDetail {
  chapter: {
    video: {
      url: string;
    };
  }[];
}

interface CoursePreviewProps {
  params: {
    courseId: string;
  };
}

const CoursePreview: React.FC<CoursePreviewProps> = ({ params }) => {
  const [courseDetail, setCourseDetails] = useState<CourseDetail | null>(null);

  useEffect(() => {
    if (params.courseId) {
      getCourseListById(params.courseId)
        .then((resp: CourseDetail) => {
          setCourseDetails(resp);
          console.log(resp);
        })
        .catch((error) => {
          console.error('Error fetching course:', error);
        });
    }
  }, [params.courseId]);

  return (
    <div className="text-white">
      {courseDetail ? (
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <VideoPlayer videoUrl={courseDetail.chapter[0]?.video.url} />
            <CourseDetails courseDeatil={courseDetail}></CourseDetails>
          </div>
          {/* ---------enroll section------- */}
          <div className='p-5'>
<OptionSection></OptionSection>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoursePreview;
