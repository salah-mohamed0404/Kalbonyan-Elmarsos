import { createContext, FC, useState } from "react";
import Todo from "../modals/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (todoId: string) => void;
};

export const TodoContext = createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (todoId: string) => {},
});

const TodoContextProvider: FC<{ children: JSX.Element }> = props => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = function (todotext: string) {
    const newTodo = new Todo(todotext);

    setTodos(prevState => [...prevState, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
