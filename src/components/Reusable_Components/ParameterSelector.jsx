import React, { useState } from 'react';

const ParameterSelector = ({ parameter }) => {
  const [toggle, setToggle] = useState(parameter.toggleActive || false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  // Check if options exist and have length before trying to map over them
  const optionsExist = parameter.options && parameter.options.length > 0;

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4 flex flex-col md:flex-row justify-between items-center">
      <label className="font-medium text-gray-700">{parameter.label}</label>
      {optionsExist ? (
        <select
          className="mt-1 md:mt-0 form-select block w-full md:w-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          value={parameter.value}
          onChange={(e) => console.log(`Selected: ${e.target.value}`)}
        >
            <option value="">Select an option</option>
          {parameter.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <div className="text-gray-500">No options available</div>
      )}
      {parameter.hasToggle && (
        <div className="flex items-center mt-2 md:mt-0">
          <span className="mr-2 text-sm text-gray-700">Enable</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={toggle}
            onChange={handleToggleChange}
          />
        </div>
      )}
    </div>
  );
};

export default ParameterSelector;
