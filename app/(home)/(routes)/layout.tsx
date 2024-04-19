
import React from 'react'
import SideBarNav from '../_components/SideBarNav';
import Header from '../_components/Header';
import ResponsiveAppBar from '@/app/components/NavItems';

export default function homelayout({children}) {
  return (
    <div className='bg-black'>
        
        <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50  bg-slate-100 shadow-lg'>
    <SideBarNav></SideBarNav>
    </div>
 
    <Header></Header>
<div className='ml-64  p-5'>

{children}
</div>

    </div>

  )
}
