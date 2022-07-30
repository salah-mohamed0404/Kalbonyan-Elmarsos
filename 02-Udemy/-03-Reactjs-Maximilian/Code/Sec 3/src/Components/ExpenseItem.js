import "./ExpenseItem.css";

function ExpenseItem() {
  const expensDate = new Date(2021, 2, 280);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div className="expense-item">
      <div>{expensDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
