import { gql, request } from 'graphql-request';

const MUSTER_URL = `https://api-ap-southeast-2.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_KEY}/master`;

interface Course {
    name: string;
    banner: {
        url: string;
    };
    free: boolean;
    id: string;
    totalChapters: number;
}

interface CourseListResponse {
    courseLists: Course[];
}

export const getCourseList = async (): Promise<Course[]> => {
    const query = gql`
    query CoursesList {
        courseLists(where: {}) {
          name
          banner {
            url
          }
          free
          id
          totalChapters
          sourceCode
          
        }
      }
    `;

    try {
        const { courseLists } = await request<CourseListResponse>(MUSTER_URL, query);
        return courseLists;
    } catch (error) {
        console.error('Error fetching course list:', error);
        throw error;
    }
};
// ---------------couser list----------


export const getCourseListById = async (id: any): Promise<Course[]> => {
    const query = gql`
      query MyQuery {
        courseList(where: { id: "${id}" }) {
          chapter {
            ... on Chapter {
              id
              name
              video {
                url
              }
              youtubeUrl
            }
          }
          description
          free
          id
          name
          totalChapters
        }
      }
    `;
  
    try {
      const { courseList } = await request<CourseListResponse>(MUSTER_URL, query); // Ensure CourseListResponse is defined somewhere
      return courseList;
    } catch (error) {
      console.error('Error fetching course list:', error);
      throw error;
    }
};