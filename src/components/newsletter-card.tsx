import React from 'react';

const NewsLetterCard = () => {
  return (
    <div className="flex flex-col bg-black text-white py-4 px-6 rounded-lg justify-center gap-10">
      <h1 className="text-xl font-extrabold">Join our Newsletter</h1>
      <div className="  flex-col sm:flex-row flex items-center  w-full  space-y-4 sm:space-y-0 rounded-lg">
        <input
          className="border-none  border-transparent text-base w-full font-medium leading-none text-[#616161] p-4 focus:outline-none bg-[#1E1E1E] placeholder-[#616161]"
          placeholder="Email Address"
        />
        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-black py-4 px-6 hover:bg-opacity-75">
          Subscribe
        </button>
      </div>
      <p className="text-slate-300">
        * Will send you weekly updates for your better tool management.
      </p>
    </div>
  );
};

export default NewsLetterCard;
