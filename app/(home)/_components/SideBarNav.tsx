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
            <div className='h-full bg-white border-r flex flex-col p-5 border overflow-auto shadow-md'>
             <div className='text-center items-center'>
             <Image src={iconside} width={80} alt='logo' height={70} />
             </div>
            
            {/* ------------menu-------- */}
            <div className='flex flex-col'>
                {menuList.map((item, index) => (
                    <div
                        key={item.id}
                        className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-200 cursor-pointer ${
                            activeIndex === index ? 'bg-purple-50 text-purple-800' : ''
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
