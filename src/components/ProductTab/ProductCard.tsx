// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';

interface ProductCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, imageUrl, link }) => {
  return (
    <>
    <Link href={link} className='group relative'>
          <div>
            <Image
              className="h-72 w-full object-cover sm:h-96 md:h-full lg:w-full lg:h-full"
              width={400}
              height={400}
              src={imageUrl}
              alt="image"
              loading='lazy'
            />
      
          </div>
            <Link href={`/${link}`} className='text-center flex justify-center translate-y-16 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:transition group-hover:duration-300'>
          <div className='bg-black rounded-full items-center flex justify-between w-48 p-2 absolute bottom-3'>
            <p className='text-white text-lg px-2'>View Detail </p>
            <div className='border rounded-full flex items-center justify-center w-8 h-8 bg-white'>
             <MdKeyboardArrowRight className='text-black' size={25} />
            </div>
          </div>
          </Link>
          <div className='pt-3'>
          <h2 className='font-semibold text-sm'>{subtitle}</h2>
          <p className='text-lg font-semibold'> {title}</p>
        </div>
        </Link>

    </>
  );
};

export default ProductCard;
