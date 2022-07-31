import ExpenseDate from "./ExpenseDate";
import Cards from "./Cards";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Cards className="expense-item">
      <ExpenseDate
        date={props.date}
        title={props.title}
        amount={props.amount}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
