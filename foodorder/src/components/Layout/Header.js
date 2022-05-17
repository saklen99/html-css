import React from 'react';
import mealsimage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCardButton from './HeaderCardButton';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onclick={props.onshowcart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsimage} alt="delicious food" />
      </div>

    </>
  );
};

export default Header;