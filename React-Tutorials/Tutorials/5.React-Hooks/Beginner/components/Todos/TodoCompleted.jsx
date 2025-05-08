import React, { useState, useRef } from 'react';
import './Todo.css';

const TodoCompleted = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const addTodo = (task) => {
        setTodos((prevTodos) => [...prevTodos, task]);
        inputRef.current.value = ''; // Clear the input field
    };

    const removeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting
        const newTodo = inputRef.current.value.trim();
        if (newTodo === '') return;
        addTodo(newTodo);
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo} <button onClick={() => removeTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoCompleted;
