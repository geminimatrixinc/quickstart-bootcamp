//  Embedding Expressions in JSX

// You can embed JavaScript expressions inside curly braces { } in JSX:
// 1. props.name: props are used to pass data from one component to another. 
//In this case, we are passing a name and embedding it in the JSX.

function JsxExpression() {

    const name = "World";

    return <h1>Hello, {name}! { 1 + 2 + 3 }</h1>;
}

export default JsxExpression;
