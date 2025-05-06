import React from 'react';

// Class components manage state using this.state.
// 1. this.state holds the state data.
// 2. this.setState is used to update state, triggering a re - render.

class CounterClass extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}

export default CounterClass;