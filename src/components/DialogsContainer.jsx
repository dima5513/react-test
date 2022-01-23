import React from 'react';
import Dialogs from "./Dialogs";
import { createSendMessageAction, createUpdateMessageTextAction } from "../redux/dialogs-reducer";

const DialogsContainer = (props) => {
	const sendMessage = () => {
		props.dispatch(createSendMessageAction());
	};
	const updateMessageText = (text) => {
		props.dispatch(createUpdateMessageTextAction(text));
	};
	return (<Dialogs sendMessage={sendMessage} updateMessageText={updateMessageText} dialogs={props.store.dialogs}
						  messages={props.store.messages} messageText={props.store.messageText}/>);
};

export default DialogsContainer;