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
    title: 'Richmond Flooring',
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

const ExploreProduct = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            EXPLORE
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            OUR LATEST PROJECT
          </p>
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
              <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {project.description}
              </p>
              <div className="mt-6">
                <Link
                  href={project.link}
                  className="inline-block px-6 py-2 border border-gray-900 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100"
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
