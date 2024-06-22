// components/ContactInfo.tsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactInfoProps {
  phone: string;
  email: string;
  address: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ phone, email, address }) => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <p className="text-gray-600 mb-4">Say something to start a live chat!</p>
      <div className="flex items-center mb-4">
        <FaPhoneAlt className="mr-3 text-gray-600" />
        <span>{phone}</span>
      </div>
      <div className="flex items-center mb-4">
        <FaEnvelope className="mr-3 text-gray-600" />
        <span>{email}</span>
      </div>
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="mr-3 text-gray-600" />
        <span>{address}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
