import React from 'react';

const QuickLinks = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Quick Links</h2>
      <nav className="mb-4">
        <ul className="flex justify-around flex-col text-slate-800 hover:text-slate-600">
          <li>
            <a href="#about">Techlabz Keybox</a>
          </li>
          <li>
            <a href="#contact">Downloads</a>
          </li>
          <li>
            <a href="#blogs">Forums</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default QuickLinks;
