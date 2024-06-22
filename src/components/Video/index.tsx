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
    <div className="relative bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            EXPLORE OUR FACILITIES
          </h2>
          <p className="mt-3 text-lg text-gray-500 sm:mt-4">
            Discover our state-of-the-art facilities through this video.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          {!showVideo ? (
            <div
              className="relative group cursor-pointer"
              onClick={handleClick}
            >
              <Image
                src={img}
                alt="Facility"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 group-hover:bg-opacity-75 transition-opacity">
                <FaPlay className="h-16 w-16 text-white" />
              </div>
            </div>
          ) : (
            <div className="relative w-full h-64">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Facility Tour"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Video;
