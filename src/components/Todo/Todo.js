import React, { useContext, useState } from "react";
import TodoListContext from "../../store/todolist-context";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Input, Button, ButtonGroup, Box, TextField } from "@mui/material";

const ariaLabel = { "aria-label": "description" };

const Todo = ({ id, content, date }) => {
  const todoListCtx = useContext(TodoListContext);
  const [enteredContent, setEnteredContent] = useState(content);
  const [enteredDate, setEnteredDate] = useState(date);
  const contentChangeHandler = (e) => {
    e.preventDefault();
    setEnteredContent(e.target.value);
  };
  const dateChangeHandler = (e) => {
    // e.preventDefault();
    // setEnteredDate(e.target.value.toLocaleString("ja-JP"));
    setEnteredDate(e);
    // console.log(date);
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
      <Box sx={{ m: 2 }}>
        <span>id:{id}</span>
        <br />

        <TextField
          label="content"
          inputProps={ariaLabel}
          type="text"
          value={enteredContent}
          onChange={contentChangeHandler}
          fullWidth
          margin="normal"
        />

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={enteredDate}
            onChange={dateChangeHandler}
            inputFormat="yyyy/MM/dd"
            mask="____/__/__"
            renderInput={(params) => (
              <TextField {...params} fullWidth margin="normal" />
            )}
          />
        </LocalizationProvider>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          fullWidth
        >
          <Button onClick={editTodoHandler}>edit</Button>
          <Button onClick={removeTodoHandler}>delete</Button>
        </ButtonGroup>
      </Box>
    </li>
  );
};
export default Todo;
