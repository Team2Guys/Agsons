import React, { useState } from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';

interface ProductCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link?: string;
  size?: string;
  size2?: string;
  available?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, imageUrl, link ,size,size2,available}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleImageClick = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <>
      <div className='group relative'>
        <div onClick={handleImageClick} className='cursor-pointer'>
          <Image
            className="h-48 w-full object-cover sm:h-64 md:h-full lg:w-full lg:h-96"
            width={500}
            height={500}
            src={imageUrl}
            alt="image"
            loading='lazy'
          />
        </div>
        {
          available?.length && 
          <div className=' flex items-center justify-center'>
            <div className='bg-black rounded-t-xl   w-full p-2 absolute bottom-[60px]'>
              <p className='text-white text-xs px-2'><span className='font-bold'>Available: </span>{available}</p>
            </div>
          </div>
        }
        {
          size?.length && 
          <div className=' flex items-center justify-center'>
            <div className='bg-black rounded-t-xl   w-full p-2 absolute bottom-[50px] md:bottom-[60px]'>
              <p className='text-white text-xs px-2'><span className='font-bold'>Size: </span>{size}</p>
              {
                size2?.length && 
                <p className='text-white text-xs px-2'><span className='font-bold'>Size: </span>{size2}</p>
              }
            </div>
          </div>
        }
        <div className='pt-3'>
          <h2 className='font-semibold text-xs md:text-sm'>{subtitle}</h2>
          <p className='text-base md:text-lg font-semibold'> {title}</p>
        </div>
      </div>

      {isPreviewOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex p-2 items-center justify-center z-50'>
          <div className='relative w-full  md:w-1/2 bg-white p-2 rounded-md text-end' onClick={e => e.stopPropagation()}>
            <button onClick={handleClosePreview} className=' text-black text-2xl cursor-pointer z-20'>
              <MdClose className='cursor-pointer' />
            </button>
            <Image
              className="object-contain w-full md:h-[600px]"
              width={800}
              height={800}
              src={imageUrl}
              alt="image preview"
            />
          </div>
          <div className='fixed inset-0' onClick={handleClosePreview}></div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
