import { useState } from 'react';

// State allows a component to manage its own data.

// In functional components, state is managed using React Hooks (useState).
// 1. useState hook is used to manage the component’s state.
// 2. setCount updates the state and triggers a re - render.

function CounterFunc() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default CounterFunc;