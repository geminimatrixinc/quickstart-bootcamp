import React from 'react';

function Todo() {
    const headerStyle = { textAlign: 'center', color: 'darkblue' }
    const inputSytle = {
        backgroundColor: 'darkblue',
        color: 'white',
        padding: '5px 10px',
        border: 'none',
        marginLeft: '5px',
    };

    return (
        <div>
            <h1 style={headerStyle}>My To-Do List</h1>
            <div style={{ textAlign: 'center' }}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    style={{ padding: '5px' }}
                />
                <button style={inputSytle}>
                    Add
                </button>
            </div>
            <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                {/* Task items will be added here */}
            </ul>
        </div>
    );
}

export default Todo;
