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
  size?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, imageUrl, link ,size}) => {
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
            <div className=' flex justify-center'>
                <div className='bg-transparent backdrop-blur-3xl   w-full p-2 absolute bottom-[60px]'>
                  <p className='text-white text-lg px-2'><span className='font-bold'>Size: </span>{size}</p>
                </div>
          </div>
          <div className='pt-3'>
          <h2 className='font-semibold text-xs md:text-sm'>{subtitle}</h2>
          <p className='text-base md:text-lg font-semibold'> {title}</p>
        </div>
        </Link>

    </>
  );
};

export default ProductCard;
