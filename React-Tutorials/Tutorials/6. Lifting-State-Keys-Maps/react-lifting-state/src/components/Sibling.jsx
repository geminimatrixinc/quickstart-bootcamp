import React from "react";

const Sibling = (props) => {
    return <>
        <h2>Sibling: {props.count}</h2>
        <button onClick={props.decrementCount}>Click Me</button>
    </>
}

export default Sibling;