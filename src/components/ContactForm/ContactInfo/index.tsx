import Link from 'next/link';
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
      <h2 className="text-2xl font-bold mb-4">Let&apos;s Build Something Great Together!</h2>
      <p className=" mb-4">Have Questions? We&apos;re Here to Help!</p>
      <div className="flex items-center mb-4">
        <FaPhoneAlt className="mr-3 " />
        <Link href={`tel:${phone}`}>{phone}</Link>
      </div>
      <div className="flex items-center mb-4">
        <FaEnvelope className="mr-3 " />
        <Link href={`mailto:${email}`}>{email}</Link>
      </div>
      <div className="flex items-center mb-4">
        <FaMapMarkerAlt className="mr-3 " />
        <Link
          target="_blank"
          href={'https://maps.app.goo.gl/ZMFEiHmxCGEwrQnZ7'}
        >
          {address}
        </Link>
      </div>
    </div>
  );
};

export default ContactInfo;
