import React from 'react';
import classes from './Header.module.css';

function Header(props) {
	return (
		<header className={classes.header}>
			<a href="/">Главная</a>
			<span className={classes['header__text']}>{props.text}</span>
		</header>
	)
}

export default Header