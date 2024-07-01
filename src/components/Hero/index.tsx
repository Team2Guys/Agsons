import React from 'react';
import img from '@images/demo.jpg';
import Image from 'next/image';
import Link from 'next/link';
import Home from "@images/Homepage Banner.png"
const Hero: React.FC = () => {
  return (
    <div className="bg-primary max-w-screen-xl mx-auto mt-20 md:mt-32 flex flex-col lg:flex-row items-center pt-5 pb-5 px-2 md:px-10 lg:justify-between ">
      <div className="text-center lg:text-left lg:max-w-lg">
        <h1 className=" tracking-tight">
          {/* <span className="block text-lg">WELCOME TO</span> */}
          <span className="block text-base md:text-2xl font-bold">Agsons is a family run business supplying exclusive products to the property development industry</span>
        </h1>
        <p className="mt-3 text-sm sm:mt-5  sm:max-w-xl md:mt-5  lg:mx-0">
        Agsons offers top-quality building materials, speedy delivery, and unbeatable prices. Consolidate your sourcing with us and find everything you need in one place.
        </p>
       
      </div>
      <div className="mt-10 lg:mt-0 lg:ml-10 w-full lg:w-1/2 flex-shrink-0">
        <Image
          className="h-full w-full object-cover sm:h-96 md:h-full lg:w-full lg:h-full"
          src={Home}
          width={500}
          height={500}
          alt="Home"
          loading='lazy'
        />
      </div>
    </div>
  );
};

export default Hero;
