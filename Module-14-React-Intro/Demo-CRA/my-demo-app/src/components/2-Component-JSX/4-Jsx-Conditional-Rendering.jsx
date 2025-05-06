
//  Conditional Rendering
// You can conditionally render JSX using ternary operators or logical operators:

// 1. The ternary operator is used to check if the user is logged in or not and display different messages accordingly.

function JsxConditionalRender() {

    ///


    ///

    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
        </div>
    );
}

export default JsxConditionalRender;
