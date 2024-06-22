'use client';
import React, { useState } from 'react';
import img from '@images/demo.jpg';
import Image from 'next/image';

type TabContent = {
  [key: string]: {
    title: string;
    description: string;
    image: any;
  };
};

const Brands: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const tabContent: TabContent = {
    tab1: {
      title: 'MONSTER SEALANT',
      description:
        'Introducing Richmond Monster Sealants, your trusted partner in superior flooring solutions...',
      image: img,
    },
    tab2: {
      title: 'NON-FORMALDEHYDE FLOORING',
      description:
        'Discover our non-formaldehyde flooring solutions for a healthier home...',
      image: img,
    },
    tab3: {
      title: 'PLUVIA FLOORING',
      description:
        'Explore the durability and elegance of Pluvia Flooring for all your flooring needs...',
      image: img,
    },
    tab4: {
      title: 'STONE TEC',
      description:
        'Experience the strength and beauty of Stone Tec in your home...',
      image: img,
    },
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            OUR BRANDS!
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            BUILDING GENERATIONS OF QUALITY, FLOORING, STONE, & MORE. A UK
            FAMILY BUSINESS SERVING YOU SINCE 2001.
          </p>
        </div>

        <div className="mt-10 overflow-y-auto overflow-hidden">
          <div className="flex flex-wrap mt-2 md:justify-evenly gap-2">
            <button
              onClick={() => setActiveTab('tab1')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full ${
                activeTab === 'tab1'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Monster Sealant
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full ${
                activeTab === 'tab2'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Non-Formaldehyde
            </button>
            <button
              onClick={() => setActiveTab('tab3')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full ${
                activeTab === 'tab3'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Pluvia Flooring
            </button>
            <button
              onClick={() => setActiveTab('tab4')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full ${
                activeTab === 'tab4'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Stone Tec
            </button>
          </div>

          <div className="mt-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
              <div className="lg:w-1/2">
                <Image
                  className="h-72 w-full object-cover sm:h-96 md:h-full lg:w-full lg:h-full"
                  width={400}
                  height={400}
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:ml-10 lg:w-1/2">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {tabContent[activeTab].title}
                </h3>
                <p className="mt-3 text-base text-gray-500 sm:mt-4">
                  {tabContent[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
