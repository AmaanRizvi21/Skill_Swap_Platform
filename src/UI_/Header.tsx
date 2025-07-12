import Link from 'next/link';
import SearchBar from './SearchBar'; // Make sure the file path is correct

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 space-y-4 md:space-y-0 md:space-x-4 md:flex md:items-center md:justify-between">
      
      {/* Logo */}
      <div className="flex justify-between items-center">
        <Link href="/">
          <span className="text-3xl font-bold text-blue-700">SkillSwap</span>
        </Link>
      </div>

      {/* SearchBar */}
      <div className="w-full md:w-[50%]">
        <SearchBar />
      </div>

      {/* Navigation */}
      <nav className="flex space-x-4 items-center">
        <Link href="/swaprequest" className="text-blue-800 hover:text-blue-600 font-medium">
          Swap
        </Link>
        <Link href="/myprofile" className="text-blue-800 hover:text-blue-600 font-medium">
          My Profile
        </Link>
        <Link
          href="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </nav>
    </header>
  );
}
