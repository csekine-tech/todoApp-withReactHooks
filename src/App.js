import "./App.css";
import TodoList from "./components/Todo/TodoList";
import Header from "./UI/Header";
import Form from "./components/Form";
import TodoListProvider from "./store/TodoListProvider";
import { CssBaseline, Box, Container, Card } from "@mui/material/";

function App() {
  return (
    <>
      <Header />
      <TodoListProvider>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box sx={{}}>
            <Card sx={{ my: 4 }}>
              <Form />
            </Card>
            <TodoList />
          </Box>
        </Container>
      </TodoListProvider>
    </>
  );
}

export default App;
