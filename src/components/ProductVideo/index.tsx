import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ProductVideo = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8'>
        <div className='flex flex-wrap items-center md:flex-nowrap md:gap-4'>
            <div className='w-full md:w-6/12'>
            <video className='w-full' controls={false} loop muted autoPlay   playsInline>
                <source src='/assets/video/Agsons.mp4' type="video/mp4" />
                </video>
            </div>
            <div className='w-full md:w-6/12 space-y-4'>
                <h1 className='text-2xl mt-3 md:text-6xl font-medium md:text-start text-center'>Building Better, Together: Quality, Innovation, and Trust </h1>
                <p className='text-center md:text-start text-sm md:text-base'>Our collection features the luxurious textures of Richmond Flooring, the enduring beauty of Sintrich Stone, and the exceptional performance of Monster Sealants. By leveraging our global network and local expertise, we ensure competitive pricing and reliable delivery, making AGSONS Middle East your trusted partner in building success.</p>
                <Link className='bg-black flex justify-between rounded-full w-48 mx-auto md:mx-0' href={"#"}>
                <div className='bg-black rounded-full items-center flex justify-between w-48 p-2'>
                    <p className='text-white text-lg px-2'>View Detail </p>
                    <div className='border rounded-full flex items-center justify-center w-8 h-8 bg-white'>
                    <MdKeyboardArrowRight className='text-black' size={25} />
                    </div>
                </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductVideo