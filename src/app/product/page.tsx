import ProductTab from '@/components/ProductTab';
import React from 'react';
import ContactSection from '../../components/ContactSection';
import About from '@/components';
import ProductVideo from '@/components/ProductVideo';

const Product: React.FC = () => {
  return(
    <>
    <ProductTab />
    <ProductVideo/>
    <About />
    <ContactSection />
    </>
  ) 
};

export default Product;
