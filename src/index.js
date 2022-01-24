import React from "react";
import ReactDom from "react-dom";
import store from "./redux/redux-store";
import App from "./App";
import StoreContext from "./store-context";

const rerenderTree = (store) => {
  ReactDom.render(
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>,
    document.getElementById("root")
  );
};
rerenderTree(store);

store.subscribe(() => {
  rerenderTree(store);
});
