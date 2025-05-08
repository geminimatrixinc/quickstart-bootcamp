import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            newTodo: '',
        };
    }

    addTodo = (task) => {
        this.setState((prevState) => ({
            todos: [...prevState.todos, task],
            newTodo: '', // Clear the input field
        }));
    };

    removeTodo = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos.splice(index, 1);
        this.setState({ todos: updatedTodos });
    };

    handleInputChange = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting
        if (this.state.newTodo.trim() === '') return;
        this.addTodo(this.state.newTodo);
    };

    render() {
        return (
            <div className="App">
                <h1>Todo List</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Add a new todo"
                        value={this.state.newTodo}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>
                            {todo} <button onClick={() => this.removeTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
