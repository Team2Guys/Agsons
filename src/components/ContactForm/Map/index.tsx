// components/Map.tsx
import React from 'react';

const Map: React.FC = () => {
  return (
    <div className="mt-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14464.500725076008!2d55.1227873!3d24.995862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f136b6d69190b%3A0x1026582358119466!2sAgsons%20Middle%20East%20Trading%20LLC!5e0!3m2!1sen!2sae!4v1719555812301!5m2!1sen!2sae"
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
