

// Pass additional arguments to event handlers. 
// This can be done using arrow functions or the bind method.
const ArgumentPassingExample = () => {
    
    const handleClick = (event, message) => {
        debugger
        console.log(event)
        alert(message);
    };

    return (
        <div>
            <button onClick={(event) => handleClick(event, 'Hello World!')}>Click Me</button>
            <input type="text" 
                onFocus={}
                onChange={() => console.log(`on changed`) } placeholder="Type something..." />
        </div>
    );
};

export default ArgumentPassingExample;
