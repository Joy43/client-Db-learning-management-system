'use client';


import ResponsiveAppBar from "./components/NavItems";
import Footer from "./components/Footer";
import Cover from "./components/cover";

import Coursesonline from "./components/Coursesonline";
import Studentsay from "./components/Studentsay";
import SuccessInfo from './components/Sucessinfo';
import Classnote from './components/classnote';
import Faq from './components/Faq';


function Page() {

 
  
  return(
<div >


<ResponsiveAppBar />
      <Cover />
      <Coursesonline />
      <Classnote />
      <Studentsay />
      <SuccessInfo />
      <Faq/>
      <Footer />

      
</div>
  )
};
export default Page;