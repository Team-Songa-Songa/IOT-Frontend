import React from 'react';

const CardDisplay = ({ title, content }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-sm text-gray-600">{content}</p>
    </div>
  );
};

export default CardDisplay;
