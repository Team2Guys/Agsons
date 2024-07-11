import About from '@/components';
import Brands from '@/components/Brands';
import ContactSection from '@/components/ContactSection';
import ExploreProduct from '@/components/ExploreProduct';
import Accordion from '@/components/Faqs';
import Hero from '@/components/Hero';
import Video from '@/components/Video';
import React from 'react';

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <ExploreProduct />
      <Video />
      <About />
      <Accordion />
      {/* <TestimonialSlider /> */}
      <ContactSection />
    </>
  );
}
