import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenceDataHandler = (enteredExpenseData) => {
    props.onAddExpense({
      ...enteredExpenseData,
      id: Math.random().toString(),
    });

    hideForm();
  };

  const [formState, changeFormState] = useState(true);

  const showForm = () => changeFormState(false);
  const hideForm = () => changeFormState(true);

  return (
    <div className="new-expense">
      {formState && <button onClick={showForm}>Add New Expense</button>}
      {!formState && (
        <ExpenseForm
          onSaveExpenseData={saveExpenceDataHandler}
          onCancel={hideForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
