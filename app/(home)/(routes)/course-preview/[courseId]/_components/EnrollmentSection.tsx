import { EnrollCourse, PublishCourse } from "@/app/_services";
import React from "react";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface CourseDetailProps {
  courseDetail?: {
    free: boolean;
    id: string; // Assuming id is a string, adjust as needed
  };
  user?: {
    primaryEmailAddress?: {
      emailAddress?: string;
    };
  };
  userCourse?: any; // Add this line to define the userCourse property
}


function EnrollmentSection({ courseDetail, userCourse }: CourseDetailProps) {
  
  const { user } = useUser();
  const router = useRouter();

  console.log(courseDetail);
  console.log(userCourse);
 
  //  ------------enroll course-------------
  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(courseDetail.id, user?.primaryEmailAddress?.emailAddress)
        .then(async (resp) => {
          console.log("EnrollCourseResp=>", resp);
          if (resp) {
            await PublishCourse(resp?.createUserEnrollCourse?.id)
              .then(result => {
                console.log(result);
                if (result) {
                  router.push('/view-course/' + courseDetail.id);
                }
              });
          }
        });
    } else {
      router.push('/sign-in');
    }
  };

  return (
    <div>
      {userCourse && userCourse.courseId ? (
        <div>
          <h2>Learn and continue building project</h2>
          <button
            onClick={() => router.push('/view-course/' + courseDetail.id)}
            className="p-2 rounded-lg w-full text-center bg-purple-500 mb-2 hover:bg-black"
          >
            Continue
          </button>
        </div>
      ) : null}

      {!userCourse && courseDetail && courseDetail.free ? (
        <div>
          <h2>Start your Journey</h2>
          <button
            onClick={enrollCourse}
            className="p-2 rounded-lg w-full text-center bg-purple-500 mb-2 hover:bg-black"
          >
            Enroll Now
          </button>
        </div>
      ) : null}

      {!userCourse && !courseDetail.free ? (
        <div className="grid gap-2">
          <div className="shadow-md bg-[#262e75] rounded-md p-2">
            <h2>Buy monthly offer. Everything can be accessed.</h2>
            <button className="p-2 rounded-lg w-full text-center bg-purple-500 mt-2 hover:bg-black">
              $1.5/month
            </button>
          </div>
          <div className="shadow-md bg-[#262e75] rounded-md p-2 hover:bg-black">
            <h2>Buy Yearly offer. Everything can be accessed.</h2>
            <button className="p-2 rounded-lg w-full text-center bg-purple-500 mt-2 hover:bg-black">
              $4.5/year
            </button>
          </div>
          <div className="shadow-md bg-[#262e75] rounded-md p-2">
            <h2>Buy Membership. Everything can be accessed.</h2>
            <button className="p-2 rounded-lg w-full text-center bg-purple-500 hover:bg-black mt-2">
              Membership $4.5/month
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default EnrollmentSection;
