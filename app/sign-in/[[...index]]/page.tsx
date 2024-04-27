import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (

    <div>
       <h1 className="text-2xl text-center mt-4 mb-2 text-white">Sign in Now & start journey </h1>
       <div className="flex justify-center mx-auto">
     
     <SignIn />
   </div>
    </div>
   
  );
}