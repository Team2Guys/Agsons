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
    <div className='max-w-screen-xl mx-auto mt-36 px-2 sm:px-4  md:px-8'>
        <div className='flex flex-wrap md:flex-nowrap md:gap-10'>
        <div className='w-full md:w-9/12 space-y-4'>
            <h1 className='text-lg md:text-2xl font-bold'>Budget-friendly Beauty: Affordable Flooring Options That Do Not Compromise On Style</h1>
            <Image className='rounded-md' width={1000} height={1000} src={blog4} alt='blog1'/>
                <p>Home transformation does not always come with a hefty price tag. Right? While you plan a home makeover, you must be looking for a blend of quality, elegance, and pocket-friendliness. There are many affordable flooring options that do not stress your pocket and don&apos;t compromise on quality as well. So, why break the bank when you have flooring choices that offer value for money?</p>
                <p>From charming laminate to elegant vinyl, we will help you explore all the ins and outs of affordable flooring options</p>
                <p>Let&apos;s head off to the details without further ado!</p>

                <h2  className='font-bold'>Does Quality Have To Be Pricey? No! It’s A Myth</h2>
                <p>We always have the mindset that quality and cost can&apos;t coexist. However, that&apos;s not the case. If you think premium flooring is expensive, you need to think again. We have carefully stockpiled materials and designs that won&apos;t disturb your budget while exceeding your expectations in quality and charm.<br/>So say goodbye to financial strain and get ready to explore affordable flooring collections with exceptional quality and style. Skim through every option down to the last detail and see what matches your preference.</p>

                <h2  className='font-bold'>Your Ultimate Guide To Affordable Flooring Options</h2>
                <h3 className='font-bold'>Vinyl</h3>
                <h4 className='font-bold'>Appearance</h4>
                <p>Vinyl tiles appear smooth, sleek, and minimalistic, with a touch of rustic. They have a traditional charm and are available in a variety of colours, designs, and patterns. Although vinyl tiles have a natural glamour, many printing technologies further improve their appeal to make them more aesthetic and versatile. </p>
                <h4 className='font-bold'>Benefits</h4>
                <ul className='px-4 md:px-8'>
                  <li className='list-disc'>Durable</li>
                  <li className='list-disc'>Needs minimum maintenance</li>
                  <li className='list-disc'>Versatile (many colours and patterns are available) </li>
                  <li className='list-disc'>Effortless installation  </li>
                  <li className='list-disc'>Water-resistant </li>
                  <li className='list-disc'>Ideal for busy areas </li>
                </ul>
                <h4 className='font-bold'>Design Options</h4>
                <p>Vinyl tiles not only make an affordable flooring option but also give you diversity. Here are the patterns available for vinyl tiles to choose from.</p>
                <p > <span className='font-bold'>Stack bond (grid):</span>seamless designs in which vertical and horizontal points attach</p>
                <p > <span className='font-bold'>Running bond (offset):</span>The design is offset by half of the tile&apos;s width.</p>
                <p > <span className='font-bold'>Random:</span>Design with no certain order.</p>
                <p > <span className='font-bold'>Flemish bond:</span> An exciting blend of intervening rows. </p>
                <p > <span className='font-bold'>Herringbone:</span>A fish scale pattern with an elegant touch</p>
                <p > <span className='font-bold'>Stagger:</span>Tile pattern on the alternate side of the centre. (Ideal for 2 & 3 colours)</p>
                <p > <span className='font-bold'>Diagonal:</span>Alternative pattern of rectangles and squares</p>
                <p > <span className='font-bold'>Weave:</span>Gives off a woven-effect vibe (called basketweave)</p>

                <h3  className='font-bold'>Laminate</h3>
                <h4  className='font-bold'>Appearance</h4>
                <p>With a polished and charming outlook, laminate tiles capture intricate details. The best thing about laminate is that it is very versatile and available in a broad spectrum of colours and patterns. Plus, the glossy finish adds to their visual appeal and makes them resistant to wear & tear.</p>
                <h4  className='font-bold'>Benefits</h4>
                <ul className=' px-4 md:px-8'>
                  <li className='list-disc'>Very easy to clean</li>
                  <li className='list-disc'>Durable and strong</li>
                  <li className='list-disc'>Easy installation (does not require a professional)</li>
                  <li className='list-disc'>Aesthetic with a visual appea</li>
                  <li className='list-disc'>Prevents spills/smudges/scratches/UV light</li>
                </ul>
                <h4  className='font-bold'>Design Options</h4>
                <p > <span className='font-bold'>Textured laminate:</span> Embossed textures or hand-scraped surfaces</p>
                <p > <span className='font-bold'>High-gloss:</span>Shiny, polished and seamless</p>
                <p > <span className='font-bold'>Patterned laminate:</span>It has different designs like herringbone or chevron</p>
                <p > <span className='font-bold'>Stone look:</span>Looks like natural stone (marble, slate etc)</p>
                <p > <span className='font-bold'>Wood look:</span> Looks like natural hardwood (maple, oak, walnut etc)</p>
                <p > <span className='font-bold'>Matte-finish:</span>Non-reflective and smooth</p>
                <p > <span className='font-bold'>Mixed width laminate:</span>Combination of planks with different widths</p>
                <h3  className='font-bold'>Linoleum</h3>
                <h4  className='font-bold'>Appearance</h4>
                <p>Looking for a material that looks timeless and natural? Well, linoleum is the one. It&apos;s an absolutely charming and affordable flooring option with a matte finish. The inviting patterns, earthy tone, and seamless design have made linoleum the chosen favourite of homeowners. Its timeless appearance has made it ideal for both commercial and residential areas.</p>
                <h4  className='font-bold'>Benefits</h4>
                <ul className='px-4 md:px-8'>
                  <li className='list-disc'>Eco-friendly and biodegradable</li>
                  <li className='list-disc'>Durable (lasts up to approximately 40 years with proper handling)</li>
                  <li className='list-disc'>Anti-microbial and antistatic</li>
                  <li className='list-disc'>Ideal for any setting</li>
                  <li className='list-disc'>Prevents discoloration</li>
                </ul>
                <h4  className='font-bold'>Design Options</h4>
                <ul className='px-4 md:px-8'>
                  <li className='list-disc'>Sheet flooring</li>
                  <li className='list-disc'>Tiles (glue-down and click-clock)</li>
                  <li className='list-disc'>Plank flooring</li>
                </ul>
                <h3  className='font-bold'>Polished Concrete Flooring</h3>
                <h4  className='font-bold'>Appearance</h4>
                <p>Polished concrete has a sleek, smooth, and vibrant look. Its reflective surface and glossy finish lead to a sense of openness. You can choose your favourite look of concrete flooring as it offers broad customization. There are many colours and stains to choose from. Also, designs also vary from minimalistic to complex.</p>
                <h4  className='font-bold'>Benefits</h4>
                <ul className='px-4 md:px-8'>
                  <li className='list-disc'>Light-reflective</li>
                  <li className='list-disc'>Avoids slips and falls</li>
                  <li className='list-disc'>Long-lasting</li>
                  <li className='list-disc'>Easy to maintain</li>
                  <li className='list-disc'>Hypoallergenic (doesn’t trap grime or mould)</li>
                </ul>
                <h4  className='font-bold'>Design Options</h4>
                <p > <span className='font-bold'>Natural-grey finish:</span>Features aesthetic natural grey concrete</p>
                <p > <span className='font-bold'>High-gloss:</span>Offers highly reflective surface with a modern feel</p>
                <p > <span className='font-bold'>Matte:</span>It’s less reflective, has a smooth surface with a traditional vibe</p>
                <p > <span className='font-bold'>Patterned concrete:</span>Offers different patterns (engraved, saw-cuts, or geometric ones)</p>
                <p > <span className='font-bold'>Salt & pepper finish:</span>Showcases fine grains of sand with a subtle texture</p>
                <p > <span className='font-bold'>Textured concrete:</span>Soft texture which prevents slips and offers visual appeal</p>

                <h3  className='font-bold'>Engineered Wood</h3>
                <h4  className='font-bold'>Appearance</h4>
                <p>Natural, rustic, and earthy—that&apos;s how engineered wood appears. With a close resemblance to solid hardwood, it gives off a lived-in vibe and a natural glamour. Polished engineered wood has a glossy finish, while a matte finish goes fine for a rustic feel. The versatile and evergreen look of engineered hardwood has made it ideal for traditional and urban settings.</p>
                <h4  className='font-bold'>Benefits</h4>
                <ul className='px-4 md:px-8'>
                  <li className='list-disc'>Gives off the vibe of real wood</li>
                  <li className='list-disc'>Very durable with remarkable strength</li>
                  <li className='list-disc'>Long lifespan</li>
                  <li className='list-disc'>Versatile </li>
                  <li className='list-disc'>Incredibly environment-friendly</li>
                </ul>
                <h4  className='font-bold'>Design Options</h4>
                <p className=' '> <span className='font-bold'>Planks with different widths:</span>Combines planks of different widths, has a rustic charm</p>
                <p className=' '> <span className='font-bold'>Distressed:</span>It intentionally gives a worn-out look for a classic aesthetic</p>
                <p className=' '> <span className='font-bold'>Herringbone:</span>Planks with irregular patterns. It’s a very classy engineered wood design.</p>
                <p className=' '> <span className='font-bold'>Hand-scraped:</span>Offers a feel of hand-crafted wood</p>
                <p className=' '> <span className='font-bold'>Chevron:</span>Resembles herringbones and has V-shaped patterns to add sleekness</p>

                <h2>Simple Hacks For Smart Shopping </h2>
                <p>It is not easy to choose an affordable flooring solution while the market is brimming with flooring options. So, here are some simple techniques to help you through this process.</p>
                <h3>Make Comparison</h3>
                <p>Compare the cost, quality, and installation expenses of different materials. It will help you get an idea of which ones suit you the best. Make sure to go for an affordable flooring option without compromising the quality or aesthetics. The research will take time, but it will be worth it.</p>
                <h3>Look For Discounts</h3>
                <p>Seasonal sales, promotional offers, and clearance events can help you get high-quality flooring on budget. So, keep an eye on any such occasion from local stores or online retailers. You can save a good chunk of money by using these offers.</p>
                <h3>Consider DIY Installation</h3>
                <p>Do you own some installation tools and have some experience using them? Install the flooring yourself. It will not only render a good experience but also save you money. It&apos;s one of the smartest techniques for flooring shopping.</p>
                <h3>Purchase From Stock Options</h3>
                <p>Many large projects leave remnants of expensive flooring. Why not take advantage of them? The project owners are ready to sell these remnants for reasonable money. You can buy precious, high-end materials for flooring from these stocks.</p>
                <h3>Go For Eco-Friendly Options</h3>
                <p>While you look for aesthetics and pock-friendliness, do not overlook the environment-friendly aspect. Make sure you purchase flooring that is sustainable and guarantees a clean environment. It is important to do thorough research on the environmental aspects of the material before making a final decision. Concrete, glass, timber, and wood are a few of the most nature-friendly flooring options.</p>


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

export default Blog4