import logo from './logo.svg';
import './App.css';
// import Count from './Count';
import Refhook from './Refhook';
import React,{useRef} from 'react';

function App() {
  let inputref=useRef(null)
  function updateinput()
  {
    inputref.current.value="1000"
  }
  return (
    <div >
      {/* <Count /> */}
      <Refhook ref={inputref}/>
      <button onClick={updateinput}>update</button>
    </div>
  );
}

export default App;
