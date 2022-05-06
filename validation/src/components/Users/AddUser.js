import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const  AddUser = (props) =>
{
    const Handler = (event) =>
    {
        event.preventDefault();
    };

    return(
        <Card className={classes.input}>
        <form onSubmit={Handler}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" />
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" />
            <button type="submit">Adduser</button>
        </form>
        </Card>
    );
}

export default AddUser;