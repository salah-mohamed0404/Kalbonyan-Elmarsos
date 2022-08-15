import { useContext, useRef } from "react";
import { TodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = function () {
  const todosCtx = useContext(TodoContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = function (e: React.FormEvent) {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    todosCtx.addTodo(enteredText);
    todoTextInputRef.current!.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
