import React from 'react';

const Company = () => {
  return (
    <div className="max-w-md mx-auto gap-5">
      <h2 className="text-xl font-bold mb-4">Company</h2>
      <nav className="mb-4">
        <ul className="flex justify-around flex-col text-slate-800 hover:text-slate-600 gap-5">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#blogs">Blogs</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Company;
