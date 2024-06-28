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
        'Richmond has a well-established reputation among floor traders and wholesalers, having maintained a position as a top-tier brand for more than 20 years in the UK and the last 3 years in the Middle East. As manufacturers of the Richmond brand, we leave no attention to detail untouched. With over 2 decades of manufacturing experience using the latest technology with branding to create appealing and well constructed products. We have an extensive range of SPC flooring and LVT flooring. Please contact us if you’re a retailer, wholesaler or wish to be a distributor in your own country. We currently have a dealer network in the UK, Spain, Greece, South Africa, Kenya, and Zimbabwe. We would love to add more countries. ',
      image: rich,
      downloadlink: "/assets/Richmond.pdf",
      websitelink:"https://richmondflooring.ae/ae-en"
    },
    tab2: {
      title: 'Sintrich Stone',
      description:
        "Sintrich Sintered Stone stands as a paragon of functional beauty, tailor-made for every architectural endeavour. Its versatility knows no bounds, thriving even in the most challenging environments, be it interior, exterior, kitchen countertops, vanities, dining table or floors and walls. Sintrich is designed to withstand extreme temperatures and fire, proudly holding an A1 certification for fire resistance. It also boasts remarkable UV-ray resilience, ensuring that its vibrancy and integrity remain intact over time. With Sintrich, this becomes a reality.  At Agsons, we bring you the unmatched durability and beauty of Sintrich Sintered Stone. Whether you're designing a sleek modern facade or a sophisticated design Sintrich offers the perfect solution. ",
      image: sint,
      downloadlink: "/assets/SINTRICH.pdf",
      websitelink:"https://sintrich.com/ae-en"

    },
    tab3: {
      title: 'Polar Flooring',
      description:
        'Polar Flooring was established in 2022 to cater for development projects. All our Polar Flooring in our SPC and LVT ranges still offer a manufacturer’s warranty but have been rigorously value engineered to create a contractor’s perfect solution in a competitive marketplace. Have comfort in the knowledge that the skeleton and quality of Polar Flooring have not been compromised to still be a high quality product. ',
      image: pol,
      downloadlink: "/assets/Polar.pdf",
      websitelink:"https://polarfloors.co.uk/"
    },
    tab4: {
      title: 'Monster Sealent',
      description:
        'Monster sealants are our new products we’ve added to the range under our Richmond brand. These high quality silicons and glues are used daily with all the product ranges that we sell in Agsons. Quality and competitive pricing are key to the success of these products. Our formulas exceed all European requirements.',
      image: monst,
      downloadlink: "/assets/Monster.pdf",
      websitelink:"https://monstersealant.com/"
    },
    tab5: {
      title: 'Dulux Paint',
      description:
        'Dulux Paints is globally known as the industrial leader in the painting supply industry. At Agsons, we keep stock of all the paints and tinting options are done in house. For large scale projects and companies that require a large volume of matt emulsion paints nobody can beat us on price and quality.',
      image: dux,
      downloadlink: "/assets/Dulux.pdf",
      websitelink:"https://www.dulux.co.uk/en"
    },
  };

  return (
    <div className="bg-white py-12 mt-5 md:mt-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-extrabold sm:text-4xl capitalize">
          Brands that we have built with quality always in mind
          </h2>
          <p className="mt-3 text-base md:text-lg sm:mt-4 font-semibold">
          From the UK to the Middle East now, Agsons delivers 3 decades of experience in the property renovation sector
          </p>
          <p className="text-sm md:text-base">
          Our key clients would be architects, interior designers, fit out contractors, channel partners and of course the end user. All our products are offered with a manufacturer’s warranty with a no hassle policy.
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
              Dulux Paint
            </button>
          </div>
 
          <div className='grid grid-cols-3  md:grid-cols-5 justify-items-center mt-5 max-w-screen-md mx-auto'>
                  {Object.keys(tabContent).map((tab, index) => (
                    <Image
                      key={index}
                      className={`border-b-2  ${activeTab === tab ? 'border-black' : 'border-transparent'}`}
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
                  className="h-full w-full object-contain md:h-full lg:w-full lg:h-full"
                  width={500}
                  height={500}
                  src={tabContent[activeTab].image}
                  alt={tabContent[activeTab].title}
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:ml-10 lg:w-1/2">
                <h3 className="text-xl font-bold text-start">
                  {tabContent[activeTab].title}
                </h3>
                <p className="mt-3 text-sm md:text-base  sm:mt-4">
                  {tabContent[activeTab].description}
                </p>
                <div className='flex gap-2 mt-5'>
                  <Link href={tabContent[activeTab].downloadlink} download={tabContent[activeTab].downloadlink} target="_blank" className='bg-black rounded-full text-[10px] md:text-base px-2  md:px-4 py-2 text-white'>Catalogue PDF</Link>
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
