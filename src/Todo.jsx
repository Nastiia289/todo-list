import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./actions/todoActions";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      dispatch(addTodo({
        id: new Date().getTime(),
        title: inputValue.trim(),
        completed: false,
      }));
      setInputValue("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo({
      id: id,
    }));
  };

  const handleToggle = (id) => {
    dispatch(toggleTodo({
      id: id,
    }));
  };

  return (
    <div className="App">
      <div className="todo-list">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                className={todo.completed ? "completed" : ""}
                onClick={() => handleToggle(todo.id)}
              >
                {todo.title}
              </span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
