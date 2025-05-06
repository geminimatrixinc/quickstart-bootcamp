import React, { useState } from 'react';

const BasicFormTask = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted with value: ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
            <p>Current Value: {inputValue}</p>
        </form>
    );
};

export default BasicFormTask;
