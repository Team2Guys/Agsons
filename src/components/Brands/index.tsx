"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import rich from "../../../public/assets/images/Richmond Flooring.png";
import monst from "../../../public/assets/images/Monster.png";
import pol from "../../../public/assets/images/Polar.png";
import sint from "../../../public/assets/images/Sintrich.png";
import duliximage from "../../../public/assets/images/Dulux.webp";
import Duluxlogo from '@images/logo/Dulux logo.jpg';
import Monsterlogo from '@images/logo/Monster logo.png';
import Polarlogo from '@images/logo/Polar logo.png';
import Richmondlogo from '@images/logo/Richmond logo.png';
import Sintrichlogo from '@images/logo/Sintrich logo.png';
import PolarTable from '../Table/PolarTable';
import BrandData from './BrandData';
import Table from '../Table';


const Brands = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const tabData = [
    {
      key: 'tab1',
      title: 'Richmond Flooring',
      logo: Richmondlogo,
      content: <BrandData
      image={rich}
      title="Richmond Flooring"
      description= 'Richmond has a well-established reputation among floor traders and wholesalers, having maintained a position as a top-tier brand for more than 20 years in the UK and the last 3 years in the Middle East. As manufacturers of the Richmond brand, we leave no attention to detail untouched. With over 2 decades of manufacturing experience using the latest technology with branding to create appealing and well constructed products. We have an extensive range of SPC flooring and LVT flooring. Please contact us if you’re a retailer, wholesaler or wish to be a distributor in your own country. We currently have a dealer network in the UK, Spain, Greece, South Africa, Kenya, and Zimbabwe. We would love to add more countries. '
      modalContant= {<Table />}
      Download={"/assets/Richmond.pdf"}
      website={"https://richmondflooring.ae/ae-en"}
      activeTab={activeTab}
      
      
      />,
    },
    {
      key: 'tab2',
      title: 'Sintrich Stone',
      logo: Sintrichlogo,
  
      content: <BrandData
      image={sint}
      title="Sintrich Stone"
      description= "Sintrich Sintered Stone stands as a paragon of functional beauty, tailor-made for every architectural endeavour. Its versatility knows no bounds, thriving even in the most challenging environments, be it interior, exterior, kitchen countertops, vanities, dining table or floors and walls. Sintrich is designed to withstand extreme temperatures and fire, proudly holding an A1 certification for fire resistance. It also boasts remarkable UV-ray resilience, ensuring that its vibrancy and integrity remain intact over time. With Sintrich, this becomes a reality.  At Agsons, we bring you the unmatched durability and beauty of Sintrich Sintered Stone. Whether you're designing a sleek modern facade or a sophisticated design Sintrich offers the perfect solution."
      Download={"/assets/SINTRICH.pdf"}
      website={"https://sintrich.com/ae-en"}
      activeTab={activeTab}
      />,
    },
    {
      key: 'tab3',
      title: 'Polar Flooring',
      logo: Polarlogo,
  
      content: <BrandData
      image={pol}
      title="Polar Flooring"
      description= "Polar Flooring was established in 2022 to cater for development projects. All our Polar Flooring in our SPC and LVT ranges still offer a manufacturer’s warranty but have been rigorously value engineered to create a contractor’s perfect solution in a competitive marketplace. Have comfort in the knowledge that the skeleton and quality of Polar Flooring have not been compromised to still be a high quality product."
      Download={"/assets/Polar.pdf"}
      website={"https://polarfloors.co.uk/"}
      modalContant= {<PolarTable />}
      activeTab={activeTab}
      />,
    },
    {
      key: 'tab4',
      title: 'Monster Sealant',
      logo: Monsterlogo,
  
      content: <BrandData
      image={monst}
      title="Monster Sealant"
      description= "Monster sealants are our new products we’ve added to the range under our Richmond brand. These high quality silicons and glues are used daily with all the product ranges that we sell in Agsons. Quality and competitive pricing are key to the success of these products. Our formulas exceed all European requirements."
      Download={"/assets/Monster.pdf"}
      website={"https://monstersealant.com/"}
      activeTab={activeTab}
      />,
    },
    {
      key: 'tab5',
      title: 'Dulux Paints',
      logo: Duluxlogo,
      content: <BrandData
      image={duliximage}
      title="Dulux Paints"
      description= "Dulux Paints is globally known as the industrial leader in the painting supply industry. At Agsons, we keep stock of all the paints and tinting options are done in house. For large scale projects and companies that require a large volume of matt emulsion paints nobody can beat us on price and quality."
      Download={"/assets/Dulux.pdf"}
      website={"https://www.dulux.co.uk/en"}
      activeTab={activeTab}
      />,
    },
  ];
  return (
    <div className="bg-white py-12 mt-20 md:mt-20">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-xl font-extrabold sm:text-4xl capitalize">
          Brands that we have built with quality always in mind
        </h2>
        <p className="mt-3 sm:mt-4 text-sm md:text-base">
          From the UK to the Middle East, Agsons brings three decades of experience in the property renovation sector.
        </p>
        <p className="text-sm md:text-base">
          Our key clients include architects, interior designers, fit-out contractors, channel partners, and, of course, end-users. All our products come with a manufacturer’s warranty and a no-hassle policy.
        </p>
      </div>
      <div className="mt-10 overflow-y-auto overflow-hidden">
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide md:flex md:justify-evenly flex-wrap gap-2 space-x-2">
        {tabData.map((tab) => (
          <button
            key={tab.key}
            onMouseOver={() => setActiveTab(tab.key)}
            className={`px-2 md:px-4 py-2 font-medium text-xs border-2 border-black md:text-sm rounded-full uppercase hover:bg-black hover:text-white ${
                activeTab === tab.key ? 'bg-black text-white' : 'bg-white text-black'
              }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-3 md:grid-cols-5 justify-items-center mt-5 max-w-screen-md mx-auto'>
            {tabData.map((tab, index) => (
              <Image
                key={index}
                className={`border-b-2 ${activeTab === tab.key ? 'border-black' : 'border-transparent'}`}
                width={100}
                height={100}
                src={tab.logo}
                alt={tab.title}
                onMouseOver={() => setActiveTab(tab.key)}
                loading="lazy"
              />
            ))}
          </div>

        {tabData.map((tab) => (
          <div
            key={tab.key}
            className={`md:p-2 ${activeTab === tab.key ? 'block' : 'hidden'}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Brands;
