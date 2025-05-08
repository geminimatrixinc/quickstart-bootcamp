import React from 'react';
import Counter from './Counter';
import DataFetching from './DataFetching';
import ThemeButton from './ThemeButton';
import CounterWithReducer from './CounterWithReducer';



function App() {
    return (
        <div>
            <h1>React Hooks Examples</h1>
            <Counter />
            <DataFetching />
            <ThemeButton />
            <CounterWithReducer />
        </div>
    );
}

export default App;
