import React ,{useReducer} from 'react'

const intialstate=0;

const reducer=(state,action)=>{
 if(action.type==="increment")
 {
     return state+1;
 }
 if(action.type==="decrement")
 {
     return state-1;
 }
 return state;
}

const Count = () =>
{
   const[state,deliver] = useReducer(reducer,intialstate);

   return(
       <>
       <div>
           <p>{state}</p>
           <button onClick={()=>deliver({type:"increment"})}>inc</button>
           <button onClick={()=>deliver({type:"decrement"})}>dec</button>
       </div>
       </>
   )
}

export default Count;