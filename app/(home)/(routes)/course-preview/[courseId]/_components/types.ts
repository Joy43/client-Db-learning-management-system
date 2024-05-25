// types.ts
export interface Chapter {
    id: string;
    name: string;
    video: {
      url: string;
    };
    youtubeUrl: string | null;
  }
  
  export interface Course {
    chapter: Chapter[];
    description: string;
    free: boolean;
    id: string;
    name: string;
    totalChapters: number;
  }
  