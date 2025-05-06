/* eslint-disable react/prop-types */

import  React  from 'react';

// Class components use a render() method and are stateful.
//
// 1. The class component accesses props using this.props.
// 2. It must include a render() method that returns JSX.

class WelcomeClass extends React.Component {
    render() {
        return <h1>Hello, {this.props.firstName} {this.props.lastName} {this.props.street}!</h1>;
    }
}

export default WelcomeClass;