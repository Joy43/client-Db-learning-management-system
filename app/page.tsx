'use client';
import 'aos/dist/aos.css';

import React,{FC,useEffect,useState} from "react";
import ResponsiveAppBar from "./components/NavItems";
import Footer from "./components/Footer";
import Cover from "./components/cover";

import Coursesonline from "./components/Coursesonline";
import Studentsay from "./components/Studentsay";
import SuccessInfo from './components/Sucessinfo';



interface Props{}
const Page:FC<Props> =(props)=>{

 
  
  return(
<div>


<ResponsiveAppBar></ResponsiveAppBar>
<Cover></Cover>
<Coursesonline></Coursesonline>
<Studentsay></Studentsay>
<SuccessInfo></SuccessInfo>
<Footer></Footer>


</div>
  )
};
export default Page;