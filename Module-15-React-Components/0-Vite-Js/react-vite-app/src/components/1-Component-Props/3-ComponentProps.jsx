/* eslint-disable react/prop-types */


const Greeting = (props) => {
    return <h1>Good {props.timeOfDay}, {props.name}! {props.course}</h1>;
}

export default Greeting;
