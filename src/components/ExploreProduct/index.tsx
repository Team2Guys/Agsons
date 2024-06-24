import Image from 'next/image';
import Link from 'next/link';
import img from '@images/demo.jpg';
import React from 'react';

interface Project {
  title: string;
  description: string;
  image: any;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Say goodbye to outdated carpets and hello to the modern wor',
    description:
      'Say goodbye to outdated carpets and hello to the modern world of SPC and LVT flooring! These innovative options offer stunning visuals.',
    image: img,
    link: '#',
  },
  {
    title: 'Sintrich',
    description:
      'Say goodbye to outdated carpets and hello to the modern world of SPC and LVT flooring! These innovative options offer stunning visuals.',
    image: img,
    link: '#',
  },
  {
    title: 'Polar Floors',
    description:
      'Say goodbye to outdated carpets and hello to the modern world of SPC and LVT flooring! These innovative options offer stunning visuals.',
    image: img,
    link: '#',
  },
  {
    title: 'Monster',
    description:
      'Say goodbye to outdated carpets and hello to the modern world of SPC and LVT flooring! These innovative options offer stunning visuals.',
    image: img,
    link: '#',
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
          <p className="mt-3 text-lg sm:mt-4">OUR LATEST PROJECT</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={150}
                  height={150}
                  priority
                  className="w-full h-64 object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-center">{truncateText(project.title, 30)} </h3>
              <p className="mt-2 text-xs text-center">
                {truncateText(project.description, 100)} {/* Limit to 100 characters */}
              </p>
              <div className="mt-6 text-center">
                <Link
                  href={project.link}
                  className="px-8 py-2 border-2 text-sm font-medium rounded-full bg-white border-black hover:bg-black hover:text-white"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
