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
    question: 'WHAT BRANDS DOES AGSONS OFFER?',
    answer:
      'Richmond Flooring (SPC & LVT), Sintrich (Sintered Stone), and Monster (Silicon and nail free Clue).',
  },
  {
    question: 'WHAT TYPES OF FLOORING DOES AGSONS OFFER?',
    answer:
      'We offer a variety of flooring types including SPC, LVT, and Sintered Stone.',
  },
  {
    question: 'WHAT ARE THE BENEFITS OF SINTRICH STONE?',
    answer:
      'Sintrich Stone offers durability, aesthetic appeal, and is eco-friendly.',
  },
];

const Accordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 p-2">
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
            <span className="border-black p-2 border rounded-full text-sm">
              {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
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
