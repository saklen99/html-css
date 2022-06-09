import { useSelector, useDispatch } from 'react-redux';
import {couteractions} from '../store/index';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const show = useSelector(state => state.showcounter);

  const incrementhandler = () => 
  {
      dispatch(couteractions.increment());
  }

  

  const decrementhandler = () => 
  {
      dispatch(couteractions.decrement());
  }
  const incresehandler = () => 
  {
      dispatch(couteractions.increse(6));
  }
  const toggleCounterHandler = () => {
    dispatch(couteractions.toggle());
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={incresehandler}>increment by 5 </button>
        <button onClick={decrementhandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
