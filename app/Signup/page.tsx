'use client';
import { Card } from '@mui/material';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import Singupstudy from "@/public/images/singupstudy.gif"
const Signup:React.FC = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className='mt-6' >
     <Card className='lg:flex sm:grid md:grid gap-4 bg-[#111827] '>\
     {/* ------------ image---- */}
<div className='w-1/2'>
     <Image  src={Singupstudy}>
</Image>
</div>

<div className='w-1/2  p-3 shadow-lg bg-[#1F2937] text-white '>

     <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
      <h1 className='text-center text-2xl'>Let's Join Us</h1>
      <div>
        <div className="mb-2 block">
         your Name
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
        Your email
        </div>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
        Your password
        </div>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
        Repeat password
        </div>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex gap-1">
         <span className='text-white '> I agree with the</span>
          <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
            terms and conditions
          </Link>
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
     </div>


     </Card>
    </div>
  );
};

export default Signup;
