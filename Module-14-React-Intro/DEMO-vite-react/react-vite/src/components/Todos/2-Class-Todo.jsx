import React, { Component } from 'react';

export class ClassTodos extends Component {
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

    handleInputChange = (event) => {
        this.setState({ newTodo: event.target.value });
    };

    handleAddTodo = () => {
        if (this.state.newTodo.trim() === '') return;
        this.addTodo(this.state.newTodo);
    };

    removeTodo = (index) => {
        const updatedTodos = [...this.state.todos];
        updatedTodos.splice(index, 1);
        this.setState({ todos: updatedTodos });
    };

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <h2>Class Component</h2>
                <input
                    type="text"
                    placeholder="Add a new task"
                    onChange={this.handleInputChange}
                    value={this.state.newTodo}
                />
                <button onClick={this.handleAddTodo}>Add</button>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => this.removeTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}