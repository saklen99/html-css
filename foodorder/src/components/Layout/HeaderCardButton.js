import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CardContext from '../../store/cart-context'
import { useContext } from "react";
const HeaderCardButton = (props) => {
    const cartctx = useContext(CardContext);

    const numberofcartitems = cartctx.items.reduce((num,item)=>{
       return num + item.amount;
    },0)

    return (
    <button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your card</span>
        <span className={classes.badge}>{numberofcartitems}</span>

    </button>
    );
}

export default HeaderCardButton