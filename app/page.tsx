'use client';
import 'aos/dist/aos.css';

import React,{FC,useEffect,useState} from "react";
import ResponsiveAppBar from "./components/NavItems";
import Footer from "./components/Footer";
import Cover from "./components/cover";

import Coursesonline from "./components/Coursesonline";
import Studentsay from "./components/Studentsay";
import SuccessInfo from './components/Sucessinfo';
import Classnote from './components/classnote';
import Faq from './components/Faq';



interface Props{}
const Page:FC<Props> =(props)=>{

 
  
  return(
<div>


<ResponsiveAppBar></ResponsiveAppBar>
<Cover></Cover>
<Coursesonline></Coursesonline>
<Classnote></Classnote>
<Studentsay></Studentsay>
<SuccessInfo></SuccessInfo>
<Faq></Faq>
<Footer></Footer>


</div>
  )
};
export default Page;