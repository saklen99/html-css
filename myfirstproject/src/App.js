import Expenseitem from './components/Expenseitem';
import react from 'react';
import ExpenseForm from './components/NewExpense/ExpenseForm';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Paper',
    amount: 94.12,
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
  },
];
const App = () =>
 {
   const[data,setData] = useState(DUMMY_EXPENSES);
   const addExpenseHandler = expense => {
     console.log('expense',expense)
     setData([...data,expense])
   };

  
  return (

  <div>
    <ExpenseForm onAddExpense={addExpenseHandler}></ExpenseForm>
   {data && data.map(expense => <Expenseitem title={expense.title}  amount={expense.amount}/>)} 
  </div>
  );
}
export default App;
