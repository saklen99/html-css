import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const empty = (value) => value.trim() === '';
const five = (value) => value.trim().lenth === 5;

const Checkout = (props) => {

    const [inputvalid, setinputvalid] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    });

    const nameref = useRef();
    const streetref = useRef();
    const postalref = useRef();
    const cityref = useRef();
    const confirmHandler = (event) => {
        event.preventDefault();

        const entername = nameref.current.value;
        const enterstreet = streetref.current.value;
        const enterpostal = postalref.current.value;
        const entercity = cityref.current.value;

        const validname = !empty(entername);
        const validstreet = !empty(enterstreet);
        const validpostal = !five(enterpostal);
        const validcity = !empty(entercity);


        setinputvalid({
            name: validname,
            street: validstreet,
            postal: validpostal,
            city: validcity
        })

        const validform = validname && validstreet && validpostal && validcity;

        if (!validform) {
            return;
        }
                props.onConfirm({
                    name:entername,
                    street: enterstreet,
                    postal: enterpostal,
                    city: entercity
                });
    };
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameref} />
                {!inputvalid.name && <p>please enter value</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetref} />
                {!inputvalid.street && <p>please enter valid street</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalref} />
                {!inputvalid.postal && <p>please enter valid postal</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityref} />
                {!inputvalid.city && <p>please enter valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;