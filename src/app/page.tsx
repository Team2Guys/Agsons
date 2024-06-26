import About from '@/components';
import Brands from '@/components/Brand';
import ContactSection from '@/components/ContactSection';
import ExploreProduct from '@/components/ExploreProduct';
import Accordion from '@/components/Faqs';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TestimonialSlider from '@/components/Slider';
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
      <TestimonialSlider />
      <ContactSection />
    </>
  );
}
