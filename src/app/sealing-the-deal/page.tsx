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
      title: "BUDGET-FRIENDLY BEAUTY: AFFORDABLE FLOORING OPTIONS THAT DON'T",
      link: '/budget-friendly-beauty',
      image: blog4
    }
  ];

const Blog3:React.FC = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-36 px-2 sm:px-4 md:px-8'>
        <div className='flex flex-wrap md:flex-nowrap md:gap-10'>
        <div className='w-full md:w-9/12 space-y-4'>
            <h1 className='text-lg md:text-2xl font-bold'>SEALING THE DEAL: WHY MONSTER SEALENT IS YOUR GO-TO ADHESIVE</h1>
            <Image className='rounded-md' width={1000} height={1000} src={blog3} alt='blog1'/>
                <p className='font-semibold'>INTRODUCTION:</p>
                <p>Tired of messy glues and unreliable adhesives? Introducing Monster Sealent, the revolutionary silicon and nail-free solution that guarantees a strong, secure bond every time. Discover why Monster Sealent is the perfect choice for DIY enthusiasts, professionals, and everyone in between.</p>
                <p  className='font-semibold'>KEY POINTS:</p>
                <p>The Power of Monster Sealent: Explain its unique composition and highlight its key advantages like superior strength, water resistance, and ease of use.<br/> Multipurpose Applications: Showcase its versatility for bonding various materials like wood, metal, ceramics, and more. <br/>Safe and Sustainable: Emphasize its eco-friendly formula and user-friendly application, free from harmful fumes and mess. <br/>DIY-Friendly Tips: Share insightful tips and tricks on using Monster Sealent for various projects, from simple repairs to complex installations.</p>
                <p  className='font-semibold'>CALL TO ACTION:</p>
                <p>Encourage readers to ditch outdated adhesives and experience the superior performance of Monster Sealent. Offer exclusive deals or discounts to incentivize purchase.</p>
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

export default Blog3