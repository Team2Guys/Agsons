import ProductTab from '@/components/ProductTab';
import React from 'react';
import ContactSection from '../../components/ContactSection';
import About from '@/components';

const Product: React.FC = () => {
  return(
    <>
    <ProductTab />;
    <About />
    <ContactSection />
    </>
  ) 
};

export default Product;
