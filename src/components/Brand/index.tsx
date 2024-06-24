'use client';
import React, { useState } from 'react';
import img from '@images/paint.jpg';
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
        'Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap inpesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      image: img,
    },
    tab2: {
      title: 'NON-FORMALDEHYDE FLOORING',
      description:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap into elctronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      image: img,
    },
    tab3: {
      title: 'PLUVIA FLOORING',
      description:
        'Explore the durabwhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap into electronic typesetti unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumility and elegance of Pluvia Flooring for all your flooring needs...',
      image: img,
    },
    tab4: {
      title: 'STONE TEC',
      description:
        'when when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumExperience the strength and beauty of Stone Tec in your home...',
      image: img,
    },
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            OUR BRANDS!
          </h2>
          <p className="mt-3 text-lg sm:mt-4">
          Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap inpesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
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
            <button
              onClick={() => setActiveTab('tab4')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full ${
                activeTab === 'tab5'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Delux Stone
            </button>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap md:flex-nowrap items-center  bg-gray-300 py-2 px-2 md:py-10 md:px-10">
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
                <h3 className="text-xl font-bold text-start">
                  {tabContent[activeTab].title}
                </h3>
                <p className="mt-3 text-xs md:text-base  sm:mt-4">
                  {tabContent[activeTab].description}
                </p>
                <div className='flex gap-2 mt-5'>
                  <button className='bg-black rounded-full text-[10px] md:text-base px-2  md:px-4 py-2 text-white'>Download Now</button>
                  <button className='bg-black rounded-full text-[10px] md:text-base px-2  md:px-4 py-2 text-white'>Read More</button>
                  <button className='bg-black rounded-full text-[10px] md:text-base px-2  md:px-4 py-2 text-white'>Visit Official Site</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
