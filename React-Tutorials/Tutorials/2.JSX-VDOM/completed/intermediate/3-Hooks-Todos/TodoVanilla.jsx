import React, { useState, useRef } from 'react';
import './Todo.css';

const TodoCompleted = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    const addTodo = (task) => {
        // Using vanilla JavaScript push instead of spread operator
        const newTodos = Array.from(todos); // create a copy of the existing todos
        newTodos.push(task); // add the new task to the copy
        setTodos(newTodos); // set the new todos array

        // setTodos((prevTodos) => [...prevTodos, task]); // Using spread operator
        inputRef.current.value = ''; // Clear the input field
    };

    const removeTodo = (index) => {
        // Using vanilla JavaScript splice instead of spread operator
        const updatedTodos = Array.from(todos); // create a copy of the existing todos
        updatedTodos.splice(index, 1); // remove the item at the specified index
        setTodos(updatedTodos); // set the new todos array

        // const updatedTodos = [...todos]; // Using spread operator
        // updatedTodos.splice(index, 1); // Using spread operator
        // setTodos(updatedTodos); // Using spread operator
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
