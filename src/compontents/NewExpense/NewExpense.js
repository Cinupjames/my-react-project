import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
const NewExpense = (props) => {
  const saveExpenseDataHandler=(data)=>{
    const expenseData= {
      ...data,
      id:Math.random().toString()
    }
    console.log(data,"data")
    props.onAddExpenseData(expenseData)
  }
  return (
    <div  className='new-expense'>

        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense