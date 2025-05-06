/* eslint-disable react/prop-types */

// Functional components are simpler and typically used in modern React applications.
//
// 1. props.name allows data to be passed from parent to child

function WelcomeFunc(props) {
    
    console.log(`props: ${JSON.stringify(props)}`)

    return <h1>Hello, {props.name}!</h1>;
}

export default WelcomeFunc;