
import React, { useState } from 'react';

const Video: React.FC = () => {


  return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
    <div className="relative bg-gray-100 py-12 px-4">
        <div className="text-center">
          <h2 className="text-xl font-extrabold px-4 md:px-0  sm:text-4xl">
            EXPLORE OUR FACILITIES
          </h2>
          <p className="mt-3 text-sm md:text-lg sm:mt-4">
            Discover our state-of-the-art facilities through this video.
          </p>
        </div>

        <div className="mt-10">
        <video className='w-full object-cover h-full md:h-[300px]' controls={false} loop muted autoPlay   playsInline>
          <source src='/assets/video/Agsons.mp4' type="video/mp4" />
        </video>
       
        </div>
      </div>
    </div>
  );
};

export default Video;
