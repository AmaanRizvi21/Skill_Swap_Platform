import Login from '@/ui/Login';
import Register from '@/ui/Register';
import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B9D6F2] to-[#061A40] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 border border-white/30 backdrop-blur-md rounded-2xl p-6 shadow-xl">
        <h1 className="text-center text-2xl font-semibold text-white mb-6">Register to Skill Swap</h1>
        <Register />
      </div>
    </div>
  );
};

export default Page;