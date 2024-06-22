import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
const ReactUS = () => {
  return (
    <div className="flex flex-col max-w-md mx-auto gap-5">
      <h1 className="text-xl font-bold">Reach US</h1>
      <div className="flex text-md gap-2">
        <FaPhoneAlt className="text-lg mt-1" />
        <p className="text-gray-700">+971 4 385 2652</p>
      </div>
      <div className="flex text-md  gap-2">
        <IoMdMail className="text-lg mt-1" />
        <p className="text-gray-700">info@agsons.com</p>
      </div>
      <div className="flex text-md  gap-2">
        <FaLocationDot className="text-lg mt-1" />
        <p className="text-gray-700">
          Unit A12, J1 Warehouses, Jabel Ali <br /> industerial 1, Dubai, UAE
        </p>
      </div>
    </div>
  );
};

export default ReactUS;
