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
            <Image className='rounded-md' width={1000} height={1000} src={blog1} alt='blog1' loading='lazy'/>
              <p>Flooring is the ultimate to any structure. If we serve with both operational and appealing objectives, the alternative flooring affects a space&apos;s overall atmosphere, protection, and feasibility. So, you have to say goodbye to outdated carpets and welcome the modern fascination of SPC and LVT flooring! </p>
              <p>These pioneering-edge flooring selections are stunning and exquisite with unique endurance and weather-resistant maintenance. Wooden flooring offers timeless beauty and natural warmth, with textures like smoked oak, Brazilian walnut, and antique maple. </p>
              <p>In this blog, we&lsquo;ll take you on a voyage that completes the fascinating world of SPC (Stone Plastic Composite) and LVT (Luxury Vinyl Tile) flooring. We&lsquo;ll explore their unique items, myriad settlements, and key points, inspiring you to choose the complete flooring solution for your space. </p>
              
              <h2>Why SPC & LVT Flooring?</h2>
              <p>SPC and LVT flooring corresponds to the elevation of modern flooring technology, joining visual appeal with outstanding performance. Simply envision yourself admiring the classic beauty of Sintrich Stone countertops and environmentally safe adhesives while strolling over opulent Richmond Flooring. </p>
              <p>Richmond has been a top-tier brand for almost 45 years, and it has a well-established reputation among wholesalers and floor dealers. You have the chance to get the greatest flooring product from Agsons. Our specialty product is Richmond Flooring, which has a high degree of resilience to wear and an attractive appearance. Select from luxury vinyl, and SPC,  they&apos;re all scuff-resistant, watertight, and easy to maintain.</p>
               <h2>Why SPC & LVT Flooring is Popular?</h2>
               <p>Stone Plastic Composite, or SPC, flooring has become incredibly popular. It ought to be your primary choice for flooring because of its natural physical appearance, outstanding resilience, and ease of care. Outstanding SPC flooring from Richmond may improve the aesthetics of any house or place of business. </p>
               <p>Decorative vinyl on top, a bottom balancing layer, and a stone plastic composite core are the three layers that typically make up SPC flooring. The vinyl layers imitate genuine resources like stone, tile, and hardwood while protecting the flooring from damage. The stone composite core offers stability and stiffness. </p>
               <p>Limestone bonded with polymer and calcium carbonate for greater strength and stiffness combined with sophisticated locking systems that prohibit surface spills from seeping into the internal structure of the core&apos;. It is the scientific explanation of SPC. We source the highest-quality SPC flooring for modern living, which is intended to provide elegance and unrivalled endurance.</p>
               <h2>Benefits of SPC & LVT</h2>
               <p>For elegant, waterproof flooring that suits any home or office, nothing compares to luxury vinyl tile (LVT). Richmond offers a vast range of the latest LVT flooring in Agsons to transform your interior spaces.  LVT flooring is composed of many layers, each containing beautiful design elements on top of a strong vinyl core. </p>
               <p>All SPC flooring comes protected by a 5–20-year product guarantee, demonstrating our faith in the material&apos;s technological prowess. To accommodate this interior flooring, we provide a wide range of surface patterns from Richmond. </p>

               <ul className='px-4 md:px-8'>
                  <li className='list-disc'>We have the herringbone effect, the wood effect, and the stone effect. Although our professionals can install on any level surface, most of the renovations we have completed have been directly onto ceramic or concrete tile floors.</li>                         
                  <li className='list-disc'>Such flooring options are reasonably priced, 100% waterproof, and have a calcium carbonate coating. With LVT flooring, you may experience the appearance of various natural materials like wood and stone.</li>                         
                  <li className='list-disc'>We provide vinyl floor tiles with vintage patterns or cutting-edge styles that instantly improve the aesthetics of your room.</li>                         
                  <li className='list-disc'>SPC and LVT both represent the lead of modern flooring technology. It added beautiful applications to your living areas with outstanding execution. </li>                         
                  <li className='list-disc'>SPC flooring provides astonishing intensity along with strength. Thanks to its core that covers limestone and PVC.  It is highly resistant to water and wear. </li>                         
               </ul>
               <p>This presents SPC as our most favourable choice for your high-passage areas, such as kitchens, bathrooms, and commercial settings. In comparison, LVT flooring is observed for its flexibility and authentic designs. It is Richmond&apos;s vast array of designs that replicate natural materials like wood, stone, and ceramic. Its multi-layered structure not only gives an easy underfoot feel but also safeguards stability alongside cuts and dents.</p>

               <h2>Ready to Experience the Difference?</h2>
               <p>You have the chance to get the greatest flooring product from Agsons. Our specialty product is Richmond Flooring, which has a high degree of wear resistance and an attractive appearance. Everyone is based on either quality or quantity, especially beauty in Richmond&apos;s case, including architects, interior designers, homeowners, and contractors. And that&apos;s exactly what you get with Richmond. It is beautifully designed, incredibly adaptive, and easily maintained facility flooring.</p>
              
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

export default Blog1