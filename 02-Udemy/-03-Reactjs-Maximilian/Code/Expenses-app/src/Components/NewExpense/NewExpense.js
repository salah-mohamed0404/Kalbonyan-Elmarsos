import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenceDataHandler = (enteredExpenseData) =>
    props.onAddExpense({
      ...enteredExpenseData,
      id: Math.random().toString(),
    });

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenceDataHandler} />
    </div>
  );
}

export default NewExpense;
