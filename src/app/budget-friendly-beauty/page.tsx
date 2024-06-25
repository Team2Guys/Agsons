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
      title: 'THE ENDURING ELEGANCE OF SINTRICH STONE: COUNTERTOPS THAT...',
      link: '/the-enduring-elegance-of-sintrich-stone',
      image: blog2
    },
    {
      title: "SEALING THE DEAL: WHY MONSTER SEALENT IS YOUR GO-TO ADHESIVE",
      link: '/sealing-the-deal',
      image: blog3
    }
  ];

const Blog4:React.FC = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-36 px-2 sm:px-4 md:px-8'>
        <div className='flex flex-wrap md:flex-nowrap md:gap-10'>
        <div className='w-full md:w-9/12 space-y-4'>
            <h1 className='text-lg md:text-2xl font-bold'>BUDGET-FRIENDLY BEAUTY: AFFORDABLE FLOORING OPTIONS THAT DON&apos;T COMPROMISE ON STYLE</h1>
            <Image className='rounded-md' width={1000} height={1000} src={blog4} alt='blog1'/>
                <p className='font-semibold'>INTRODUCTION:</p>
                <p>Create your dream space without breaking the bank! This article explores affordable flooring options that offer excellent value for money without sacrificing style or quality. Discover practical tips and inspiring ideas to achieve a beautiful and functional floor within your budget.</p>
                <p  className='font-semibold'>KEY POINTS:</p>
                <p>Busting the Myth: Challenge the misconception that quality flooring comes at a high price. Explore Affordable Options: Showcase budget-friendly materials like laminate, vinyl tiles, and engineered wood, highlighting their benefits and design possibilities.<br/>Smart Shopping Tips: Share strategies for finding deals, comparing prices, and maximizing your budget.<br/>DIY Inspiration: Encourage readers to consider DIY installation for certain flooring options to further reduce costs</p>
                <p  className='font-semibold'>CALL TO ACTION:</p>
                <p>Empower readers to achieve their desired flooring goals without exceeding their budget. Invite them to browse your online store or visit your showroom for expert advice and affordable flooring solutions.</p>
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

export default Blog4