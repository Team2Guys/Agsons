// components/Map.tsx
import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7485322461097!2d-74.00601538459356!3d40.71277537933102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3169028ddf%3A0x7d1f91d1d920a8!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1619199923350!5m2!1sen!2sus"
        width="100%"
        height="300"
        allowFullScreen={false}
        loading="lazy"
        className="rounded-lg shadow-lg"
      ></iframe>
    </div>
  );
};

export default Map;
