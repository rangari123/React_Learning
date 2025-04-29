// create context

import { createContext, useContext } from "react";

// create the context
export const TodoContext = createContext({
  // values
  todos: [
    {
      id: 1,
      todo: "use todo",
      completed: false,
    },
  ],
  // methods
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// custom hook
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider
export const TodoProvider = TodoContext.Provider;
