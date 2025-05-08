import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import Sibling from './components/Sibling';
import FruitList from './components/FruitList';

// Parent Component
const App = () => {
    // Lifting up state
    const [count, setCount] = useState(0);
    const [error, setError] = useState(null);

    // Function to update state
    const handleIncrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };


    const handleDecrementCount = () => {
        setCount((prevCount) => prevCount -1);
    }
    return (
        <div>
            <h1>Count in Parent Component: {count}</h1>
            {/* Pass state and updater function as props to child component */}
            {/* <Counter count={count} incrementCount={handleIncrementCount} />
            <Sibling count={count} decrementCount={handleDecrementCount}/> */}
            <FruitList />
        </div>
    );

};

export default App;
