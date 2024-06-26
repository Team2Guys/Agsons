'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dulux from '@images/logo/Dulux logo.png';
import Monster from '@images/logo/Monster logo.png';
import Polar from '@images/logo/Polar logo.png';
import Richmond from '@images/logo/Richmond logo.png';
import Sintrich from '@images/logo/Sintrich logo.png';
import rich from "@/assets/images/Richmond Flooring.png"
import monst from "@/assets/images/Monster.png"
import pol from "@/assets/images/Polar.png"
import sint from "@/assets/images/Sintrich.png"
import dux from "@/assets/images/DULUX .png"


type TabContent = {
  [key: string]: {
    title: string;
    description: string;
    image: any;
    downloadlink?: any;
    websitelink?: any
  };
};

const Brands: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const tabContent: TabContent = {
    tab1: {
      title: 'Richmond Flooring',
      description:
        'Lorem Ipsum when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap inpesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      image: rich,
      downloadlink: "/assets/Richmond.pdf",
      websitelink:"https://richmondflooring.ae/ae-en"
    },
    tab2: {
      title: 'Sintrich Stone',
      description:
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap into elctronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      image: sint,
      downloadlink: "/assets/SINTRICH.pdf",
      websitelink:"https://sintrich.com/ae-en"

    },
    tab3: {
      title: 'Polar Flooring',
      description:
        'Explore the durabwhen an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap into electronic typesetti unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumility and elegance of Pluvia Flooring for all your flooring needs...',
      image: pol,
      downloadlink: "/assets/Polar.pdf",
      websitelink:"https://polarfloors.co.uk/"
    },
    tab4: {
      title: 'Monster Sealent',
      description:
        'when when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumExperience the strength and beauty of Stone Tec in your home...',
      image: monst,
      downloadlink: "/assets/Monster.pdf",
      websitelink:"https://monstersealant.com/"
    },
    tab5: {
      title: 'Delux Paint',
      description:
        'when when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ha survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumExperience the strength and beauty of Stone Tec in your home...',
      image: dux,
      downloadlink: "/assets/Dulux.pdf",
      websitelink:"https://www.dulux.co.uk/en"
    },
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
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
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full uppercase ${
                activeTab === 'tab1'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Richmond Flooring
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full uppercase ${
                activeTab === 'tab2'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              SINTRICH Stone
            </button>
            <button
              onClick={() => setActiveTab('tab3')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full uppercase ${
                activeTab === 'tab3'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Polar Flooring
            </button>
            <button
              onClick={() => setActiveTab('tab4')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full uppercase ${
                activeTab === 'tab4'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Monster Sealent
            </button>
            <button
              onClick={() => setActiveTab('tab5')}
              className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full uppercase ${
                activeTab === 'tab5'
                  ? 'bg-black text-white'
                  : 'bg-white  text-black'
              }`}
            >
              Delux Paint
            </button>
          </div>
 
          <div className='grid grid-cols-3  md:grid-cols-5 justify-items-center mt-5 max-w-screen-md mx-auto'>
                  {Object.keys(tabContent).map((tab, index) => (
                    <Image
                      key={index}
                      className={`border-b-2 ${activeTab === tab ? 'border-black' : 'border-transparent'}`}
                      width={100}
                      height={100}
                      src={tab === 'tab1' ? Richmond : tab === 'tab2' ? Sintrich : tab === 'tab3' ? Polar : tab === 'tab4' ? Monster : Dulux}
                      alt={tab === 'tab1' ? 'Richmond' : tab === 'tab2' ? 'Sintrich' : tab === 'tab3' ? 'Polar' : tab === 'tab4' ? 'Monster' : 'Dulux'}
                      onClick={() => setActiveTab(tab)} // Add this line
                    />
                  ))}
                </div>
          <div className="mt-10">
            <div className="flex flex-wrap md:flex-nowrap items-center  bg-primary py-2 px-2 md:py-10 md:px-10">
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
                  <Link href={tabContent[activeTab].downloadlink} download={tabContent[activeTab].downloadlink} target="_blank" className='bg-black rounded-full text-[10px] md:text-base px-2  md:px-4 py-2 text-white'>Download Now</Link>
                  <Link href={"/product"} className='bg-black rounded-full text-[10px] md:text-base px-2  md:px-4 py-2 text-white'>Read More</Link>
                  <Link href={tabContent[activeTab].websitelink}  target="_blank" className='bg-black rounded-full text-[10px] md:text-base px-2  md:px-4 py-2 text-white'>Visit Official Site</Link>
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
