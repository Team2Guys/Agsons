import React from 'react';
import img from '@images/demo.jpg';
import Image from 'next/image';
import Link from 'next/link';
const Hero: React.FC = () => {
  return (
    <div className="bg-gray-300 max-w-screen-xl mx-auto md:mt-32 flex flex-col lg:flex-row items-center pt-5 pb-5 px-10 lg:justify-between ">
      <div className="text-center lg:text-left lg:max-w-lg">
        <h1 className=" tracking-tight">
          <span className="block text-lg">WELCOME TO</span>
          <span className="block text-2xl font-bold">AGSONS MIDDLE EAST LLC</span>
        </h1>
        <p className="mt-3 text-base sm:mt-5  sm:max-w-xl md:mt-5  lg:mx-0">
          At AGSONS Middle East, we’re proud to be an extension of the UK family
          business, bringing generations of experience and excellence to the
          region.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md shadow">
            <Link
              href={"/"}
              className="w-full px-4 py-3 border border-transparent text-base font-medium rounded-full text-white bg-black "
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mt-0 lg:ml-10 w-full lg:w-1/2 flex-shrink-0">
        <Image
          className="h-72 w-full object-cover sm:h-96 md:h-full lg:w-full lg:h-full"
          src={img}
          width={400}
          height={400}
          alt="Dubai Skyline"
        />
      </div>
    </div>
  );
};

export default Hero;
