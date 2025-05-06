/* eslint-disable react/prop-types */

// Functional components are simpler and typically used in modern React applications.
//
// 1. props.name allows data to be passed from parent to child
function WelcomeFunc(props) {  
    const name = props.name ?  props.name : "Good Morning";
    return <h1>Hello, {name}! {props.comment}</h1>;
}


export default WelcomeFunc;


/// <WelcomeFunc /> - no props
// <WelcomeFunc name="John" comment="Have a great day!" lastname="last" /> - with props