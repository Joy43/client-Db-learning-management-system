import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import errorimg from '@/public/images/errorimg.png';
import Button from '@mui/material/Button';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-6 justify-center">
        <Link href="/">
        <Button variant="contained" size="medium">
          Go Home
        </Button>
        </Link>
   
      <Image placeholder='blur' src={errorimg} alt="Error Handle" />
      
    </div>
  );
};

export default NotFound;
