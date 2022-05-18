import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../Ui/Input';
import { useRef , useState } from 'react';

const MealItemForm = (props) => {

const [amountisvalid , setamountisvalid]=useState(true);

  const  amountinputref = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
  
    const enteredamount =  amountinputref.current.value;
    const enteramountnumber = +enteredamount;
  
    if(enteredamount.trim().length===0 || enteramountnumber < 1 || enteramountnumber > 5 )
  {
    setamountisvalid(false);
    return;
    
  }
  props.onaddtocart(enteramountnumber);
  };
    
  return  (
  <form className={classes.form} onSubmit={submitHandler}>
          <Input
           ref={amountinputref}
           label="Amount" 
           input={{
            id:'amount_'+props.id,
            type:'number',
            min :'1',
            max:'5',
            step:'1',
            defaultValue:'1'
          }}/>
          <button>+Add</button>
          {!amountisvalid && <p>please valid enter amount</p>}
      </form>
  ); 
}

export default MealItemForm