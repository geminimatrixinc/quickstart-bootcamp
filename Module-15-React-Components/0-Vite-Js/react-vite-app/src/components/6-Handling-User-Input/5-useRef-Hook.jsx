
import React, { useRef } from 'react';

// useRef can be used for accessing DOM elements directly, 
// as shown in the uncontrolled component example above. 

// useRef: when to use it in 3 mins
// https://www.youtube.com/watch?v=gLvsc3gjZnc

const FocusInputExample = () => {
    // useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>Focus the input</button>
        </div>
    );
};

export default FocusInputExample;
