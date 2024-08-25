import React, { useState } from 'react';
import ParameterSelector from "../../components/Reusable_Components/ParameterSelector";
import CardDisplay from "../../components/Reusable_Components/CardDisplay";
import CheckboxOption from "../../components/Reusable_Components/CheckboxOption";

const EditPage = () => {
    const parameters = [
        {
            label: 'Parameter 1',
            value: 'param1',
            hasToggle: true,
            toggleActive: false,
            options: [
                { label: 'Option 1', value: 'option1' },
                { label: 'Option 2', value: 'option2' }
            ]
        },
        {
            label: 'Parameter 2',
            value: 'param2',
            hasToggle: false,
            options: [
                { label: 'Option A', value: 'optionA' },
                { label: 'Option B', value: 'optionB' }
            ]
        },
        // Add more parameters as needed
    ];

    const [settings, setSettings] = useState({
        localControlMode: false,
        remoteControlMode: false,
        pumpStatus: false,
        // Add more settings as needed
    });

    const handleCheckboxChange = (setting) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [setting]: !prevSettings[setting]
        }));
    };

    return (
        <div className="p-4 bg-gray-50 min-h-screen">
            <h1 className="text-xl font-semibold text-gray-700 mb-6">Site Configuration</h1>
            <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Select Display Parameters</h2>
                <div className="flex flex-col gap-4 mb-6">
                    {parameters.map(param => (
                        <ParameterSelector key={param.label} parameter={param} />
                    ))}
                </div>
            </section>
            <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Choose the Parameters for Your Site</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <CheckboxOption
                        label="Local Control Mode"
                        checked={settings.localControlMode}
                        onChange={() => handleCheckboxChange('localControlMode')}
                    />
                    <CheckboxOption
                        label="Remote Control Mode"
                        checked={settings.remoteControlMode}
                        onChange={() => handleCheckboxChange('remoteControlMode')}
                    />
                    <CheckboxOption
                        label="Pump Status"
                        checked={settings.pumpStatus}
                        onChange={() => handleCheckboxChange('pumpStatus')}
                    />
                    {/* Add more checkboxes as needed */}
                </div>
            </section>
            <section>
                <h2 className="text-lg font-bold text-gray-800 mb-4">Data Displays</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <CardDisplay title="Card 1" content="Details about Card 1" />
                    <CardDisplay title="Card 2" content="Details about Card 2" />
                    {/* Add more cards as needed */}
                </div>
            </section>
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md p-2 transition duration-150 ease-in-out">
                Submit
            </button>
        </div>
    );
};

export default EditPage;
