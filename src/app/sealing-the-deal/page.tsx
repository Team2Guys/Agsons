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
                <p>Are you sick and tired of sloppy and unreliable adhesives? Monster Sealant is your go-to adhesive!</p>
                <p>Let us take you back to when you meticulously planned your construction project, choose the best materials, and assembled an exceptional team. Everything is geared toward excellence.</p>
                <p>Then, the nightmare starts. Your carefully thought-out plan goes terribly wrong at the last minute, costing you money, time, and most importantly, your sanity.</p>
                <p>Adhesion failures are among the frequently occurring issues. Ineffective joint connections, weather-related damage, and insufficient substrate support are a few of the effects of poor sealants. This is what the proper sealant prevents when working on a craft or construction project, such as building a tall building or remodelling your home:</p>
                <p>However, things don&apos;t have to be this way.</p>
                <h2>The Power of Monster Sealant</h2>
                <p>But what makes Monster Sealant different from the hundreds of other options that exist on the market? What it all boils down to is the amount of power that is stored in each of the tubes.</p>
                <h3>Bonding Strength</h3>
                <p>Monster Sealant has superior adhesive properties than regular sealants. Can be applied to any kind of floor, including concrete, glass, metal, and wood. This guarantees that your materials are securely fastened and do not move or shift in any way, particularly in hot environments. Whether you are bonding a skyscraper or a countertop, Monster Sealant is long-lasting to make sure that everything stays bonded.</p>
                <h3>Weather resistance</h3>
                <p>Monster Sealant is made to be as durable as possible, even under the most trying conditions. Insignificant elements like temperature, wind, rain, UV rays, and weather can all weaken its resilience. As such, it&apos;s one of the greatest choices for use in high-humidity and outdoor projects. Monster Sealant ensures that deterioration or damage won&apos;t cause your work to become unstable over time.</p>
                <h3>Versatility</h3>
                <p>It is suitable for both professional and do-it-yourself projects and provides you with the flexibility you need to take on any task with confidence. It&apos;s easy application and short curing period make it a favourite among enthusiasts and contractors alike.</p>

                <h2>Multipurpose Applications of Monster Sealant</h2>
                <p>Monster Sealant does not surrender to rain, wind, UV rays, and even temperature variations, which makes it incredibly durable. This makes it a good option for outside work and places where the environment is relatively moist. Monster Sealant ensures that your work stays as it is and cannot be moved or destroyed by forces over time and space.</p>
                <h3>Home Renovations Made Easy</h3>
                <p>Monster Sealant is a product that is used to seal joints and cracks in the bathroom tiles or fix that loose wobbly kitchen counter. This guarantees that fixtures and fittings do not move from their respective positions and at the same time, can effectively withstand water hence should be used in the bathroom or the kitchen. Give the farewell to moulds and mildews buildup and welcome the better and longer lasting home environment.</p>
                <h3>Outdoor Projects with Confidence</h3>
                <p>When it comes to the outdoors, such as, installing new windows or fixing a leaky roof, Monster Sealant can be relied on to perform. This element gives it the advantage of withstanding harsh sunlight, rainfall and even temperatures therefore keeping your exteriors looking as good as new and performing optimally all year round.</p>
                <h3>Industrial Strength for Professional Use</h3>
                <p>In construction and industrial contexts, for example, there is a strong need for high-quality and effective adhesive systems. Monster Sealant’s versatility to fix numerous surfaces such as metals, concrete, and glass makes it a key asset to its users. A fast setting time, and high bond strength guarantee that works are done fast and to optimum quality.</p>
                <h3>Craft and DIY Projects Simplified</h3>
                <p>To the do-it-yourself lovers and craft workers, they enjoy its flexibility and convenience as seen in their projects. No matter if you are making chairs, tables and other furniture, making decorations or fixing other items in the house, its strong grip and non-sticky surface make every work easy-going.</p>
                <h3>Automotive and Marine Repairs</h3>
                <p>It is also a hero in the automobile and marine industries with a product coined Monster Sealant. This makes it highly suitable for sealing tractive joints, corrosion repairing, and maintaining strength and stability of vehicles and boats that are vulnerable to vibrations, saltwater soluble issues, and severe conditions.</p>
                <p>Altogether, it can be stated that Monster Sealant is a universal product, which is highly essential for any tools collection. The possible application of this sealant is almost limitless, yet it is extremely powerful and long-lasting in all its applications – that’s why Monster Sealant delivers where others fail. Feeling up for the challenge of your next project? Monster Sealant is the reliable partner you need.</p>

                <h2>Safe and Sustainable</h2>
                <p>Monster Sealant is developed in such a way to have maximum safety when applying the sealant and even after application. Monster Sealant is non-toxic and free of harmful substances, making it safe for homes, schools, and any health-focused environment. With Monster Sealant, there are no worries about poisonous gases, ensuring a safer workplace and a healthier home.</p>
                <ul className='px-4 md:px-8'>
                  <li className='list-disc'>Monster Sealant is made with the environment in mind. This means you&apos;re choosing an adhesive that&apos;s good for your projects and the planet.</li>
                  <li className='list-disc'>Monster Sealant has low VOC emissions, making it safe for the environment and your health. You can trust it to help keep your space clean and healthy</li>
                  <li className='list-disc'>Built to last, reducing the need for replacements and repairs. Your projects will look great and stay strong for years, promoting a sustainable future.</li>
                  <li className='list-disc'>Monster Sealant works for many applications—bonding, sealing, or repairing</li>
                </ul>
                <h3>Ready to Experience the Monster Difference?</h3>
                <p>We won&apos;t let adhesive failures sabotage your projects. That’s why we are working with Monster Sealant for unbeatable strength, versatility, and eco-friendly performance for all your projects. Whether you&apos;re a professional or a DIY enthusiast, Monster Sealant products are your ultimate solution for flawless, reliable, and long-lasting results.</p>

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

export default Blog3