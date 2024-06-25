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
                <h1 className='text-2xl mt-3 md:text-6xl font-medium text-start'>We Believe that Interior beautifies!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi </p>
                <Link className='bg-black flex justify-between rounded-full w-48' href={"#"}>
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