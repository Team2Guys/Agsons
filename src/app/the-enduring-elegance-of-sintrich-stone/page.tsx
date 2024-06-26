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
                <p>If we move toward the world’s innovation. It meets taste with Sintrich Stone, which is a modern choice for the modern worktop. Agsons offers unparalleled beauty, strength, and sustainability of Sintrich stone to clients. We will recognize this to homeowners and design experts, raising every design with the combination of attractiveness and maintenance. Sintrich is an ideal example of elegant functionality. It is suited for any kind of building project. Its adaptability is unlimited; it flourishes in the most difficult settings, whether they be floors or facades.  By choosing Sintrich Stone, you are not only spending on the value of craftsmanship but also paying for a greener future.</p>
                <p  className='font-semibold'>KEY POINTS:</p>
                <ul className='px-4 md:px-8'>
                <li className='list-disc'>Sintrich Stone is produced by utilizing developed sintering technology, and natural minerals under high heat and pressure. After that, it produced dense and nonporous surfaces that present excellent intensity and endurance.</li>
                <li className='list-disc'> Our Sintrich Stone has an A1 fire resistance rating because it is made under harsh heat and fires. It shows an outstanding challenge to UV rays and guarantees that its reliability and intensity will continue to build up over time.</li>
                <li className='list-disc'>We offer Sintrich Stone that is greatly challenging to scratch, continuing its untouched exterior even with daily use. The non-porous surface of Sintrich Stone prevents liquids and stains from probing, to make it easy to clean and maintain. It can be used under high temperatures without damaging or staining. It is ultimate for kitchen worktops.</li>
                <li className='list-disc'>We offer a substantial number of colors, models, and textures, that range from classic marble to modern concrete looks. When you search for the enduring style of Carrara or the bold veining of Calacatta, then Sintrich Stone has many options for interior styles. These are from simple modern to traditional luxury.</li>
                <li className='list-disc'>Sintrich Stone has eco-friendly practices all through its fabrication cycle. It is made to reduce environmental influence. If you choose Sintrich Stone, then it means that you are investing in a product that relates luxury with a responsible attitude to source administration.</li>
                <li className='list-disc'>Outside the primary use of worktops, Sintrich Stone has different interior applications. It enhances the kitchen and bathroom beauty with matching backsplashes that seamlessly integrate with worktops. Sintrich Stone creates outstanding quality walls or points up the living spaces. It elevates interior design with its luxurious appearance.</li>
                </ul>

                <p  className='font-semibold'>CALL TO ACTION:</p>
                <p>Designed specifically for every architectural venture, Sintrich is a shining example of utilitarian beauty. It is incredibly adaptable and excels in even the most difficult situations.  Agsons is pleased to offer you Sintrich Stone&apos;s unparalleled beauty and durable nature. If you&apos;re constructing an elegant interior floor or a streamlined modern facade, Sintrich has the ideal solution.</p>
                
            </div>
            <div className='w-full md:w-3/12 mt-10 md:mt-0 '>
            <div className=' md:sticky md:top-28 space-y-5'>
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
    </div>
  )
}

export default Blog2