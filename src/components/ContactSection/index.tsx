// components/ContactSection.tsx
import React from 'react';
import ContactInfo from '../ContactForm/ContactInfo';
import ContactForm from '../ContactForm/Contactform';
import Map from '../ContactForm/Map';

const ContactSection: React.FC = () => {
  return (
    <div  id='Contact'>
      <div className='p-2 md:pt-10 h-1 md:h-20'>

      </div>
   <div className="max-w-screen-xl mx-auto p-4 sm:p-8 bg-gray-100 rounded-lg transition mt-20" >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <ContactInfo 
          phone="+971 4 235 4018" 
          email="info@agsons.ae" 
          address="Unit A12, J1 Warehouses, Jebel Ali Industrial 1, Dubai, UAE" 
        />
        <ContactForm />
      </div>
      <Map />
    </div>
    </div>
   
  );
};

export default ContactSection;
