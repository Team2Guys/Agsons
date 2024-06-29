'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img from "@images/logo/Agsons logo.png"
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Navigation, Pagination } from 'swiper/modules';

interface Testimonial {
  name: string;
  role: string;
  image: any;
  rating: number;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Hannah Schmitt',
    role: 'Lead designer',
    image: img, // Use your local image path or replace with URL
    rating: 4,
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas...'
  },
  {
    name: 'John Doe Schmitt',
    role: 'Lead designer',
    image: img, // Use your local image path or replace with URL
    rating: 4,
    feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas...'
  },
  // Add more testimonials here if needed
];

const TestimonialSlider: React.FC = () => {
  return (
    <div className='mt-5 md:mt-20'>
      <h2 className="text-xl md:text-3xl font-extrabold  px-5 md:px-0 mb-2 text-center">What Our Clients Say About Us</h2>
   
    <div className="relative max-w-4xl mx-auto py-12">
      
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className='p-2'>
            <div className=" max-w-screen-sm mx-auto p-8 rounded-lg text-center relative ">
              <div className="relative w-24 h-24 mx-auto mb-4 z-10">
                <Image src={testimonial.image} alt={testimonial.name} layout="fill" className="rounded-full" />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-lg transform -rotate-6 z-0"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gray-100 rounded-lg transform rotate-6 z-0"></div>
              <div className="relative z-20">
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className=" mb-4">{testimonial.role}</p>
                <div className="flex justify-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
                <p className="">{testimonial.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-0 !top-1/2 transform !-translate-y-1/2 swiper-button-prev !text-2xl text-dark !text-black">
        {/* <FaChevronLeft className="text-2xl text-dark" /> */}
      </div>
      <div className="absolute right-0 !top-1/2 transform !-translate-y-1/2 swiper-button-next !text-black !text-lg">
        {/* <FaChevronRight className="text-2xl text-dark" /> */}
      </div>
    </div>
    {/* <iframe src='https://b5c852ddf4ed4da88f36633b7a5f3a69.elf.site' width='100%' height='550' frameBorder='0'></iframe> */}

    </div>
  );
};

export default TestimonialSlider;
