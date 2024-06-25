'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Richmond from '@images/logo/Richmond logo.png';
import Sintrich from '@images/logo/Sintrich logo.png';
import Polar from '@images/logo/Polar logo.png';
import Monster from '@images/logo/Monster logo.png';
import Dulux from '@images/logo/Dulux logo.png';
import richmond1 from '@images/Richmond/1.jpg';
import richmond2 from '@images/Richmond/2.jpg';
import richmond3 from '@images/Richmond/3.jpg';
import richmond4 from '@images/Richmond/4.jpg';
import richmond5 from '@images/Richmond/5.jpg';
import richmond6 from '@images/Richmond/6.jpg';
import richmond7 from '@images/Richmond/7.jpg';
import richmond8 from '@images/Richmond/8.jpg';
import richmond9 from '@images/Richmond/9.jpg';
import richmond10 from '@images/Richmond/10.jpg';
import ProductCard from './ProductCard';
interface Product {
  title: string;
  subtitle: string;
  imageUrl: any;
  link: string;
}

interface TabContent {
  logo?: any;
  products: Product[];
}
const ProductTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');

  const tabContent: Record<string, TabContent> = {
    tab1: {
      logo: Richmond,
      products: [
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond1,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond2,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond3,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond4,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond5,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond6,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond7,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond8,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond9,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond10,
          link: 'product',
        },
      ],
    },
    tab2: {
      logo: Sintrich,
      products: [
        {
          title: 'NON-FORMALDEHYDE FLOORING',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond6,
          link: 'product',
        },
      ],
    },
    tab3: {
      logo: Polar,
      products: [
        {
          title: 'NON-FORMALDEHYDE Subtitle',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond6,
          link: 'product',
        },
      ],
    },
    tab4: {
      logo: Monster,
      products: [
        {
          title: 'NON-FORMALDEHYDE Subtitle',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond4,
          link: 'product',
        },
      ],
    },
    tab5: {
      logo: Dulux,
      products: [
        {
          title: 'NON-FORMALDEHYDE Subtitle',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: richmond4,
          link: 'product',
        },
      ],
    },
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center justify-between gap-4">
          <div className="w-4/12 md:w-2/12">
            <Image
              width={150}
              height={150}
              src={tabContent[activeTab].logo}
              alt="logo"
            />
          </div>
          <div className="w-4/12 md:w-8/12 border-t-2"></div>
          <div className="w-4/12 md:w-2/12 pointer-events-none text-sm md:text-base">
            See Our Collection
          </div>
        </div>
        <div className="text-center bg-gray-300 pt-10 pb-10">
        <h2 className="text-4xl md:text-6xl font-medium uppercase">
          {activeTab === 'tab1'
            ? 'Richmond Luxury Vinyl Flooring'
            : activeTab === 'tab2'
            ? 'SINTRICH Stone Vinyl Flooring'
            : activeTab === 'tab3'
            ? 'Polar  Vinyl Flooring'
            : activeTab === 'tab4'
            ? 'Monster Sealent  Vinyl Flooring'
            : 'Dulux Pain Vinyl Flooring'}
        </h2>
          <div className="flex md:justify-evenly flex-wrap gap-2  mt-5 px-4">
            <button
              onClick={() => setActiveTab('tab1')}
              className={`px-4 py-2 font-medium text-sm md:text-lg rounded-full uppercase ${
                activeTab === 'tab1'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black '
              }`}
            >
              Richmond Luxury
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              className={`px-4 py-2 font-medium text-sm md:text-lg rounded-full uppercase ${
                activeTab === 'tab2'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black '
              }`}
            >
              SINTRICH Stone
            </button>
            <button
              onClick={() => setActiveTab('tab3')}
              className={`px-4 py-2 font-medium text-sm md:text-lg rounded-full uppercase ${
                activeTab === 'tab3'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black '
              }`}
            >
              Polar Flooring
            </button>
            <button
              onClick={() => setActiveTab('tab4')}
              className={`px-4 py-2 font-medium text-sm md:text-lg rounded-full uppercase ${
                activeTab === 'tab4'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black '
              }`}
            >
              Monster Sealent
            </button>
            <button
              onClick={() => setActiveTab('tab5')}
              className={`px-4 py-2 font-medium text-sm md:text-lg rounded-full uppercase ${
                activeTab === 'tab5'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black '
              }`}
            >
              Dulux paint
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-3 mb-10">
            {tabContent[activeTab].products.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                subtitle={product.subtitle}
                imageUrl={product.imageUrl}
                link={product.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
