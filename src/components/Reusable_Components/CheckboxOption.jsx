import React from 'react';

const CheckboxOption = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <label className="ml-2 text-gray-700">{label}</label>
    </div>
  );
};

export default CheckboxOption;
