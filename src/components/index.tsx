import Image from 'next/image'
import React from 'react'
import img from "@images/demo.jpg"
const About = () => {
  return (
    <div className='mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
            <h1 className='font-bold text-4xl'>ABOUT</h1>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className='grid grid-cols-1  md:grid-cols-2 justify-items-center mt-10 mb-10 space-y-2 md:gap-6'>
             <div className='space-y-2'>
                <h1 className='font-semibold'>BUILDING WITH QUALITY, TRUST, AND INNOVATION</h1>
                <p className='text-xs text-justify md:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis dolorum, eaque eveniet explicabo, fuga, harum id iure iusto magnam maxime molestiae natus nihil nisi nostrum officia perspiciatis porro quaerat quasi quibusdam quidem quod reiciendis repellat repellendus rerum sasepe sequi, sit soluta <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur debitis dolorum, eaque eveniet explicabo, fuga, harum id iure iusto magnam maxime molestiae natus nihil nisi nostrum officia perspiciatis porro quaerat quasi quibusdam quidem quod reiciendis repellat repellendus rerum sasepe sequi, sit soluta </p>
 
             </div>
             <div>
                <Image className='rounded-md' src={img} width={800} height={800} alt='img'/>
             </div>
        </div>
    </div>
  )
}

export default About