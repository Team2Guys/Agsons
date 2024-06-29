import Link from 'next/link';
import React from 'react';

const Legals = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Legal</h2>
      <nav className="mb-4">
      <ul className="flex justify-around flex-col gap-1">
          <Link
            className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="/"
          >
            Privacy Policy
          </Link>
          <Link
            className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="/product"
          >
            Terms & Services
          </Link>
          <Link
            className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="#about"
          >
            Term of User
          </Link>
          <Link
            className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href={"/"}
          >
            Refund Policy
          </Link>
        </ul>
   
      </nav>
    </div>
  );
};

export default Legals;
