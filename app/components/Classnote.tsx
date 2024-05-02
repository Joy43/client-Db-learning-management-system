
import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import Notedemo from '@/public/images/note.png'

const Classnote:React.FC = () => {
    return (
        <div className='  bg-[#17193b] text-white justify-around 
        flex rounded-full' data-aos="flip-left">
            {/*---------- content------------ */}
<div className=' m-2 ml-8'>

<div className='mt-4'><h1>Best teacher made class notes and
    <br /> Need lecture sheets?</h1></div>
<div className='mt-6'><Button>Free Download </Button></div>
</div>
{/*------ image---------- */}
<div className='p-4'>
    <Image src={Notedemo}  width={300}
      height={300} alt='Note '/>
</div>
        </div>
    );
};

export default Classnote;