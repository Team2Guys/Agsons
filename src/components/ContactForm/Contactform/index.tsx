// components/ContactForm.tsx
'use client';
import React, { useState } from 'react';
import axios from 'axios';
import showToast from '@/components/toast';
interface FormField {
  id: string;
  label: string;
  type: string;
  name: string;
}

const formFields: FormField[] = [
  { id: 'firstName', label: 'First Name', type: 'text', name: 'firstName' },
  { id: 'lastName', label: 'Last Name', type: 'text', name: 'lastName' },
  { id: 'email', label: 'Email', type: 'email', name: 'email' },
  { id: 'phone', label: 'Phone Number', type: 'text', name: 'phone' },
  { id: 'message', label: 'Message', type: 'textarea', name: 'message' },
];

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleform = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, message } = formValues;

    if (!email || !message) {
      showToast('error', 'Email and message are required.');
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/sendmail`,
        formValues,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (res.status === 200) {
        showToast('success', 'Email sent successfully!');
      } else {
        showToast('error', `Failed to send email: ${res.data.error}`);
      }
    } catch (error) {
      showToast('error', 'An error occurred while sending the email!');
    }
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <form onSubmit={handleform}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {formFields.slice(0, 2).map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium bg-transparent"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                className="mt-1 block bg-transparent w-full border-gray-300 rounded-none shadow-none outline-none border-b-2"
                value={formValues[field.name as keyof FormValues]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        {formFields.slice(2).map((field, index) => (
          <div key={field.id} className={`mb-4 ${index > 0 ? 'py-4' : ''}`}>
            <label htmlFor={field.id} className="block text-sm font-medium">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.name}
                rows={4}
                className="mt-1 block bg-transparent w-full border-gray-300 rounded-none shadow-none outline-none border-b-2"
                value={formValues[field.name as keyof FormValues]}
                onChange={handleChange}
              ></textarea>
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.name}
                className="mt-1 block bg-transparent w-full border-gray-300 rounded-none shadow-none outline-none border-b-2"
                value={formValues[field.name as keyof FormValues]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <button
          type="submit"
          className="px-4 py-2 bg-black text-white rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
