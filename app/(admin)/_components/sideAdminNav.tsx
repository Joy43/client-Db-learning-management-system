'use client'
import { useUser } from '@clerk/nextjs';
import { Divider } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { MdAdminPanelSettings } from 'react-icons/md';
import { RiLiveFill } from "react-icons/ri";
import { MdQuiz } from "react-icons/md";
export default function SideAdminNav() {
    const { user } = useUser();
    const [activeIndex, setActiveIndex] = useState(null);
    const router = useRouter();

    const menuAdminList = [
        {
            id: 1,
            name: 'Admin profile',
            icon: MdAdminPanelSettings,
            path: '/admin-profile'
        },
        {
            id: 2,
            name: 'Add Live class',
            icon: RiLiveFill,
            path: '/addliveclass' 
        },
        {
            id: 3,
            name: 'Add quiz',
            icon: MdQuiz,
            path: '/addquiz' 
        },
        {
            id: 4,
            name: 'Home',
            icon: FaHome,
            path: '/'
        }
    ];

    const handleNavigation = (path, index) => {
        setActiveIndex(index);
        router.push(path);
    };

    return (
        <div className=" h-full bg-[#0c1f30] rounded-sm flex flex-col overflow-auto p-3">
          <div className='flex gap-2 items-center mx-auto'>
<MdAdminPanelSettings className='text-sky-300 text-xl'></MdAdminPanelSettings>
<h1 className='text-lg text-white font-semibold'>AdminPress</h1>
          </div>
            <div className='mx-auto m-4 text-white'>
                <Image className='w-16 h-16 rounded-full items-center justify-cente' src={user?.profileImageUrl} alt="User Profile" width={50} height={50} />
                <h1>Admin Name:-{user?.fullName}</h1>
            </div>
            {/* --------menu------ */}
            <Divider className='bg-blue-500'></Divider>
            <div className="flex m-4 gap-3 text-lg flex-col mt-4">
                {menuAdminList.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex gap-2 items-center p-4 px-6 text-zinc-200 hover:bg-teal-950 cursor-pointer ${
                            activeIndex === index ? 'bg-purple-800 text-purple-800' : ''
                        }`}
                        onClick={() => handleNavigation(item.path, index)}
                    >
                        <item.icon className='text-xl' />
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
