import React from "react";
import Dialogs from "./Dialogs";
import {
  createSendMessageAction,
  createUpdateMessageTextAction,
} from "../redux/dialogs-reducer";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    messageText: state.dialogsPage.messageText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(createSendMessageAction());
    },
    updateMessageText: (text) => {
      dispatch(createUpdateMessageTextAction(text));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
