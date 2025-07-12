"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [password, setPassword] = useState("");
  const userName = "john"; // replace with actual name if you want

  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const containsName = password.toLowerCase().includes(userName.toLowerCase());

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
          <input 
            type="email" 
            id="email" 
            className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-3 focus:bg-white/30 focus:outline-none placeholder:text-gray-200"
            placeholder="name@example.com" 
            required 
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input 
            type="password" 
            id="password" 
            className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-3 focus:bg-white/30 focus:outline-none placeholder:text-gray-200"

            required 
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input 
              id="remember" 
              type="checkbox" 
              value="" 
              className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 
              focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 
              dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
              required 
            />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Remember me
          </label>
        </div>
        <div className='flex justify-center'>
        <button 
  type="submit" 
  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
  focus:ring-blue-300 font-medium rounded-lg text-sm w-80 px-5 py-2
  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  Login to Skill Swap
</button>
<hr className=''/>

        </div>
      </form>
      <h1 className='font-semibold flex justify-center items-center mt-3 mb-2'>OR</h1>
      <div className='flex justify-center '>
      <button
  type="button"
  className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mb-2 mt-2 w-80 flex items-center justify-center"
>
  <svg
    className="w-4 h-4 me-2"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 18 19"
  >
    <path
      fillRule="evenodd"
      d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
      clipRule="evenodd"
    />
  </svg>
  Sign in with Google
</button>
      </div>
      <div>
  <Link href="/register">
    <h3 className='flex justify-center items-center mt-3 text-blue-500 cursor-pointer hover:underline'>
      Don't have an account
    </h3>
  </Link>
</div>
    </div>
  );
};

export default Login;
