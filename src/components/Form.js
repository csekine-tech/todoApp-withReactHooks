import React, { useState, useContext, useRef } from "react";
import TodoListContext from "../store/todolist-context";

const Form = () => {
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const todoListCtx = useContext(TodoListContext);
  const [newId, setNewId] = useState(todoListCtx.todos.length + 1);
  const contentChangeHandler = (e) => {
    e.preventDefault();
    setContent(e.target.value);
  };
  const dateChangeHandler = (e) => {
    e.preventDefault();
    setDate(e.target.value.toLocaleString("ja-JP"));
    console.log(date);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    todoListCtx.addTodo({
      id: newId,
      content: content,
      date: date,
    });
    setContent("");
    setDate("");
    setNewId((prevId) => {
      return prevId + 1;
    });
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="content">content</label>
        <input
          id="content"
          type="text"
          value={content}
          onChange={contentChangeHandler}
        ></input>
      </div>
      <div>
        <label htmlFor="date">date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={dateChangeHandler}
        ></input>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
export default Form;
