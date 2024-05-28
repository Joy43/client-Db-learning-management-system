import { Button } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import Notedemo from '@/public/images/note.png';
import Link from 'next/link';

const Classnote: React.FC = () => {
    return (
        <div className='bg-[#17193b] text-white justify-around flex rounded-full' data-aos="fade-down-right">
            {/*---------- content------------ */}
            <div className='m-2 ml-8'>
                <div className='mt-4'>
                    <h1>Best teacher made class notes and<br /> Need lecture sheets?</h1>
                </div>
                <div className='mt-6'>
                    <Link href="/allnote" passHref>
                        <Button className='flex'>
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
