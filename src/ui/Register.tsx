"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password === confirmPassword && password !== "";

  const isFormValid = hasUpperCase && hasNumber && hasSpecialChar && passwordsMatch;

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
          <label htmlFor="password" className="block mb-2 text-sm font-medium">New password</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-3 focus:bg-white/30 focus:outline-none placeholder:text-gray-200"
            required 
          />
          <ul className="mt-2 text-xs">
            <li className={hasUpperCase ? 'text-green-400' : 'text-red-400'}>• At least one uppercase letter</li>
            <li className={hasNumber ? 'text-green-400' : 'text-red-400'}>• At least one number</li>
            <li className={hasSpecialChar ? 'text-green-400' : 'text-red-400'}>• At least one special character</li>
          </ul>
        </div>

        <div className="mb-5">
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium">Confirm password</label>
          <input 
            type="password" 
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-white/20 border border-white/30 text-white text-sm rounded-lg block w-full p-3 focus:bg-white/30 focus:outline-none placeholder:text-gray-200"
            required 
          />
          <p className={`mt-1 text-xs ${passwordsMatch ? 'text-green-400' : 'text-red-400'}`}>
            {passwordsMatch ? "Passwords match" : "Passwords do not match"}
          </p>
        </div>

        <div className="flex items-center mb-5">
          <input 
            id="remember" 
            type="checkbox" 
            className="w-4 h-4 rounded border-white/30 bg-white/10 focus:ring-2 focus:ring-white/30"
            required 
          />
          <label htmlFor="remember" className="ms-2 text-sm">Remember me</label>
        </div>

        <Link href="/user-profile-form" passHref>
  <button 
    type="button"  // type="button" to prevent form submit
    disabled={!isFormValid}
    className={`w-full py-2 rounded-full font-medium shadow-md hover:shadow-lg text-white
      ${isFormValid 
        ? 'bg-gradient-to-r from-[#0353a4] to-[#003555] hover:from-[#003555] hover:to-[#0353a4]' 
        : 'bg-gray-400 cursor-not-allowed'}`}
  >
    Register to Skill Swap
  </button>
</Link>

        <h1 className='font-semibold flex justify-center items-center mt-4 mb-2'>OR</h1>

        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2 w-full flex items-center justify-center"
        >
          <svg
            className="w-4 h-4 mr-2"
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

        <Link href="/login">
          <h3 className='flex justify-center items-center mt-3 text-blue-300 hover:underline cursor-pointer'>
            Already have an account?
          </h3>
        </Link>
      </form>
    </div>
  );
};

export default Register;