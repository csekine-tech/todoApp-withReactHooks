import { useReducer } from "react";

import TodoListContext from "./todolist-context";

const defaultTodoListState = {
  todos: [],
};
const todoListReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTodoList = state.todos.concat(action.todo);
    return { todos: updateTodoList };
  }
  if (action.type === "REMOVE") {
    const updateTodoList = state.todos.filter((todo) => todo.id !== action.id);
    return { todos: updateTodoList };
  }
  if (action.type === "EDIT") {
    const updateTodoList = [];
    state.todos.map((todo) => {
      if (todo.id === action.todo.id) {
        updateTodoList.push(action.todo);
      } else {
        updateTodoList.push(todo);
      }
      return updateTodoList;
    });
    return { todos: updateTodoList };
  }
  return defaultTodoListState;
};
const TodoListProvider = (props) => {
  const [todoListState, dispatchTodoListAction] = useReducer(
    todoListReducer,
    defaultTodoListState
  );
  const addTodoHandler = (todo) => {
    dispatchTodoListAction({ type: "ADD", todo: todo });
  };
  const removeTodoHandler = (id) => {
    dispatchTodoListAction({ type: "REMOVE", id: id });
  };
  const editTodoHandler = (todo) => {
    dispatchTodoListAction({ type: "EDIT", todo: todo });
  };

  const todoListContext = {
    todos: todoListState.todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    editTodo: editTodoHandler,
  };
  return (
    <TodoListContext.Provider value={todoListContext}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListProvider;
