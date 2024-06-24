'use client';
import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import img from '@images/demo.jpg';
import Image from 'next/image';

const Video: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="relative bg-gray-100 py-12 px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold  sm:text-4xl">
            EXPLORE OUR FACILITIES
          </h2>
          <p className="mt-3 text-lg sm:mt-4">
            Discover our state-of-the-art facilities through this video.
          </p>
        </div>

        <div className="mt-10">
        <video className='w-full object-cover h-[300px]' controls={false} loop muted   playsInline>
          <source src='/assets/video/Agsons.mp4' type="video/mp4" />
        </video>
       
        </div>
      </div>
    </div>
  );
};

export default Video;
