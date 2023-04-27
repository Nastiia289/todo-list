import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo } from './store/actions';

class TodoList extends React.Component {
  state = {
    todoText: ''
  };

  handleAddTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({ todoText: '' });
  };

  handleDeleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  handleChange = (e) => {
    this.setState({ todoText: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddTodo}>
          <input
            type="text"
            placeholder="Add a todo"
            value={this.state.todoText}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.props.todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
