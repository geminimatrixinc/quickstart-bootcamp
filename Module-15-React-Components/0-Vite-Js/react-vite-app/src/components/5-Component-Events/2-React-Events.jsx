import React from 'react';

// React Events are managed by React's synthetic event system. 
// They provide a consistent API across different browsers, 
// whereas DOM Events are the native events provided by the browser.

const ReactEventExample = () => {
    
    const handleClick = (event) => {
        console.log('React Event:', event);
        console.log('React Event Target:', event.target);
        console.log('React Event Type:', event.type);
        console.log('React Event Target Value:', event.target.value);
    };

    return (
        <button onClick={handleClick}>Click Me (React Event)</button>
    );
};

export default ReactEventExample;
