import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  label: string;
  href: string; // new prop to specify where the button should link
}

const Button: React.FC<ButtonProps> = ({ label, href }) => {
  return (
    <div>
      <Link href={href}>
        <button 
          type="button" // type="button" since it acts as a link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm w-40 px-5 py-2
          text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {label}
        </button>
      </Link>
    </div>
  );
};

export default Button;
