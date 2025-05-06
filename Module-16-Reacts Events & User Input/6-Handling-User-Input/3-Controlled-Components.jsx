// Controlled Components:
// Controlled components are those where the form data is handled by the React component’s state.

import React, { useState } from 'react';

const ControlledComponentExample = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
            <p>Input Value: {inputValue}</p>
        </div>
    );
};

export default ControlledComponentExample;
