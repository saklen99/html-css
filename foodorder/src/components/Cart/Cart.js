import React from 'react'
import Modal from '../Ui/Modal';
import classes from './Cart.module.css'
import { useContext ,useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
    const[checkcout,setcheckout] = useState(false);
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
     
    const checkouthandler = () =>
    {
        setcheckout(true);
    }

    const orderhandler=(userdata)=>
    {
                fetch('https://react-http-f6d9a-default-rtdb.firebaseio.com/orders.json',{
                    method:'post',
                    body:JSON.stringify({
                        user:userdata,
                        ordereditems:cartctx.items
                    })
                })
    }


    const Cartitem = (
        <ul className={classes['cart-items']}>
            {cartctx.items.map((item) => (
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}  onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}/> ))}
        </ul>

        
    );

   
    const modalaction = <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onclick}>close</button>
        {hasitem && < button className={classes.button} onClick={checkouthandler}>order</button>}
    </div>
    return (
        <Modal>
            {Cartitem}
            <div className={classes.total}>
                <span>Amount</span>
                <span>{totalamount}</span>
            </div>
            {checkcout && <Checkout onConfirm={orderhandler} onCancel={props.onclick}/> }
            {!checkcout && modalaction}
            
        </Modal>
    );
}

export default Cart