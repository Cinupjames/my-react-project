import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
   
  const [selectedYear, setSelectedYear] = useState("2020");
  const selectYearHandler = (year) => {
    setSelectedYear(year);
   
  };

  const filterItem= props.item.filter((expense)=> expense.date.getFullYear().toString()===selectedYear
  )
  return (
    
    <Card className="expenses">
       
      <ExpensesFilter
        onSelectYearChange={selectYearHandler}
        selectedValue={selectedYear}
      />
       {filterItem.length=== 0 && (<p>No Data Found</p>) }
      {filterItem.length > 0 && 
      (
 filterItem.map(expense=>(
            
            <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
 )
  }
    </Card>
  );
};
export default Expenses;
