
import React from 'react';

// React Forms:
//Basic usage of form elements in React.
const BasicForm = () => {


    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <input type="text"  onChange={handleChange} />
            <p>Current Value: </p>
        </div>
    );
};

export default BasicForm;
