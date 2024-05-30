import { AppBuildManifestPlugin } from 'next/dist/build/webpack/plugins/app-build-manifest-plugin';
import React from 'react'
import SideAdminNav from './_components/sideAdminNav';
import { Toaster } from 'react-hot-toast';

function adminlayout({children}) {
  return (
    <div>
      <div className='h-full w-64 flex flex-col fixed inset-y-0 z-50  bg-[#0c1f30] shadow-lg'>
      <SideAdminNav></SideAdminNav>

      </div>

  
     <div className="m-4 ml-[258px] p-5"   >
     <Toaster position="top-center" />
     {children}
     </div>
    </div>
  )
}

export default adminlayout;
