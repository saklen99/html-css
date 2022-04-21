import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onAddExpense}) => {
    const [enteredTitle,setEnteredTitle] =useState('');
    const [enteredAmount,setEnteredAmount] =useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            amount:enteredAmount ,
            id: Math.random().toString()          
        };
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        onAddExpense(expenseData)
    };

    return ( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input  type="text" value={enteredTitle} onChange={(e)=>setEnteredTitle(e.target.value)}></input>
                </div> 
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} onChange={(e)=>setEnteredAmount(e.target.value)}></input> 
            </div>
            {/* <div className="new-expense__control">
                <label>Date</label>
                <input type="date"></input> 
            </div> */}
            
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;