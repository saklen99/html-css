import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
function App() {
  const[us,uss]=useState([]);
  const add=(u,n)=>
  {
    uss((pre)=>{
      return[...pre,{name:u,age:n}];
    })
  }
  return (
    <div>
      <AddUser onAdduser={add} />
      <UsersList users = {us} />
    </div>
  );
}

export default App;
