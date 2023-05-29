import React, { useState } from 'react';
import './App.css'
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new to-do item"
          value={newTodo}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="list">
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
