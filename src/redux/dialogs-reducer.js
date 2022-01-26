const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";
const initialState = {
  messageText: "",
  messages: [
    { id: 1, message: "Привет!" },
    { id: 2, message: "Как дела?" },
  ],
  dialogs: [
    { id: 1, user: "Dima" },
    { id: 2, user: "Alina" },
  ],
};
const dialogsReducer = (dialogsPage = initialState, action) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXT:
      return { ...dialogsPage, messageText: action.message };

    case SEND_MESSAGE:
      return {
        ...dialogsPage,
        messages: [
          ...dialogsPage.messages,
          {
            id: 3,
            message: dialogsPage.messageText,
          },
        ],
        messageText: "",
      };
    default:
      return dialogsPage;
  }
};

export const createUpdateMessageTextAction = (message) => ({
  type: UPDATE_MESSAGE_TEXT,
  message,
});
export const createSendMessageAction = () => ({ type: SEND_MESSAGE });
export default dialogsReducer;
