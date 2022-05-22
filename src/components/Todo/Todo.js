import React, { useContext, useState } from "react";
import TodoListContext from "../../store/todolist-context";

const Todo = ({ id, content, date }) => {
  const todoListCtx = useContext(TodoListContext);
  const [enteredContent, setEnteredContent] = useState(content);
  const [enteredDate, setEnteredDate] = useState(date);
  const contentChangeHandler = (e) => {
    e.preventDefault();
    setEnteredContent(e.target.value);
  };
  const dateChangeHandler = (e) => {
    e.preventDefault();
    setEnteredDate(e.target.value.toLocaleString("ja-JP"));
    console.log(date);
  };
  const editTodoHandler = () => {
    todoListCtx.editTodo({
      id,
      content: enteredContent,
      date: enteredDate,
    });
  };
  const removeTodoHandler = () => {
    todoListCtx.removeTodo(id);
  };
  return (
    <li>
      <span>id:{id}</span>
      <br />
      <input
        type="text"
        value={enteredContent}
        onChange={contentChangeHandler}
      />
      <br />
      <input type="date" value={enteredDate} onChange={dateChangeHandler} />
      <button onClick={editTodoHandler}>edit</button>
      <button onClick={removeTodoHandler}>delete</button>
    </li>
  );
};
export default Todo;
