import React from 'react';

// Class components manage state using this.state.
// 1. this.state holds the state data.
// 2. this.setState is used to update state, triggering a re - render.

class CounterClass extends React.Component {
    // initializing state in the constructor
    constructor(props) {
        super(props); // parent constructor(props)
        this.state = { count: 0, isAdmin: false }; // Initialize state
    }

    // Lifecycle methods
    componentDidUpdate() {
        debugger;
        console.log(`component state did update`)
    }

    render() {
        return (
            <>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1, isAdmin: true })}>
                    Increment
                </button>
            </>
        );
    }
}

export default CounterClass;