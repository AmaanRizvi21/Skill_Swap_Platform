import React from 'react'
import Link from 'next/link';
import SearchBar from '@/ui/SearchBox';

const Header = () => {
  return (
    <div>
    <header className="bg-white shadow-md px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        SkillSwap
      </Link>
      <SearchBar />

      <nav className="space-x-4 text-sm">
        <Link href="/explore" className="text-gray-700 hover:text-blue-600">
          Explore
        </Link>
        <Link href="/profile" className="text-gray-700 hover:text-blue-600">
          My Profile
        </Link>
        <Link href="/login" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
          Login
        </Link>
      </nav>
    </header>
    </div>
  )
}

export default Header