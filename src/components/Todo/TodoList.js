import React, { useContext } from "react";
import Todo from "./Todo";
import TodoListContext from "../../store/todolist-context";

const TodoList = () => {
  const todoListCtx = useContext(TodoListContext);
  const todos = todoListCtx.todos;

  return (
    <ul style={{ listStyle: "none", paddingLeft: "0" }}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          id={todo.id}
          content={todo.content}
          date={todo.date}
        />
      ))}
    </ul>
  );
};
export default TodoList;
