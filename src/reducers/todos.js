const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.message],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.filter((todo) => todo.id !== action.id),
          action.message,
        ],

        // let index = action.index;
        // todos: [
        //   ...state.todos.slice(0, action.index),
        //   { ...state[action.index], todo: action.message },
        //   ...state.todos.slice(action.index + 1),
        // ],

        // todos: [
        //   ...state.todos.map((todo) => {
        //     if (todo === action.oldtask) todo = action.newtask;
        //   }),
        // ],
      };
    default:
      return state;
  }
};

export default todos;
