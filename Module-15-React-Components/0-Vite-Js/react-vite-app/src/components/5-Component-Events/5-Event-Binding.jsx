import React, { useState } from 'react';

// Event binding in React is done using camelCase syntax directly in the JSX, 
// which automatically binds the event to the component's instance.
const BindingExample = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={handleClick}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
};

export default BindingExample;
