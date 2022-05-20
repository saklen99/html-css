import React from 'react';
import { useState,useCallback} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import Demooutput from './components/Demo/Demooutput';

function App() {

  const [paragraph,setparagraph]=useState(false);
  const [paragraph1,setparagraph1]=useState(false);

  const handler = useCallback(()=>
  {
    if(paragraph1){
    setparagraph(!paragraph);
    }
  },[paragraph1]);

const handler1 = () =>
{
  setparagraph1(true)
} 


  return (
    <div className="app">
      <h1>Hi there!</h1>
      
      <Demooutput show={paragraph}/>
      <Button onClick={handler}>is show</Button>
      <Button onClick={handler1}>is show1</Button>
    </div>
  );
}

export default App;
