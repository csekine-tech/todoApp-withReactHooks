import "./App.css";
import TodoList from "./components/Todo/TodoList";
import Form from "./components/Form";
import TodoListProvider from "./store/TodoListProvider";

function App() {
  return (
    <>
      <TodoListProvider>
        <h1>TODO</h1>
        <Form />
        <TodoList />
      </TodoListProvider>
    </>
  );
}

export default App;
