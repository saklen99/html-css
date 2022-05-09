import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const  AddUser = (props) =>
{
    const [entername , setname] = useState('');
    const [enterage , setage] = useState('');
    const Handler = (event) =>
    {
       
        event.preventDefault();

        if(entername.trim().length===0 || enterage.trim().length==0)
        {
            return;
        }
        if(+enterage < 1)
        {
            return;
        }
        props.onAdduser(entername,enterage);
        setage('');
        setname('');
        

    };

    const uname = (event) =>{
        setname(event.target.value);
    };

    const uage = (event) =>{
        setage(event.target.value);
    };

    return(
        <Card className={classes.input}>
        <form onSubmit={Handler}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" onChange={uname} value={entername}/>
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" onChange={uage} value={enterage} />
            <button type="submit">Adduser</button>
        </form>
        </Card>
    );
}

export default AddUser;