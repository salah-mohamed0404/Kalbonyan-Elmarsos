import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const usernameChangeHandler = e => setEnteredUsername(e.target.value);

  const [enteredAge, setEnteredAge] = useState("");
  const ageChangeHandler = e => setEnteredAge(e.target.value);

  const clear = function () {
    setEnteredAge("");
    setEnteredUsername("");
  };

  const addUserHandler = function (e) {
    e.preventDefault();
    props.onAddUser(enteredUsername, enteredAge);
    clear();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={enteredUsername}
          type="text"
          onChange={usernameChangeHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          value={enteredAge}
          type="number"
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
