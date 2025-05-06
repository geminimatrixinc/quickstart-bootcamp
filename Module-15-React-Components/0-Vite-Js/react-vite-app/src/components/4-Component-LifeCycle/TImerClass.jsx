import React from 'react';

//  Lifecycle Methods in Class Components

// Class components can manage the lifecycle using methods like 
// componentDidMount, componentDidUpdate, and componentWillUnmount.

// 1. componentDidMount is invoked once when the component is first rendered.
// 2. componentWillUnmount is called before the component is removed.

class TimerClass extends React.Component {

    // constructor() {
    //     super();
    // }


    // componentDidMount is called after the component is mounted (inserted into the tree).
    componentDidMount() {
        debugger;
        console.log('Component mounted');
    }

    // componentWillUnmount is called just before the component is unmounted and destroyed.
    componentWillUnmount() {
        debugger
        console.log('Component will unmount');
    }
    // componentDidUpdate is called after the component is updated (re-rendered).
    componentDidUpdate() {
        debugger
        console.log(`Component did update..`)
    }


    render() {
        return <p>Timer is running...</p>;
    }
}


export default TimerClass;