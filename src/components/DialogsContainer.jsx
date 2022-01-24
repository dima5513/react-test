import React from "react";
import Dialogs from "./Dialogs";
import {
  createSendMessageAction,
  createUpdateMessageTextAction,
} from "../redux/dialogs-reducer";
import StoreContext from "../store-context";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const dialogsPage = store.getState().dialogsPage;
        const sendMessage = () => {
          store.dispatch(createSendMessageAction());
        };
        const updateMessageText = (text) => {
          store.dispatch(createUpdateMessageTextAction(text));
        };
        return (
          <Dialogs
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
            dialogs={dialogsPage.dialogs}
            messages={dialogsPage.messages}
            messageText={dialogsPage.messageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
