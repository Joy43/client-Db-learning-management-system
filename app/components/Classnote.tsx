
import Image from 'next/image';
import React from 'react';
import Notedemo from '@/public/images/note.png';
import Link from 'next/link';
import { Button } from '@mui/material';

const Classnote: React.FC = () => {
    return (
        <div className='bg-[#17193b] text-white justify-around flex rounded-full' data-aos="fade-down-right">
            {/*---------- content------------ */}
            <div className='m-2 ml-8'>
                <div className='mt-4'>
                    <h1>Best teacher made class notes and<br /> Need lecture sheets?  </h1>
                    <br />
                    <p>  Are you ready for  study juerny</p>
                </div>
                <div className='mt-6'>
                    <Link href="/allnote" passHref>
                        <Button variant="outlined" color="error" className='flex bg-sky-400'>
                            <span>Free Download</span>
                        </Button>
                    </Link>
                </div>
            </div>
            {/*------ image---------- */}
            <div className='p-4'>
                <Image src={Notedemo} width={300} height={300} alt='Note ' />
            </div>
        </div>
    );
};

export default Classnote;
