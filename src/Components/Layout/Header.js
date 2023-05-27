import React, { Fragment } from 'react';
import classes from './Header.module.css'
import mealsImage from '../../Assets/food-and-bevarge-header.jpg'
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <Fragment>
        <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
        </header>
        <div className={classes['main-image']} alt="">
           <img src={mealsImage} alt="mealsImage"/>
        </div>
        </Fragment>
    );
};

export default Header;