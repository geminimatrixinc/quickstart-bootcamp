// Handling Events in React
// 1. Event handlers are passed as functions in React.
// 2. The event handler function is triggered when the event occurs(e.g., click, form submit).
// 3. handleClick is passed as an event handler for the onClick event.

function ButtonEvent() {
    
    function handleClick() {
        alert('Button clicked!');
    }



    return <button onClick={handleClick}>Click Me!</button>; 
}

export default ButtonEvent;