import React from 'react';


// Child Component
const Counter = (props) => {
    return (
        <div>
            <h2>Count in Child Component: {props.count}</h2>
            <button onClick={props.incrementCount}>Increment</button>
        </div>
    );
};

export default Counter;