import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './store/actions';

function App({ todos, addTodo, deleteTodo, toggleTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo({
        id: Date.now(),
        text: inputValue,
        completed: false,
      });
      setInputValue('');
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, deleteTodo, toggleTodo })(App);
