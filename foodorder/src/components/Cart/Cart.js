import React from 'react'
import Modal from '../Ui/Modal';
import classes from './Cart.module.css'

const Cart = (props) => {
    const Cartitem = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'sp', amount: 2, price: 12.99 }].map((item) => (<li>{item.name}</li>))}
        </ul>
    );
    return (
        <Modal>
            {Cartitem}
            <div className={classes.total}>
                <span>Amount</span>
                <span>65.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onclick}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    );
}

export default Cart