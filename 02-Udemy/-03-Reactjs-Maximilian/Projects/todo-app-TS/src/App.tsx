import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./modals/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = function (todotext: string) {
    const newTodo = new Todo(todotext);

    setTodos(prevState => [...prevState, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
