import React from "react";
import Card from "./Card";

import classes from './ErrorModal.module.css';

const ErrorModal = propes =>{
return(
    <div>
        <div className={classes.backdrop}/>
<Card className={classes.modal}>
    <header className={classes.header}>
        <h1>{propes.title}</h1>
    </header>
    <div className={classes.content}>
    <p> {propes.message}</p>
    </div>
    <footer className={classes.action}>
        <button>Okay</button>
    </footer>
    </Card>
    </div>
);
};

export default ErrorModal;