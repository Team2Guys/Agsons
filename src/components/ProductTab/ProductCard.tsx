import React, { useState } from 'react';
import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import newimages from '@images/new.png';
interface ProductCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  link?: string;
  size?: string;
  size2?: string;
  available?: string;
  newproduct?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, subtitle, imageUrl, link ,size,size2,available,newproduct }) => {
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
        <div onClick={handleImageClick} className='cursor-pointer relative hover:scale-105 duration-300 transition'>
          <Image
            className="h-48 w-full object-cover sm:h-64 sm:w-64  md:h-72 md:w-72 lg:w-96 lg:h-96   "
            width={500}
            height={500}
            src={imageUrl}
            alt="image"
            loading='lazy'
          />
       
          {
          newproduct && 
          <div className='absolute -top-[.6px] -left-[.7px]'>
          <Image
            className="h-12 w-12 md:h-20 md:w-20"
            width={100}
            height={100}
            src={newproduct}
            alt="image"
            loading='lazy'
          />
          </div>
        }
          <div className='absolute bottom-0 w-full'>
          {
          available?.length && 
          <div className=' flex items-center justify-center'>
            <div className='bg-black   w-full p-2 '>
              <p className='text-white text-xs px-2'><span className='font-bold'>Available: </span>{available}</p>
            </div>
          </div>
        }
        {
          size?.length && 
          <div className=' flex items-center justify-center'>
            <div className='bg-black    w-full p-2 '>
              <p className='text-white text-xs px-2'><span className='font-bold'>Size: </span>{size}</p>
              {
                size2?.length && 
                <p className='text-white text-xs px-2'><span className='font-bold'>Size: </span>{size2}</p>
              }
            </div>
          </div>
        }
          </div>
        </div>
     
        <div className='pt-3 capitalize'>
          <h2 className='font-semibold text-xs md:text-sm uppercase'>{subtitle}</h2>
          <p className='text-sm md:text-lg font-semibold uppercase'> {title}</p>
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
