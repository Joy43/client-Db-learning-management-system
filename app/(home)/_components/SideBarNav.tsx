'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import iconside from '@/public/Favicon.png'
import { FaDashcube, FaPray, FaRegNewspaper, FaSearch } from 'react-icons/fa'

export default function SideBarNav() {
    const menuList = [
        {
            id: 1,
            name: 'Browser',
            icon: FaSearch,
            path: '/broswer'
        },
        {
            id: 2,
            name: 'dashboard',
            icon: FaDashcube,
            path: '/dashboard'
        },
        {
            id: 3,
            name: 'upgrade',
            icon: FaPray,
            path: '/upgrade'
        },
        {
            id: 4,
            name: 'Newsletter',
            icon: FaRegNewspaper,
            path: '/newsletter'
        }
    ]

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div>
            <div className='h-full bg-[#0C1E2F] border-r flex flex-col p-5 border overflow-auto shadow-md'>
             <div className='text-center items-center'>
             <Image src={iconside} width={80} alt='logo' height={70} />
             </div>
            
            {/* ------------menu-------- */}
            <div className='flex flex-col'>
                {menuList.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex gap-2 items-center p-4 px-6 text-zinc-200 hover:bg-blue-800 cursor-pointer ${
                            activeIndex === index ? 'bg-purple-500 text-purple-800' : ''
                        }`}
                        onClick={() => setActiveIndex(index)}
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
