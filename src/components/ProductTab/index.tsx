//@ts-nocheck
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import tabContent from '@components/constant/index';
import ProductCard from './ProductCard';

const ProductTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');
  const [nestedTab, setNestedTab] = useState<string>('nestedTab1');
  const [visibleCount, setVisibleCount] = useState<number>(9);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 9);
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
          <div className="w-3/12 md:w-8/12 border-t-2"></div>
          <div className="w-5/12 md:w-2/12 pointer-events-none text-sm md:text-base">
            See Our Collection
          </div>
        </div>
        <div className="text-center bg-primary pt-10 pb-10">
          <h2 className="text-xl md:text-6xl font-medium uppercase">
            {tabContent[activeTab].title}
          </h2>
          <div className={`overflow-x-auto whitespace-nowrap scrollbar-hide md:justify-evenly flex-wrap gap-2 mt-5 `}>
            {Object.keys(tabContent).map((tabKey) => (
              <button
                key={tabKey}
                onClick={() => {
                  setActiveTab(tabKey);
                  setVisibleCount(9);
                  setNestedTab('nestedTab1'); // Reset nested tab
                }}
                className={`px-4 py-2 font-medium text-xs md:text-lg rounded-full uppercase ml-2 ${
                  activeTab === tabKey
                    ? 'bg-black text-white'
                    : 'bg-primary border border-black'
                }`}
              >
                {tabContent[tabKey].label}
              </button>
            ))}
          </div>
        </div>
        <div className="">
        <div className="text-center bg-secondary pt-5 pb-5">
              <div className={`overflow-x-auto whitespace-nowrap scrollbar-hide md:justify-center flex-wrap gap-2 ${tabContent[activeTab].className}`}>
               
              {Object.keys(tabContent[activeTab].nestedTabs).map((nestedKey) => (
                <button
                  key={nestedKey}
                  onClick={() => {
                    setNestedTab(nestedKey);
                    setVisibleCount(9);
                  }}
                  className={`md:px-4 px-2 py-2 text-xs md:text-sm rounded-full uppercase ml-2 ${
                    nestedTab === nestedKey
                      ? 'bg-black text-white'
                      : 'bg-secondary border border-black'
                  }`}
                >
                  {tabContent[activeTab].nestedTabs[nestedKey].label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-3 mb-10">
            {tabContent[activeTab].nestedTabs[nestedTab].products.slice(0, visibleCount).map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                subtitle={product.subtitle}
                imageUrl={product.imageUrl}
                link={product.link}
                size={product.size}
                size2={product.size2}
                available={product.available}
                newproduct={product.newproduct}
              />
            ))}
          </div>
          {visibleCount < tabContent[activeTab].nestedTabs[nestedTab].products.length && (
            <div className="text-center">
              <button
                onClick={loadMore}
                className="px-4 py-2 font-medium text-lg rounded-full bg-black text-white uppercase"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
