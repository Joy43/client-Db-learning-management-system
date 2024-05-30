'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import iconside from '@/public/Favicon.png'
import {  FaHome,  FaRegNewspaper, FaSearch, FaUser } from 'react-icons/fa'
import { RiLiveFill } from "react-icons/ri";
import { useRouter } from 'next/navigation'

export default function SideBarNav() {
    const router = useRouter();
    const menuList = [
        {
            id: 1,
            name: 'User Profile',
            icon: FaUser,
            path:'users'
        },
        
        
        {
            id: 2,
            name: 'Live Class',
            icon: RiLiveFill,
            path: '/liveclass'
        },
        {
            id: 3,
            name: 'Quiz Play',
            icon: FaRegNewspaper,
            path: '/quizplay'
        },
        {
            id: 4,
            name: 'Home',
            icon: FaHome,
            path: '/'
        }
    ]
    
    const [activeIndex, setActiveIndex] = useState(null);

    const handleNavigation = (path, index) => {
        setActiveIndex(index);
        router.push(path);
    }

    return (
        <div>
            <div className='h-full bg-[#0C1E2F] flex flex-col p-5 overflow-auto shadow-md'>
                <div className='text-center ml-10 shadow-2xl items-center'>
                    <Image src={iconside} width={80} alt='logo' height={70} />
                </div>
                
                {/* ------------menu-------- */}
                <div className='flex flex-col gap-4 m-4'>
                    {menuList.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex text-lg rounded-md shadow-lg gap-3 items-center p-4 px-6 text-zinc-200 hover:bg-[#382698] cursor-pointer ${
                                activeIndex === index ? 'bg-[#003285] text-purple-800' : ''
                            }`}
                            onClick={() => handleNavigation(item.path, index)}
                        >
                            <item.icon />
                            <h2>{item.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
