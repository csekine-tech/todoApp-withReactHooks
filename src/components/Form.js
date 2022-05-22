import React, { useState, useContext, useRef } from "react";
import TodoListContext from "../store/todolist-context";
import { Button, Input, TextField, Box } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

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
    // e.preventDefault();
    // setDate(e.target.value.toLocaleString("ja-JP"));
    setDate(e);
    // console.log(date);
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
    <Box component="form" onSubmit={formSubmitHandler} noValidate sx={{ m: 3 }}>
      <TextField
        id="content"
        label="content"
        variant="outlined"
        value={content}
        onChange={contentChangeHandler}
        fullWidth
        margin="normal"
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Date"
          value={date}
          onChange={dateChangeHandler}
          inputFormat="yyyy/MM/dd"
          mask="____/__/__"
          renderInput={(params) => (
            <TextField {...params} fullWidth margin="normal" />
          )}
        />
      </LocalizationProvider>
      <Button variant="contained" type="submit" fullWidth sx={{ mt: 2, mb: 2 }}>
        Add
      </Button>
    </Box>
  );
};
export default Form;
