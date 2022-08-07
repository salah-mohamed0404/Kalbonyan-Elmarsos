import { useState } from "react";

const useInput = function (validValue) {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = function (e) {
    setEnteredValue(e.target.value);
  };

  const InputBlurHandler = function (e) {
    setIsTouched(true);
  };

  const reset = function () {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    InputBlurHandler,
    reset,
  };
};

export default useInput;
