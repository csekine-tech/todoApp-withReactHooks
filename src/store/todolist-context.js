import React from "react";

const TodoListContext = React.createContext({
  todos: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  editTodo:(todo) => {},
});
export default TodoListContext;
