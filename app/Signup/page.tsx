'use client';
import { Modal } from "flowbite-react";
import { Card } from '@mui/material';
import { Button, Checkbox, Label } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import toast from "react-hot-toast";
import Singupstudy from "@/public/images/singupstudy.gif"
const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please enter email"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Signup: React.FC = () => {
  const { mutate: register, isError, data, error, isSuccess } = useRegisterMutation();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration successful";
      toast.success(message);
    }
  
    if (error) {
      const errorMessage = error?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  }, [isSuccess, error, data]);
  

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password, name }) => {
      const data = {
        name, email, password
      };
      await register(data);
    },
  });

  const [show, setShow] = useState(false);
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const togglePasswordVisibility = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className='mt-6'>
      <Card className='lg:flex sm:grid md:grid gap-4 bg-[#111827]'>
        <div className='w-1/2'>
          <Image src={Singupstudy} alt="Signup Study" />
        </div>
        <div className='w-1/2 p-3 shadow-lg bg-[#1F0D36]'>
          <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
            <h1 className='text-center text-2xl text-white'>Let's Join Us</h1>

            <div className="mb-2 text-white block">
              Your Name
            </div>
            <input
              className="w-[80%] rounded-lg border px-6 py-2 focus:outline-none md:w-[60%]"
              value={values.name}
              onChange={handleChange}
              type="text"
              id="name"
              placeholder="Enter your name"
              required
            />
            {errors.name && touched.name && (
              <span className="text-red-500 pt-2 block">{errors.name}</span>
            )}

            <div className="mb-2 text-white block">
              Your Email
            </div>
            <input
              className="w-[80%] rounded-lg border px-6 py-2 focus:outline-none md:w-[60%]"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              id="email"
            />
            {errors.email && touched.email && (
              <span className="text-red-500 pt-2 block">{errors.email}</span>
            )}

            <div className="mb-2 text-white block">
              Enter password
            </div>
            <div className="relative w-full text-black rounded-lg border px-6 py-2 focus:outline-none focus:ring-2 md:w-[60%]">
              <input
                type={show ? "text" : "password"}
                onChange={handleChange}
                name="password"
                value={values.password}
                placeholder="Enter password"
                className="w-full h-full"
              />
              {!show ? (
                <FaEyeSlash
                  className="absolute -ml-10 bg-white text-blue-500 bottom-3 right-2 z-7 cursor-pointer"
                  size={20}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <IoEye
                  className="absolute bottom-3 -ml-10 bg-white text-blue-500 right-4 z-6 cursor-pointer"
                  size={20}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            {errors.password && touched.password && (
              <span className="text-red-500">{errors.password}</span>
            )}

            <div className="flex items-center gap-2">
              <Checkbox id="agree" />
              <Label htmlFor="agree" className="flex gap-1">
                <span className='text-white '> I agree with the</span>
                {/* <Link onClick={() => setOpenModal(true)} href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  terms and conditions
                </Link> */}
              </Label>
            </div>
            <Button type="submit">Register</Button>
          </form>
          <p className="text-[18px] text-gray-400">
            Already have an account ?  
            <Link href="/login" passHref>
              <button className="text-blue-500">login account</button>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
