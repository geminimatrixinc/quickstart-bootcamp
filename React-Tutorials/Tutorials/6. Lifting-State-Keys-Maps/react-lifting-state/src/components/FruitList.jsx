import React, { useState } from 'react';

const FruitList = () => {
    //const [fruits, setFruits] = useState(["Apple", "Banana", "Cherry", "Strawberry"]);
    const fruits = ["Apple", "Banana", "Cherry", "Strawberry"];  /// mock data...

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {
                    fruits.map((fruit, index) => (
                        <li key={index}>{fruit}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FruitList;