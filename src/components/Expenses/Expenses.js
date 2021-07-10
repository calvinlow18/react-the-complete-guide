import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {

  const [filteredYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }

  const filteredExpenses = props.items
    .filter(expense => expense.date.getFullYear() === parseInt(filteredYear));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterYearSelected={filterChangeHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
    
  );
};

export default Expenses;
