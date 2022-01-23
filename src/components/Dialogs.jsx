import React from "react";
import classes from "../styles/Dialogs.module.css";
import DialogItem from "./DialogItem";
import Message from "./Message";

const Dialogs = (props) => {

  const onSendMessage = (e) => {
    e.preventDefault()
    props.sendMessage();

  };
  const onUpdateMessageText = (e) => {
    props.updateMessageText(e.target.value);
  };

  return <div className={classes.dialogs}>
    <div className={classes.dialogs__body}>
      <ul className={classes.dialogs__list}>
        {props.dialogs.map(item=> <DialogItem id={item.id} user={item.user}/>)}
      </ul>
      <div className={classes.messages}>
        <ul className={classes.message__list}>
          {props.messages.map(item=> <Message id={item.id} message={item.message}/>)}
        </ul>
        <form className={classes.messageForm}>
          <input className={classes.messageForm__input} onChange={onUpdateMessageText} type="text" placeholder="Введите сообщение..." value={props.messageText}/>
          <button className={classes.messageForm__btn} onClick={onSendMessage}>Отправить</button>
        </form>
      </div>
    </div>

  </div>;
};
export default Dialogs;
