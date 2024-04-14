'use client';
import 'aos/dist/aos.css';

import React,{FC,useEffect,useState} from "react";
import ResponsiveAppBar from "./components/NavItems";
import Footer from "./components/Footer";
import Cover from "./components/cover";

import Coursesonline from "./components/Coursesonline";
import Studentsay from "./components/Studentsay";


interface Props{}
const Page:FC<Props> =(props)=>{
  const [open,setOpen]=useState(false);
  const[activeItem,setActiveItem]=useState(0)
 
  
  return(
<div>

<ResponsiveAppBar></ResponsiveAppBar>
<Cover></Cover>
<Coursesonline></Coursesonline>
<Studentsay></Studentsay>

<Footer></Footer>

</div>
  )
};
export default Page;