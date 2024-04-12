'use client'
import React,{FC,useState} from "react";

import ResponsiveAppBar from "./components/NavItems";


interface Props{}
const Page:FC<Props> =(props)=>{
  const [open,setOpen]=useState(false);
  const[activeItem,setActiveItem]=useState(0)
  return(
<div>

  {/* <Heading title="DB-lEARING"
  description="Elearning is a platform for student to learn and get help from teachers"
  keyword="Eearing,Next js,SS JOY,DB-LEARNING"
  >

  </Heading>
  <Header open={open}
  setOpen={setOpen}
  activeItem={activeItem}>

  </Header> */}

<ResponsiveAppBar></ResponsiveAppBar>

</div>
  )
};
export default Page;