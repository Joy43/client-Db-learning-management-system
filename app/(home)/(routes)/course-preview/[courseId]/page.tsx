'use client';
import { useEffect, useState } from 'react';
import { getCourseListById } from '@/app/_services';
import VideoPlayer from './_components/VideoPlayer';
import CourseDeatils from './_components/CourseDeatils';

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
  const [courseDetails, setCourseDetails] = useState<CourseDetail | null>(null);

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
      {courseDetails ? (
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <VideoPlayer videoUrl={courseDetails.chapter[0]?.video.url} />
            <CourseDeatils courseDeatil={CourseDeatils}></CourseDeatils>
          </div>
          <div>
            Enroll option
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CoursePreview;
