import './Expenseitem.css' 

import {useState} from 'react'

function Expenseitem(props) {
    const [title, setTitle] = useState(props.title);

    const ch = () =>{
        setTitle('update');
        console.log(title);
    }

    return (
    <div className="expense-item">
        <div>
         
        </div>
        <div className="expense-item__description">
            <h2>
                {title}
            </h2>
    <div className="expense-item__price">{props.amount}</div>
            </div>
            <button onClick={ch}>change title</button>
        </div>
    
    );
}

export default Expenseitem;