import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {

  const [filteredYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterYearSelected={filterChangeHandler} />
        {
          props.items
            .filter(expense => expense.date.getFullYear() === parseInt(filteredYear))
            .map(expense => <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />)
        }
      </Card>
    </div>
    
  );
};

export default Expenses;
