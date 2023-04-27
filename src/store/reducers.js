const initialState = {
    todos: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          todos: [...state.todos, action.payload],
        };
      case 'DELETE_TODO':
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload),
        };
      case 'TOGGLE_TODO':
        return {
          todos: state.todos.map((todo) => {
            if (todo.id === action.payload) {
              return { ...todo, completed: !todo.completed };
            } else {
              return todo;
            }
          }),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  