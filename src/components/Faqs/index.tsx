'use client';
// components/Accordion.tsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface AccordionItem {
  question: string;
  answer: string;
}

const accordionData: AccordionItem[] = [
  {
    question: 'What brands does AGSONS offer?',
    answer:
      'Richmond Flooring (SPC & LVT), Sintrich (Sintered Stone), and Monster (Silicon and nail free Clue).',
  },
  {
    question: 'WHAT TYPES OF FLOORING DOES AGSONS OFFER?',
    answer:
      'We offer a variety of flooring types including SPC, LVT, and Sintered Stone.',
  },{
    question: 'What are the benefits of Sintrich stone?',
    answer:
      'Durable, low maintenance, stain and scratch resistant, available in various styles and colours.',
  },
  {
    question: "What's the advantage of using Monster adhesives?",
    answer:
      'Eco-friendly, strong and reliable, silicon and nail free for easy application.',
  },
  {
    question: 'Do you offer installation services?',
    answer:
      'This may vary depending on your location and chosen products. Please contact your local AGSONS branch for further information.',
  },
  {
    question: 'Can I get samples of your products?',
    answer:
      'Yes, in many cases. Check with your local branch or visit the AGSONS website. Do you offer personalized design consultations? Some locations may offer this service. Contact your local branch for details. Ordering & Delivery:',
  },
  {
    question: 'How can I order AGSONS products?',
    answer:
      'Online through the AGSONS website, visiting a showroom, or by contacting your local branch.',
  },
  {
    question: 'What does AGSONS do to promote sustainability?',
    answer:
      'AGSONS prioritizes eco-friendly practices and responsible sourcing. This includes using recycled materials, offering sustainable product options, and minimizing waste.',
  },
 
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 p-2" id='faq'>
      <h2 className="text-xl md:text-3xl font-extrabold mb-8 text-center">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      {accordionData.map((item, index) => (
        <div key={index} className="mb-8 border rounded-sm bg-gray-100 px-4 ">
          <button
            className="w-full p-2 md:p-4 flex justify-between items-center text-left"
            onClick={() => handleToggle(index)}
          >
            <span className="text-sm md:text-xl font-semibold">{item.question}</span>
            <span className="">
              {activeIndex === index ? <FaChevronUp size={15}/> : <FaChevronDown size={15} />}
            </span>
          </button>
          {activeIndex === index && (
            <div className="p-2 md:p-4 bg-gray-100">
              <p className='text-xs md:text-base'>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
