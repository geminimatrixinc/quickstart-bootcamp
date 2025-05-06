
import React, { useRef } from 'react';

// useRef can be used for accessing DOM elements directly, 
// as shown in the uncontrolled component example above. 

const FocusInputExample = () => {
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
