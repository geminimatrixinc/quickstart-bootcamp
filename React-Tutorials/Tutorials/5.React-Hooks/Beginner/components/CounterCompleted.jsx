
// Example 1: Using useState
import React, { useState } from 'react';

function CounterCompleted() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default CounterCompleted;
