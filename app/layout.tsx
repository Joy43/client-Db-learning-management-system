import type { Metadata } from "next";
import {  Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils/Theme-provider";
import {Poppins}from "next/font/google"
import ResponsiveAppBar from "./components/NavItems";


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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${josefin} bg-gradient-to-b from-gray-900 to-black duration-300`}>
        {/* <ThemeProvider attribute="class" defaultTheme="system"enableSystem> */}
      
        {children}
  
          {/* </ThemeProvider> */}
          </body>
    </html>
  );
}
