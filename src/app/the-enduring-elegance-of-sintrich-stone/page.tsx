import Image from 'next/image'
import React from 'react'
import blog1 from "@/assets/images/blog1.jpg"
import blog2 from "@/assets/images/blog2.jpg"
import blog3 from "@/assets/images/blog3.jpg"
import blog4 from "@/assets/images/blog4.jpg"
import Link from 'next/link'

interface Blog {
    title: string;
    link: string;
    image: any;
  }

  const Blogpost: Blog[] = [
    {
      title: 'STEPPING UP YOUR STYLE: A GUIDE TO SPC & LVT FLOORING',
      link: '/stepping-up-your-style',
      image: blog1
    },
    {
      title: 'SEALING THE DEAL: WHY MONSTER SEALENT IS YOUR GO-TO ADHESIVE',
      link: '/sealing-the-deal',
      image: blog3
    },
    {
      title: "BUDGET-FRIENDLY BEAUTY: AFFORDABLE FLOORING OPTIONS THAT DONT",
      link: '/budget-friendly-beauty',
      image: blog4
    }
  ];

const Blog2:React.FC = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-36 px-2 sm:px-4 md:px-8'>
        <div className='flex flex-wrap md:flex-nowrap md:gap-10'>
        <div className='w-full md:w-9/12 space-y-4'>
            <h1 className='text-lg md:text-2xl font-bold'>THE ENDURING ELEGANCE OF SINTRICH STONE: COUNTERTOPS THAT IMPRESS</h1>
            <Image className='rounded-md' width={1000} height={1000} src={blog2} alt='blog1'/>
                <p className='font-semibold'>INTRODUCTION:</p>
                <p>Step into a world of luxury and sophistication with Sintrich Stone, the revolutionary sintered stone that redefines countertops. Crafted with cutting-edge technology, Sintrich Stone offers unmatched beauty, durability, and sustainability, making it the perfect choice for discerning homeowners and design professionals.</p>
                <p  className='font-semibold'>KEY POINTS:</p>
                <p>What is Sintrich Stone? Explain the unique production process and highlight its key properties like scratch, stain, and heat resistance. <br/> Design Versatility: Showcase the vast array of colors, patterns, and finishes available to suit any aesthetic. <br/>Sustainable Choice: Emphasize Sintrich Stone&apos;s eco-friendly credentials and responsible sourcing practices. <br/> Applications Beyond Countertops: Explore other potential uses like backsplashes, flooring, and wall cladding.</p>
                <p  className='font-semibold'>CALL TO ACTION:</p>
                <p>Inspire readers to envision their dream kitchen or bathroom featuring Sintrich Stone countertops. Encourage them to schedule a consultation with your design team to explore possibilities.</p>
                <p>Step into a builder&apos;s paradise! 4,000 sqm of inspiration awaits. Open Mon-Sat, 9am-6pm. Unit A12, J1 Warehouses, Jebel Ali Industrial 1. Explore & build:</p>
                <Link className='underline font-semibold' target='_blank' href={"https://maps.app.goo.gl/BJGMuw6Tj5e5bC4h7"}>https://maps.app.goo.gl/BJGMuw6Tj5e5bC4h7</Link>
            </div>
            <div className='w-full md:w-3/12 mt-10 md:mt-0 space-y-5'>
            <h1 className='text-lg md:text-2xl font-bold'>RELATED POST</h1>
            {
                Blogpost.map((array,index)=>(
                    <Link href={array.link} key={index} className='flex gap-2'>
                    <Image className='rounded-md object-cover w-28 h-28' width={300} height={300} src={array.image} alt='blog1'/>
                    <div>
                    <h1 className='text-sm font-semibold'>{array.title}</h1>
                    </div>
                </Link>
                ))
            }
             
            </div>
        </div>
    </div>
  )
}

export default Blog2