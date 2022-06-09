//import {createStore} from "redux";
import {configureStore, createSlice} from '@reduxjs/toolkit';
const init = {counter:0,showcounter:true};
const counterslice = createSlice ({
    name:'counter',
    init,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increse(state,action){
            state.counter=state.counter+action.payload;
        },
        toggle(state){
            state.showcounter=!state.showcounter;
        }
    }

})

const store = configureStore({
    reducer:{counter:counterslice.reducer}
});

export const couteractions = counterslice.actions;
export default store;


// const init = {counter:0,showcounter:true};
// const reducer = (state= init,action) =>
// {
//     if(action.type==='increment')
//     {
//         return{
//             counter: state.counter+1,
//             showcounter : state.showcounter
//         }
//     }

//     if(action.type==='increse')
//     {
//         return{
//             counter: state.counter+action.adding,
//             showcounter : state.showcounter
//         }
//     }

//     if(action.type==='decrement')
//     {
//         return{
//             counter:state.counter-1,
//             showcounter : state.showcounter
//         }
//     }

//     if(action.type==='toggle')
//     {
//         return{
//             showcounter : !state.showcounter,
//             counter:state.counter
//         }
//     }
    


//     return state;
// }

