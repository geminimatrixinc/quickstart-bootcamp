import React, { useState } from 'react';

// TASK - EVENT & CONTROLLED COMPONENTS
//Instructions
// State Management: Create a state variable to store the value of the input field.
// Event Handlers:
// 1. Implement the handleChange function to update the state variable with the value from the input field.
// 2. Implement the handleSubmit function to prevent the default form submission behavior and display the current value of the input field in an alert.
// 3. Render Input Value: Display the current input value below the submit button.


const BasicFormTask = () => {
    // Add state here

    const handleChange = (e) => {
        // Implement handleChange function
    };

    const handleSubmit = (e) => {
        // Implement handleSubmit function
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    value={/* Add state variable here */}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
            {/* Display input value here */}
        </form>
    );
};

export default BasicFormTask;
