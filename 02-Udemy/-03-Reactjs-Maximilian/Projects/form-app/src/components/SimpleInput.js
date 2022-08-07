import { useEffect, useState } from "react";

const SimpleInput = props => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); // it make much sense if i send data to the server if name is valid so it much better as this
  // const [formIsValid, setFormIsValid] = useState(false);
  let formIsValid = false;

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // we here in condition compine all validation inputs
  if (enteredNameIsValid) formIsValid = true;
  else formIsValid = false;

  const nameInputChangeHandler = function (e) {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = function (e) {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = function (e) {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = `form-control ${
    nameInputIsInvalid ? " invalid" : ""
  }`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
