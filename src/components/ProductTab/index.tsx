'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '@images/logo/Richmond logo.png';
import logo1 from '@images/logo/Polar logo.png';
import image1 from '@images/card/1.jpg';
import image2 from '@images/card/2.jpg';
import image3 from '@images/card/3.jpg';
import image4 from '@images/card/4.jpg';
import image5 from '@images/card/5.jpg';
import image6 from '@images/card/6.jpg';
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
      logo: logo,
      products: [
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: image1,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: image2,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: image3,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: image4,
          link: 'product',
        },
        {
          title: 'LVT COMFORT - TWINE',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: image5,
          link: 'product',
        },
      ],
    },
    tab2: {
      logo: logo1,
      products: [
        {
          title: 'NON-FORMALDEHYDE FLOORING',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: image6,
          link: 'product',
        },
      ],
    },
    tab3: {
      logo: logo,
      products: [
        {
          title: 'NON-FORMALDEHYDE Subtitle',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: image6,
          link: 'product',
        },
      ],
    },
    tab4: {
      logo: logo1,
      products: [
        {
          title: 'NON-FORMALDEHYDE Subtitle',
          subtitle: 'LUXURY VINYL TILE',
          imageUrl: image4,
          link: 'product',
        },
      ],
    },
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="text-center bg-gray-300 space-y-5 pt-10 pb-10">
          <h2 className="text-4xl font-bold">Richmond Luxury Vinyl Flooring</h2>
          <div className="flex justify-center flex-wrap space-y-2 space-x-4">
            <button
              onClick={() => setActiveTab('tab1')}
              className={`px-4 py-2 font-medium text-sm rounded-full ${
                activeTab === 'tab1'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black text-gray-700'
              }`}
            >
              Richmond Luxury
            </button>
            <button
              onClick={() => setActiveTab('tab2')}
              className={`px-4 py-2 font-medium text-sm rounded-full ${
                activeTab === 'tab2'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black text-gray-700'
              }`}
            >
              Non-Formaldehyde
            </button>
            <button
              onClick={() => setActiveTab('tab3')}
              className={`px-4 py-2 font-medium text-sm rounded-full ${
                activeTab === 'tab3'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black text-gray-700'
              }`}
            >
              Pluvia Flooring
            </button>
            <button
              onClick={() => setActiveTab('tab4')}
              className={`px-4 py-2 font-medium text-sm rounded-full ${
                activeTab === 'tab4'
                  ? 'bg-black text-white'
                  : 'bg-gray-300 border border-black text-gray-700'
              }`}
            >
              Stone Tec
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-3 mb-20">
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
