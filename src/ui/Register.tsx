"use client";
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  // Password validations
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  const passwordsMatch = password === confirmPassword && password !== '';
  const isFormValid = hasUpperCase && hasNumber && hasSpecialChar && passwordsMatch;

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/user-profile-form'); // Redirect after successful register
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#B9D6F2] to-[#061A40] p-4">
      <form 
        onSubmit={handleRegister} 
        className="max-w-sm w-full bg-white/10 backdrop-blur-md border border-white/30 p-6 rounded-xl text-white shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Register to Skill Swap</h2>

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
          <ul className="mt-2 text-xs">
            <li className={hasUpperCase ? 'text-green-400' : 'text-red-400'}>
              • At least one uppercase letter
            </li>
            <li className={hasNumber ? 'text-green-400' : 'text-red-400'}>
              • At least one number
            </li>
            <li className={hasSpecialChar ? 'text-green-400' : 'text-red-400'}>
              • At least one special character
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Confirm Password</label>
          <input 
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 rounded bg-white/20 placeholder:text-gray-200 focus:outline-none"
            required
          />
          <p className={`mt-1 text-xs ${passwordsMatch ? 'text-green-400' : 'text-red-400'}`}>
            {passwordsMatch ? "Passwords match" : "Passwords do not match"}
          </p>
        </div>

        {error && <p className="text-red-400 text-xs mb-2">{error}</p>}

        <button 
          type="submit" 
          disabled={!isFormValid}
          className={`w-full py-2 rounded-full font-medium shadow-md hover:shadow-lg text-white
            ${isFormValid 
              ? 'bg-gradient-to-r from-[#0353a4] to-[#003555] hover:from-[#003555] hover:to-[#0353a4]' 
              : 'bg-gray-400 cursor-not-allowed'}`}
        >
          Register
        </button>

        <p className="mt-3 text-center text-sm">
          Already have an account? <a href="/login" className="text-blue-300 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
}