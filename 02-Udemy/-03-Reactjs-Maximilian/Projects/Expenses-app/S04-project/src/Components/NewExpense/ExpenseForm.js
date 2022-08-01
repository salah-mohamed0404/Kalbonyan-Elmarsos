import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (e) => setEnteredTitle(e.target.value);

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (e) => setEnteredAmount(e.target.value);

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (e) => setEnteredDate(e.target.value);

  const clearInput = () => {
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  const submitHandler = function (e) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    clearInput();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className=".new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2020-01-01"
            max="2032-12-31"
            onChange={dateChangeHandler}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
