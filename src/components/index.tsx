import Image from 'next/image'
import React from 'react'
import img from "@images/about.jpeg"
const About = () => {
  return (
    <div className='mt-20 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8' id='about'>
        <div className='text-center'>
            <h1 className='font-bold text-4xl'>ABOUT Us</h1>
            <p className='font-semibold'>Quality You Trust, Innovation You Need, Sustainability We Ensure</p>
        </div>

        <div className='grid grid-cols-1  md:grid-cols-2 justify-items-center mt-10 mb-10 space-y-2 md:gap-6'>
             <div className='space-y-2'>
                <p className='text-xs text-justify md:text-base'>As an extension of our UK family business, we bring generations of expertise and excellence to your doorstep. Our mission? To provide you with high quality building materials at competitive prices – whether its the opulent finish of Richmond Flooring, the timeless elegance of Sintrich Stone, or the dependable strength of Monster Adhesives.</p>
                <p className='text-xs text-justify md:text-base'>But we’re not just about products; we’re about people. Since every project is different, our committed team in the Middle East focuses on offering solutions that meet your particular needs for your one-of-a-kind projects. We are committed to establishing enduring bonds based on respect, honesty, and trust.</p>
                <p className='font-bold'>Why Choose Agsons?</p>
                <ul className='px-4 md:px-6 text-xs md:text-base'>
                  <li className='list-disc'>We source only the finest materials, holding ourselves to the highest standards.</li>
                  <li className='list-disc'>Always on the lookout for the latest technologies, we bring you the most advanced building solutions.</li>
                  <li className='list-disc'>Committed to sustainability, we offer eco-friendly options and practise responsible sourcing.</li>
                  <li className='list-disc'>Our knowledgeable team is ready to support you every step of the way, ensuring your vision comes to life.</li>
                  <li className='list-disc'>With a vast international network, we offer competitive pricing and reliable delivery, no matter where you are.</li>
                </ul>
                <p className='text-xs text-justify md:text-base'>Whether you&apos;re a contractor looking for trustworthy partners, a homeowner organising a makeover, or an architect envisioning the future, Agsons is here to help you create something extraordinary. Visit our showrooms, peruse our online inventory, or get in contact with our staff right now. </p>
             </div>
             <div>
                <Image className='rounded-md h-full' src={img} width={800} height={800} alt='img'/>
             </div>
        </div>
    </div>
  )
}

export default About