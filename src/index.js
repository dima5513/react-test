import React from "react";
import ReactDom from "react-dom";
import store from "./redux/redux-store";
import App from "./App";

const rerenderTree = (store) => {
  ReactDom.render(
    <App store={store.getState()} dispatch={store.dispatch} />,
    document.getElementById("root")
  );
};
rerenderTree(store);

store.subscribe(() => {
  rerenderTree(store);
});
