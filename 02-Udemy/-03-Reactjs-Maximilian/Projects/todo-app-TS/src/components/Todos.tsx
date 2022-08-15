import { useContext } from "react";
import { TodoContext } from "../store/todos-context";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
