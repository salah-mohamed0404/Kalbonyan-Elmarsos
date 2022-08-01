import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

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
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
