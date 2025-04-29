import { useState, useEffect, use } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

import "./App.css";
import { TodoProvider } from "./context/TodoContext";

// functionality of todo app

function App() {
  // setTodods is an array
  const [todos, setTodods] = useState([]);

  // add todo
  const addTodo = (todo) => {
    // (oldval) => [{ id: Date.now(), ...todo }, ...oldval];
    setTodods((oldval) => [{ ...todo }, ...oldval]);
  };

  // update todo
  const updateTodo = (id, todo) => {
    setTodods((oldtodos) =>
      oldtodos.map((individulTodo) =>
        individulTodo.id === id ? todo : individulTodo
      )
    );

    // oldtodos.map((eachval) => {
    //   if (eachval.id == id) {
    //     todo;
    //   } else {
    //     eachval;
    //   }
    // });
  };

  // delte todo
  const deleteTodo = (id) => {
    // sare todo leke aao jiske id milte nahi ho hence/ creating a new arry except that todo/value

    setTodods((oldtodos) => oldtodos.filter((eachtodo) => eachtodo.id !== id));
  };

  // toggle todo
  // { ...eachtodo, completed: !eachtodo.completed } // overwrite the eachtodo val using new eachtodo val

  const toggleComplete = (id) => {
    setTodods((oldtodos) =>
      oldtodos.map((eachtodo) =>
        eachtodo.id === id
          ? { ...eachtodo, completed: !eachtodo.completed } // overwrite the old val using new val
          : eachtodo
      )
    );
  };

  //local storage

  // getting the todo on secreen from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodods(todos);
    }
  }, []);

  // set the todo in ls when the (todos) makes change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //(key , val)
  }, [todos]);

  // react code
  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleComplete, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((eachtodo) => (
              <div key={eachtodo.id} className="w-full">
                <TodoItem todo={eachtodo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
// Here, todo is a prop — an object that represents a single todo item.
// It's passed down from the parent component (App.jsx).

export default App;
