// components/ContactForm.tsx
import React from 'react';

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

const ContactForm: React.FC = () => {
  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {formFields.slice(0, 2).map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 bg-transparent">{field.label}</label>
              <input type={field.type} id={field.id} name={field.name} className="mt-1 block bg-transparent w-full border-gray-300 rounded-none shadow-none outline-none border-b-2" />
            </div>
          ))}
        </div>
        {formFields.slice(2).map((field, index) => (
          <div key={field.id} className={`mb-4 ${index > 0 ? 'py-4' : ''}`}>
            <label htmlFor={field.id} className="block text-sm font-medium text-gray-700">{field.label}</label>
            {field.type === 'textarea' ? (
              <textarea id={field.id} name={field.name} rows={4} className="mt-1 block bg-transparent w-full border-gray-300 rounded-none shadow-none outline-none border-b-2"></textarea>
            ) : (
              <input type={field.type} id={field.id} name={field.name} className="mt-1 block bg-transparent w-full border-gray-300 rounded-none shadow-none outline-none border-b-2" />
            )}
          </div>
        ))}
        <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
