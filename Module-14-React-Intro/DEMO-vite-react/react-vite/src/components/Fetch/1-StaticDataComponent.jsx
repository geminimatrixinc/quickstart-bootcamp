import React from 'react';

export const StaticDataComponent = () => {
    // Static data
    const data = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ];

    return (
        <div>
            <h1>Static Data</h1>
            <ul>
                {
                    data.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

