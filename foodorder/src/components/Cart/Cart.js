import React from 'react'
import Modal from '../Ui/Modal';
import classes from './Cart.module.css'
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartctx = useContext(CartContext);
     console.log(cartctx);
    const totalamount = `${cartctx.totalamount.toFixed(2)}`;
    const hasitem = cartctx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartctx.removeitem(id);
    };

    const cartItemAddHandler = (item) => {
        cartctx.additem(item);
    };
    
    const Cartitem = (
        <ul className={classes['cart-items']}>
            {cartctx.items.map((item) => (
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}  onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}/> ))}
        </ul>
    );
    return (
        <Modal>
            {Cartitem}
            <div className={classes.total}>
                <span>Amount</span>
                <span>{totalamount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onclick}>close</button>
                {hasitem && < button className={classes.button}>order</button>}
            </div>
        </Modal>
    );
}

export default Cart