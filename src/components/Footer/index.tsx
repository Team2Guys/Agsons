import React from 'react';
import logo from '@images/logo/Agsons logo.png';
import Image from 'next/image';
import ReactUS from './components/react-us';
import Company from './components/company';
import Legals from './components/legals';
import QuickLinks from './components/quick-links';
import NewsLetterCard from '../newsletter-card';
const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-2 ">
      <div className="bg-black/5 p-5 rounded-full">
        <Image src={logo} width={100} height={100} alt="log" />
      </div>
      <section className="flex flex-col md:flex-row justify-between w-full mt-4 border-t-2 p-5">
        <div className="flex flex-col items-center">
          <ReactUS />
        </div>
        <div className="flex flex-col items-center">
          <Company />
        </div>
        <div className="flex flex-col items-center">
          <Legals />
        </div>
        <div className="flex flex-col items-center">
          <QuickLinks />
        </div>
        <div className="flex flex-col items-center">
          <NewsLetterCard />
        </div>
      </section>
      <p className="bg-black text-white w-full text-center py-2">
        Copyright 2024 Agsons. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
