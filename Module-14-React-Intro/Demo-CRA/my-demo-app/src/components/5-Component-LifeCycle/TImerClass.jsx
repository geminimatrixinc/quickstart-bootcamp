import React from 'react';

//  Lifecycle Methods in Class Components

// Class components can manage the lifecycle using methods like 
// componentDidMount, componentDidUpdate, and componentWillUnmount.

// 1. componentDidMount is invoked once when the component is first rendered.
// 2. componentWillUnmount is called before the component is removed.

class TimerClass extends React.Component {

    componentDidMount() {

        debugger; 
        console.log('Component mounted');
    }

    componentWillUnmount() {

        debugger; 
        console.log('Component will unmount');
    }

    render() {
        return <p>Timer is running...</p>;
    }
}


export default TimerClass;