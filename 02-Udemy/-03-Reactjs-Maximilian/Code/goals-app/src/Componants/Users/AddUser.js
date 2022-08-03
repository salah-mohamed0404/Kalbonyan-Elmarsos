import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const nameInput = useRef();
  const ageInput = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const usernameChangeHandler = e => setEnteredUsername(e.target.value);

  // const [enteredAge, setEnteredAge] = useState("");
  // const ageChangeHandler = e => setEnteredAge(e.target.value);

  const [error, setError] = useState();

  const clear = function (nameInput, ageInput) {
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const validatError = function (enteredUsername, enteredAge) {
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non- empty values).",
      });
      return true;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age ( > 0 ).",
      });
      return true;
    }
  };

  const addUserHandler = function (e) {
    e.preventDefault();
    const enteredUsername = nameInput.current.value;
    const enteredAge = ageInput.current.value;
    if (validatError(enteredUsername, enteredAge)) return;
    props.onAddUser(enteredUsername, enteredAge);
    clear(nameInput, ageInput);
  };

  const errorHandler = () => setError(null);

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInput} />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

export default AddUser;
