import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/DialogsContainer";
import UsersContainer from "./components/UsersContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path={"/"} element={<Profile />} />
            <Route path={"/profile"} element={<Profile />} />
            <Route path={"/dialogs/*"} element={<DialogsContainer />} />
            <Route path={"/users"} element={<UsersContainer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
