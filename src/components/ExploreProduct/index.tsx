import Image from 'next/image';
import Link from 'next/link';
import img from '@images/demo.jpg';
import React from 'react';
import blog1 from "@/assets/images/blog1.jpg"
import blog2 from "@/assets/images/blog2.jpg"
import blog3 from "@/assets/images/blog3.jpg"
import blog4 from "@/assets/images/blog4.jpg"
interface Project {
  title: string;
  image: any;
  link: string;
}

const projects: Project[] = [
  {
    title: 'STEPPING UP YOUR STYLE: A GUIDE TO SPC & LVT FLOORING',
    image: blog1,
    link: '/stepping-up-your-style',
  },
  {
    title: 'THE ENDURING ELEGANCE OF SINTRICH STONE: COUNTERTOPS THAT IMPRESS',
    image: blog2,
    link: '/the-enduring-elegance-of-sintrich-stone',
  },
  {
    title: 'SEALING THE DEAL: WHY MONSTER SEALENT IS YOUR GO-TO ADHESIVE',
    image: blog3,
    link: '/sealing-the-deal',
  },
  {
    title: "BUDGET-FRIENDLY BEAUTY: AFFORDABLE FLOORING OPTIONS THAT DON'T COMPROMISE ON STYLE",
    image: blog4,
    link: '/budget-friendly-beauty',
  },
];

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  } else {
    return text;
  }
};

const ExploreProduct = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">EXPLORE</h2>
          <p className="mt-3 text-lg sm:mt-4">OUR LATEST Blogs</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {projects.map((project, index) => (
            <Link href={project.link} key={index} className="group relative">
              <div className="w-full  rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  priority
                  className="w-full h-64 object-cover rounded-md hover:scale-90 hover:rounded-md transition duration-300"
                />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-center">{truncateText(project.title, 50)} </h3>
             
              <div className="mt-6 text-center">
                <Link
                  href={project.link}
                  className="px-8 py-2 border-2 text-sm font-medium rounded-full bg-white border-black hover:bg-black hover:text-white"
                >
                  View More
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
