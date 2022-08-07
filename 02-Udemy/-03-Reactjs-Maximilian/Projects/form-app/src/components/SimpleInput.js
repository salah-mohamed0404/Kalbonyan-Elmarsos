import { useRef, useState } from "react";

const SimpleInput = props => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false); // it make much sense if i send data to the server if name is valid so it much better as this

  const nameInputChangeHandler = function (e) {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = function (e) {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(true);
      return;
    }
  };

  const formSubmissionHandler = function (e) {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(true);
      return;
    }

    setEnteredNameIsValid(false);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    setEnteredName("");
  };

  const nameInputIsInvalid = enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = `form-control ${
    enteredNameIsValid ? " invalid" : ""
  }`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
