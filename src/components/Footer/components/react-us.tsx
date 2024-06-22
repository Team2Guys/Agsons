import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
const ReactUS = () => {
  return (
    <div className=" max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Reach US</h2>
      <div className="flex text-md gap-2">
        <FaPhoneAlt className="text-lg mt-1" />
        <p className="text-gray-700">+1 (555) 123-4567</p>
      </div>
      <div className="flex text-md  gap-2">
        <IoMdMail className="text-lg mt-1" />
        <p className="text-gray-700">info@example.com</p>
      </div>
      <div className="flex text-md  gap-2">
        <FaLocationDot className="text-lg mt-1" />
        <p className="text-gray-700">
          123 Main St,
          <br />
          Anytown, USA
        </p>
      </div>
    </div>
  );
};

export default ReactUS;
