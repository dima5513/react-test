import React from 'react';
import classes from '../styles/Dialogs.module.css'
const Message = (props) => {
	return (
	<li className={classes.messageItem}>{props.message}</li>
	);
};

export default Message;