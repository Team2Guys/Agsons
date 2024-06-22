import React from 'react';

const Legals = () => {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Legal</h2>
      <nav className="mb-4">
        <ul className="flex justify-around flex-col text-slate-800 hover:text-slate-600">
          <li>
            <a href="#about">Privacy Policy</a>
          </li>
          <li>
            <a href="#contact">Terms & Services</a>
          </li>
          <li>
            <a href="#blogs">Term of User</a>
          </li>
          <li>
            <a href="#blogs">Refund Policy</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Legals;
