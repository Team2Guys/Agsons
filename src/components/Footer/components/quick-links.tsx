import Link from 'next/link';
import React from 'react';

const QuickLinks = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <nav className="mb-4">
        
        <ul className="flex justify-around flex-col text-slate-800 hover:text-slate-600">
          <li>
            <Link href="#about">Techlabz Keybox</Link>
          </li>
          <li>
            <Link href="#contact">Downloads</Link>
          </li>
          <li>
            <Link href="#blogs">Forums</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinks;
