import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ProductVideo = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8 mt-20'>
        <div className='flex flex-wrap items-center md:flex-nowrap md:gap-4'>
            <div className='w-full md:w-6/12'>
            <video className='w-full' controls={false} loop muted autoPlay   playsInline>
                <source src='/assets/video/Agsons.mp4' type="video/mp4" />
                </video>
            </div>
            <div className='w-full md:w-6/12 space-y-4'>
                <h1 className='text-2xl mt-3 md:text-5xl font-medium md:text-start text-center'>Building Better, Together: Quality, Innovation, and Trust </h1>
                <p className='text-center md:text-start text-sm md:text-base'>Our collection features the luxurious textures of Richmond Flooring, the enduring beauty of Sintrich Stone, and the exceptional performance of Monster Sealants. By leveraging our global network and local expertise, we ensure competitive pricing and reliable delivery, making AGSONS Middle East your trusted partner in building success.</p>
                
            </div>
        </div>
    </div>
  )
}

export default ProductVideo