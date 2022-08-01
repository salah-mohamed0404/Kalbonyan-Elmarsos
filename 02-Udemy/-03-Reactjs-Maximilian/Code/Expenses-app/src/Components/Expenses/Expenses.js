import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filtteredYear, setFiltteredYear] = useState("2021");
  const selectYearHandler = (selectedYear) => {
    setFiltteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => String(expense.date.getFullYear()) === filtteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filtteredYear}
          onSelected={selectYearHandler}
        />
        {/* dynamic JSX */}
        {filteredExpenses.length === 0 && <p>No Expenses are found!</p>}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
