// components/ContactSection.tsx
import React from 'react';
import ContactInfo from '../ContactForm/ContactInfo';
import ContactForm from '../ContactForm/Contactform';
import Map from '../ContactForm/Map';

const ContactSection: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 sm:p-8 bg-gray-100 rounded-lg transition " id='Contact'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo 
          phone="+971 4 385 2652" 
          email="info@agsons.com" 
          address="Unit A12, J1 Warehouses, Jebel Ali Industrial 1, Dubai, UAE" 
        />
        <ContactForm />
      </div>
      <Map />
    </div>
  );
};

export default ContactSection;
