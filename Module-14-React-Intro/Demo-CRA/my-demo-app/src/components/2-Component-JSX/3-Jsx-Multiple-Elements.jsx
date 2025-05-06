// JSX Elements Must Be Wrapped in a Parent Element

// In React, JSX must have only one parent element. If you have multiple elements,
// wrap them inside a parent < div > or React Fragment(<>):

// 1. React Fragments (<> ... </>) are used to avoid adding unnecessary divs or elements to the DOM.

function JsxMultipleElements() {
    return (
        <div>
            <h1>This is a heading</h1>
            <p>This is a paragraph.</p>
        </div>
    );
}

export default JsxMultipleElements;
