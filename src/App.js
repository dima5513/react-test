import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <main className="main">
          <Routes>
            <Route
              path={"/"}
              element={
                <Profile
                  store={props.store.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path={"/profile"}
              element={
                <Profile
                  store={props.store.profilePage}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path={"/dialogs/*"} element={<DialogsContainer store={props.store.dialogsPage} dispatch={props.dispatch}/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
