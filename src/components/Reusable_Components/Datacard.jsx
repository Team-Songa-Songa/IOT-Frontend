import React from 'react';

const DataCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">{title}</h2>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  );
};

export default DataCard;
