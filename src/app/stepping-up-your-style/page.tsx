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
      title: 'THE ENDURING ELEGANCE OF SINTRICH STONE: COUNTERTOPS THAT',
      link: '/the-enduring-elegance-of-sintrich-stone',
      image: blog2
    },
    {
      title: 'SEALING THE DEAL: WHY MONSTER SEALENT IS YOUR GO-TO ADHESIVE',
      link: '/sealing-the-deal',
      image: blog3
    },
    {
      title: "BUDGET-FRIENDLY BEAUTY: AFFORDABLE FLOORING OPTIONS THAT DON'T",
      link: '/budget-friendly-beauty',
      image: blog4
    }
  ];

const Blog1:React.FC = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-36 px-2 sm:px-4 md:px-8'>
        <div className='flex flex-wrap md:flex-nowrap md:gap-10'>
        <div className='w-full md:w-9/12 space-y-4'>
            <h1 className='text-lg md:text-2xl font-bold'>STEPPING UP YOUR STYLE: A GUIDE TO SPC & LVT FLOORING</h1>
            <Image className='rounded-md' width={1000} height={1000} src={blog1} alt='blog1'/>
                <p className='font-semibold'>INTRODUCTION:</p>
                <p>Say goodbye to outdated carpets and hello to the modern world of SPC and LVT flooring! These innovative options offer stunning visuals, unparalleled durability, and easy maintenance, making them perfect for homes and businesses alike. In this guide, we&apos;ll delve into the exciting world of SPC and LVT, exploring their unique features, benefits, and considerations to help you choose the perfect fit for your space.</p>
                <p  className='font-semibold'>KEY POINTS:</p>
                <p>What are SPC & LVT? Explain the composition and key differences between these popular flooring choices. Benefits of SPC & LVT: Highlight their waterproof nature, scratch resistance, ease of installation, and diverse design options. Choosing the Right Option: Discuss factors like style, budget, foot traffic, and maintenance needs to guide readers towards the ideal choice. Expert Tips: Share pro insights on installation, cleaning, and maintaining your SPC or LVT floors for long-lasting beauty.</p>
                <p  className='font-semibold'>CALL TO ACTION:</p>
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

export default Blog1