import React,{useState} from "react";

import ExpenseForm  from "./ExpenseForm";
import './NewExpense.css';
//import { useState } from "react";

const NewExpense = (props) => {
   const [isEditing,setIsEditing]=useState(false);

  const saveExpenseDataHandler=(enteredExpenseData) => {
   /**
    * 
    * enteredExpenseData {
    *    title : book
    *    amount : 23.78
    *    date : 20-12-2003
    * }
    */
    const expenseData = {
       ...enteredExpenseData,
       id: Math.random().toString()
    };
    

    /**
     * 
     *  expenseData{
     *  title : book
    *    amount : 23.78
    *    date : 20-12-2003
      * id: 46yy564646
     * }
     */
     props.onAddExpense(expenseData);
     setIsEditing(false);
  };

  const startEditingHandeler = () => {
    setIsEditing(true);
  }

  const stopEditingHandeler = () => {
    setIsEditing(false)
  }

    return (
     <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandeler}>Add New Expenses</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandeler}></ExpenseForm>}
    </div>
    );
};

export default NewExpense;