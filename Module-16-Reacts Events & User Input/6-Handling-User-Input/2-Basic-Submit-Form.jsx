import React, { useState } from 'react';

const BasicSubmitForm = () => {
 
    const handleChange = (e) => {
        console.log(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
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

export default BasicSubmitForm;
