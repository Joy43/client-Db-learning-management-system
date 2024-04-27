import { Card, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import imgsaystuent from "@/public/images/student say.gif"
import StudentFeedback from './StudentFeedback';
const Studentsay:React.FC = () => {
    return (
        
       <div className='mt-4 mb-4 p-2 bg-[#0e0c13]'>
   <Grid className=' text-white bg-black lg:flex sm:grid' >
  <Grid item xs={4}>
  <Image
      src={imgsaystuent}
      alt="Picture of the author"
     
      
     
    />
  </Grid>
  <Grid item xs={4}>
<div className='text-2xl text-center'>  <h1 className=''>Our students Are <span className='text-blue-700 '>Our Stength</span> </h1>
  <h2 className=''>See waht they say aout us</h2></div>
  <p className=' mt-4 text-lg p-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Labore est aliquid veritatis! Sit laborum veniam a beatae. 
    Animi quos pariatur quam mollitia minima. A soluta nihil 
    enim quo libero fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
   deleniti maiores soluta temporibus molestias, asperiores dolore molestiae impedit.</p>
  </Grid> 
  </Grid>
<StudentFeedback></StudentFeedback>
       </div>

      
    );
};

export default Studentsay;