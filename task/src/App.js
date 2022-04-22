import logo from './logo.svg';
import './App.css';
import Child from './Second/Child';
import {useState} from 'react';
function App() {
let[data,setdata]=useState({
  'firstName':'',
  'lastName': ''
});

let handleChange = (e) =>{
// let name =e.target.name;
// let value =e.target.value;
let {name,value} = e.target;

setdata({...data,[name] : value});
console.log(data);
};

let onSubmit =(e) =>{
  e.preventDefault();
  console.log(data);
};
  

  return (
    <form onSubmit={onSubmit}>
   <div className="first">
     <label>
       first name:
     </label>
     <input type="text" name="firstName" value={data.firstName} onChange={handleChange} ></input><br></br>
     <label>
       last name:
     </label>
     <input type="text" name="lastName" value={data.lastName} onChange={handleChange} ></input><br></br>
    <button type="submit">submit</button>
    <Child data={data} />
   </div>
   </form>
   
  );
}

export default App;
