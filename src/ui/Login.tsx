"use client";
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');  // redirect after login
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="">
      <form 
        onSubmit={handleLogin} 
        className="max-w-sm mx-auto"
      >
        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-white/20 placeholder:text-gray-200 focus:outline-none"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-white/20 placeholder:text-gray-200 focus:outline-none"
            required
          />
        </div>

        {error && <p className="text-red-400 text-xs mb-2">{error}</p>}

        <button 
          type="submit" 
          className="w-full py-2 rounded-full bg-gradient-to-r from-[#0353a4] to-[#003555] hover:from-[#003555] hover:to-[#0353a4] font-medium shadow-md hover:shadow-lg"
        >
          Login
        </button>

        <p className="mt-3 text-center text-sm">
          Don't have an account? <a href="/register" className="text-blue-300 hover:underline">Register</a>
        </p>
      </form>
    </div>
  );
}