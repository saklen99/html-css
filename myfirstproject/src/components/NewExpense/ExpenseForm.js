import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] =useState('');
    const [enteredAmount,setEnteredAmount] =useState('');
    console.log('enteredTitle',enteredTitle)
    console.log('enteredAmount',enteredAmount)


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title:enteredTitle,
            Amount:enteredAmount            
        };
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
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
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"></input> 
            </div>
            
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    )
};

export default ExpenseForm;