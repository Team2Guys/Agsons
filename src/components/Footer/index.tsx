import React from 'react';

import Image from 'next/image';
import ReactUS from './components/react-us';
import Company from './components/company';
import Legals from './components/legals';
import QuickLinks from './components/quick-links';
import NewsLetterCard from '../newsletter-card';
const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-2 ">
      <section className="flex flex-col md:flex-row justify-between w-full mt-4 border-t-2 p-5">
        <div>
          <ReactUS />
        </div>
        <div className="mt-2 md:mt-0">
          <Company />
        </div>

        <div className="items-center md:w-1/2">
          <NewsLetterCard />
        </div>
      </section>
      <p className="bg-black text-white w-full text-center py-2 text-sm">
        Copyright 2024 Agsons. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
