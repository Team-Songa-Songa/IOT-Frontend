import React, { useState } from 'react';

const ToggleSwitch = ({ label, initialState }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="flex items-center justify-between mb-2">
      <span>{label}</span>
      <div
        onClick={handleToggle}
        className={`cursor-pointer w-10 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isOn ? 'bg-green-500' : 'bg-yellow-500'}`}
      >
        <div className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform duration-300 ${isOn ? 'translate-x-4' : 'translate-x-0'}`}></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
