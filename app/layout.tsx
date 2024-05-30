import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import {  Josefin_Sans } from "next/font/google";
import "./globals.css";

import {Poppins}from "next/font/google"
import Favicon from "@/public/Favicon.png"


import { ClerkProvider } from '@clerk/nextjs'



const poppins=Poppins({
  subsets:['latin'],
  weight:["400","500","700"],
  variable:"--font-Proppins"
})
const josefin=Josefin_Sans({
  subsets:['latin'],
  weight:["400","500","700"],
  variable:"--font-Josefin"
})

export const metadata: Metadata = {
  title: "DB-Learn",
  description: "this is learning manage system web application",
  icons: [{ rel: 'icon', url: Favicon.src }],
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //  className={`${poppins.variable} ${josefin} bg-gradient-to-b from-gray-900 to-black duration-300`}
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 to-black duration-300">
      
     <ClerkProvider>
     <Toaster position="top-center" />
     {children}
     </ClerkProvider>
    
   
  
          </body>
    </html>
    
  );
}
