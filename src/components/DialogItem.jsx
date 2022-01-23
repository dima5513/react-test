import React from 'react';
import classes from '../styles/Dialogs.module.css';
import { NavLink } from "react-router-dom";
const DialogItem = (props) => {
	return (
<li className={classes.dialog__item}>
	<NavLink to={`/dialogs/${props.id}`}>{props.user}</NavLink>
</li>
	);
};

export default DialogItem;