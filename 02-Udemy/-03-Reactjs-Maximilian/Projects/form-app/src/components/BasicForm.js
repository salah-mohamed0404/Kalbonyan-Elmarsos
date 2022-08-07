import useInput from "../hooks/use-input";

const BasicForm = props => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    InputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    InputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput(value => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    InputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes("@"));

  let formIsValid = false;
  if (enteredEmailIsValid && enteredFirstNameIsValid && enteredLastNameIsValid)
    formIsValid = true;
  else formIsValid = false;

  const resetInputs = () => {
    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const formSubmissionHandler = function (e) {
    e.preventDefault();

    resetInputs();
  };

  const firstNameInputClasses = `form-control ${
    firstNameInputHasError ? " invalid" : ""
  }`;

  const lastNameInputClasses = `form-control ${
    lastNameInputHasError ? " invalid" : ""
  }`;

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className="error-text">First name must not be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Email must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
