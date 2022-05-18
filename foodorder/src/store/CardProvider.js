import React from 'react'
import CardContext from './cart-context'
import { useReducer } from 'react';


const defaultcartstate = {
    items: [],
    totalamount: 0
};

const cartreducer = (state, action) => {
    if (action.type === 'add') {
        const updateitems = state.items.concat(action.item);
        const updatetotalamount = state.totalamount + action.item.price * action.item.amount;
        return {
            items: updateitems,
            totalamount: updatetotalamount
        };
    }
    return defaultcartstate;
};

    const CardProvider = (props) => {
        const [cartstate, dispatch] = useReducer(cartreducer, defaultcartstate);

        const additemtocart = (item) => {
            dispatch({ type: 'add', item: item });
        };
        const removeitemfromcard = (id) => {
            dispatch({ type: 'remove', id: id });
        };
        const CartContext = {
            items: cartstate.items,
            totalamount: cartstate.totalamount,
            additem: additemtocart,
            removeitem:removeitemfromcard
        }
        return (<CardContext.Provider value={CartContext}>
            {props.children}
        </CardContext.Provider>
        );
        }   


export default CardProvider