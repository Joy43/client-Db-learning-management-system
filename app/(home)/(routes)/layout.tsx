
import React from 'react'
import SideBarNav from '../_components/SideBarNav';
import Header from '../_components/Header';



export default function homelayout({children}) {
  return (

    <div className='bg-black'>
        
        <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50  bg-[#0C1E2F] shadow-lg'>
    <SideBarNav></SideBarNav>
    </div>
 
    <Header></Header>
<div className='ml-64  p-5'>


{children}

</div>

    </div>


  )
}
