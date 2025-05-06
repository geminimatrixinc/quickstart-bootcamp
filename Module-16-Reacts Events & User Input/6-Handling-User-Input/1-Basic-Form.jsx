import React from 'react';

// React Forms:
//Basic usage of form elements in React.
const BasicForm = () => {


    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
            <p>Current Value: {inputValue}</p>
        </div>
    );
};

export default BasicForm;
