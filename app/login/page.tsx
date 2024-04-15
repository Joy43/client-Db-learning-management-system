'use client';
import { Button, ButtonBase } from "@mui/material";
import { useFormik } from "formik";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Please enter email"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Login: React.FC = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const [show, setShow] = useState(false);
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  const togglePasswordVisibility = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
      <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md md:h-[90%] md:w-[80%] lg:h-[80%]">
        {/*--------- register design side ----------------- */}
       
        {/*------------- input side ----------------------------- */}
        <div className="flex w-full flex-col justify-center bg-[#0d081e] py-10 lg:w-[60%]">
          <h2 className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]">Login Here</h2>
          <form onSubmit={handleSubmit} className="flex w-full flex-col items-center justify-center gap-4">
            {/* ------------email------- */}
        <div>
        <div className="mb-2 text-white ">
         Your Email
        </div>
            <input
              className="w-[80%] rounded-lg border  lg:w-[100%] px-6 py-2 focus:outline-none md:w-[60%]"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="Enter your email"
              id="email"
            />
            {errors.email && touched.email && (
              <span className="text-red-500 pt-2 block">{errors.email}</span>
            )}
        </div>
            {/* ------------type password------------ */}
          <div>
          <div className="mb-2 text-white ">
         Your Password
        </div>
            <div 
            className="relative p-2 lg:w-[100%]  w-full text-black  rounded-lg border px-6 py-2 focus:outline-none focus:ring-2 md:w-[60%]">
              <input
                type={show ? "text" : "password"}
                onChange={handleChange}
                name="password"
                value={values.password}
              
                placeholder="password inter"
                className="w-full h-full"
              />
              {!show ? (
                <FaEyeSlash
                  className="absolute -ml-10 bg-white text-blue-500 bottom-3 right-2 z-1 cursor-pointer"
                  size={20}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <IoEye
                  className="absolute -ml-10 bg-white text-blue-500 bottom-3 text-green right-4 z-10 cursor-pointer"
                  size={20}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            {errors.password && touched.password && (
              <span className="text-red-500">{errors.password}</span>
            )}

          </div>
            <p className="text-[14px] text-gray-400">
              Do not have an account ?  
              <Link href="/Signup" passHref>
                <Button className="text-blue-500">Create account </Button>
              </Link>
            </p>
            <input
              className="w-[30%] rounded-lg bg-[#172241] px-6 py-2 font-medium text-white md:w-[50%]"
              type="submit"
            />




          </form>
          {/*------------- divider-------------  */}
 <div className="my-8 flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          {/* ------------sign with google ---------------*/}
          <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
            <div className="flex h-full w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">Sign With</div>
            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
            <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">G+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
