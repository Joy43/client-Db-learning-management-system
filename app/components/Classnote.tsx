
import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import Notedemo from '@/public/images/note.png'
import { Card } from '@mui/material';
const Classnote:React.FC = () => {
    return (
        <Card className='shadow-2xl bg-[#1F2937]  text-white justify-around flex rounded-full '>
            {/*---------- content------------ */}
<div className='p-6 m-2 ml-8'>

<div className='mt-4'><h1>Best teacher made class notes and
    <br /> Need lecture sheets?</h1></div>
<div className='mt-6'><Button>Free Download </Button></div>
</div>
{/*------ image---------- */}
<div className='p-4'>
    <Image src={Notedemo}  width={300}
      height={300} alt='note demo'/>
</div>
        </Card>
    );
};

export default Classnote;