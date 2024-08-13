"use client";

import React, { useState } from "react";

const Login = () => {
  const [errorFake, setErrorFake] = useState(false);

  const handleClick = () => {
    setErrorFake(!errorFake);

    setTimeout(() => {
      setErrorFake(false);
    }, 3000);
  };

  return (
    <div className=" flex justify-center items-center h-screen">
      {/*     <!-- Left: Image --> */}
      <div className="w-1/2 h-screen hidden lg:block ">
        <img
          src="/assets/image/CarouselHeroImgs/img2.webp"
          alt="Placeholder Image"
          className="object-cover w-full h-full "
        />
      </div>
      {/* <!-- Right: Login Form --> */}
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2  relative">
        <div className=" w-full hidden lg:flex justify-center items-center relative h-[8rem] mt-[-3rem]">
          <img
            src="/assets/image/logo.svg"
            alt="Placeholder Image"
            className="object-cover absolute  top-[0rem] w-[30rem]  "
          />
        </div>

        <h1 className="text-2xl font-semibold mb-4 ">Login</h1>
        <div>
          {/* <!-- Username Input --> */}
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full border text-black border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {errorFake && (
              <p className="text-red-500 text-xs mt-1">Invalid Username</p>
            )}
          </div>
          {/*  <!-- Password Input --> */}
          <div className="mb-8">
            <label className="block text-gray-300 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full text-black border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
            {errorFake && (
              <p className="text-red-500 text-xs mt-1">Invalid Password</p>
            )}
          </div>
          {/*   <!-- Remember Me Checkbox --> */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="text-blue-500"
            />
            <label className="text-gray-300 ml-2">Remember Me</label>
          </div>
          {/*  <!-- Forgot Password Link --> */}
          {/* <div className="mb-6 text-blue-500">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
          </div> */}
          {/* <!-- Login Button --> */}
          <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
