'use client'
import React, { useState } from 'react'
import { FaCouch, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
export default function CategoryFilter({selectedCategory}) {
  const[activeIndex,setActiveIndex]=useState(0)
  type FilterOption={
    id:number;
    name:string;
    value:string;
    icon:any;
    
  }
  const filterOption:FilterOption[]=[
    {
      id:1,
      name:'All',
      value:'all',
      icon:FaCouch

    },
    {
      id:2,
      name:'React JS',
      value:'react',
      icon:FaReact
    },
    {
      id:3,
      name:'Next JS',
      value:'nextjs',
      icon:SiNextdotjs 

    },
    {
      id:4,
      name:'Node JS',
      value:'nodejs',
      icon:FaNodeJs

    }, {
      id:5,
      name:'Java Script',
      value:'javascript',
      icon:TbBrandJavascript
    }
  ];
  return (
    <div>
      <div className='w-fit bg-[#0A0C31]  text-white flex gap-5'>
        {filterOption.map((item,index) => (
          <button key={item.id}  className={
            `border inline-flex  items-center gap-2 p-2 px-4 rounded-md text-xl hover:border-purple-600 font-semibold 
            ${activeIndex===index?'border-purple-800 text-purple-800 bg-slate-200':null}`
          } onClick={()=>{setActiveIndex(index);selectedCategory(item.value)}}>
            <item.icon/>
            <h2>{item.name}</h2>

          </button>
        ))}
      </div>
    </div>
  )
}
