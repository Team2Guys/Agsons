'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import tabContent from '@components/constant/index';
import ProductCard from './ProductCard';

const ProductTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('tab1');
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
            {activeTab === 'tab1'
              ? 'Richmond Luxury Vinyl Flooring'
              : activeTab === 'tab2'
              ? 'SINTRICH Stone Vinyl Flooring'
              : activeTab === 'tab3'
              ? 'Polar Vinyl Flooring'
              : activeTab === 'tab4'
              ? 'Monster Sealent Vinyl Flooring'
              : 'Dulux Pain Vinyl Flooring'}
          </h2>
          <div className="flex md:justify-evenly flex-wrap gap-2 mt-5 px-4">
            <button
              onClick={() => {
                setActiveTab('tab1');
                setVisibleCount(9);
              }}
              className={`px-4 py-2 font-medium text-xs md:text-lg rounded-full uppercase ${
                activeTab === 'tab1'
                  ? 'bg-black text-white'
                  : 'bg-primary border border-black'
              }`}
            >
              Richmond Flooring
            </button>
            <button
              onClick={() => {
                setActiveTab('tab2');
                setVisibleCount(9);
              }}
              className={`px-4 py-2 font-medium text-xs md:text-lg rounded-full uppercase ${
                activeTab === 'tab2'
                  ? 'bg-black text-white'
                  : 'bg-primary border border-black'
              }`}
            >
              SINTRICH Stone
            </button>
            <button
              onClick={() => {
                setActiveTab('tab3');
                setVisibleCount(9);
              }}
              className={`px-4 py-2 font-medium text-xs md:text-lg rounded-full uppercase ${
                activeTab === 'tab3'
                  ? 'bg-black text-white'
                  : 'bg-primary border border-black'
              }`}
            >
              Polar Flooring
            </button>
            <button
              onClick={() => {
                setActiveTab('tab4');
                setVisibleCount(9);
              }}
              className={`px-4 py-2 font-medium text-xs md:text-lg rounded-full uppercase ${
                activeTab === 'tab4'
                  ? 'bg-black text-white'
                  : 'bg-primary border border-black'
              }`}
            >
              Monster Sealent
            </button>
            <button
              onClick={() => {
                setActiveTab('tab5');
                setVisibleCount(9);
              }}
              className={`px-4 py-2 font-medium text-sm md:text-lg rounded-full uppercase ${
                activeTab === 'tab5'
                  ? 'bg-black text-white'
                  : 'bg-primary border border-black'
              }`}
            >
              Dulux paint
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center mt-3 mb-10">
            {tabContent[activeTab].products.slice(0, visibleCount).map((product: any, index: any) => (
              <ProductCard
                key={index}
                title={product.title}
                subtitle={product.subtitle}
                imageUrl={product.imageUrl}
                link={product.link}
                size={product.size}
              />
            ))}
          </div>
          {visibleCount < tabContent[activeTab].products.length && (
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
