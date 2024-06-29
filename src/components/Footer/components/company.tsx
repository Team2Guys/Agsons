'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Company = () => {
  const pathName = usePathname();

  return (
    <div className="max-w-md mx-auto gap-5">
      <h2 className="text-xl font-bold mb-4">Company</h2>
      <nav className="mb-4">
        <ul className="flex justify-around flex-col gap-1">
          <Link
            className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="/product"
          >
            Product
          </Link>
          <Link
            className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href="#about"
          >
            About
          </Link>
          <Link
            className=" hover:bg-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            href={pathName === '/' ? '#faq' : '/'}
          >
            FAQs
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Company;
