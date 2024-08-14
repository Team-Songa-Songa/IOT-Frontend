import React from 'react';
import './inputField.css'
const InputField = ({ label, type = "text", name, value, onChange, placeholder, required = false }) => {
    return (
        <div className="input-container">
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="input-field"
            />
        </div>
    );
};

export default InputField;
