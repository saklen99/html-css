import './Expenseitem.css' 
import react from 'react'
function Expenseitem(props) {
    console.log('props', props)

    return (
    <div className="expense-item">
        <div>
         
        </div>
        <div className="expense-item__description">
            <h2>
                {props.title}
            </h2>
    <div className="expense-item__price">{props.amount}</div>
            </div>
            <button>change title</button>
        </div>
    
    );
}

export default Expenseitem;