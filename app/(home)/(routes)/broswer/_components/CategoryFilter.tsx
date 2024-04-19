'use client'
import React, { useState } from 'react'

export default function CategoryFilter() {
  const[activeIndex,setActiveIndex]=useState(0)
  type FilterOption={
    id:number;
    name:string;
    value:string;
    
  }
  const filterOption:FilterOption[]=[
    {
      id:1,
      name:'All',
      value:'all'
    },
    {
      id:2,
      name:'React JS',
      value:'react'
    },
    {
      id:3,
      name:'Next JS',
      value:'nextjs'
    },
    {
      id:4,
      name:'Node JS',
      value:'nodejs'
    }, {
      id:5,
      name:'C++ Progrm',
      value:'cplus'
    }
  ];
  return (
    <div>
      <div className='w-full text-white flex gap-5'>
        {filterOption.map((item,index) => (
          <button key={item.id}  className={
            `border p-2 px-4 rounded-md text-xl hover:border-purple-600 font-semibold 
            ${activeIndex===index?'border-purple-800 text-purple-800 bg-slate-200':null}`
          } onClick={()=>setActiveIndex(index)}>
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  )
}
