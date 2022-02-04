import React from "react";
import HeaderContainer from "./components/HeaderContainer";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/DialogsContainer";
import UsersContainer from "./components/UsersContainer";
import ProfileContainer from "./components/ProfileContainer";
import Login from "./components/Login";
import { Navigate } from 'react-router-dom'
import "./App.css";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <Sidebar />
        <main className="main">
          <Routes>
            <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
            <Route path={"/profile/*"} element={<ProfileContainer />} />
            <Route path={"/dialogs/*"} element={<DialogsContainer />} />
            <Route path={"/users"} element={<UsersContainer />} />
            <Route path={"/login"} element={<Login/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
