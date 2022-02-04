import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/Header.module.css";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        className={classes.header__logo}
        src="https://cdn-icons-png.flaticon.com/512/152/152754.png"
        alt=""
      />
      <div className={classes.loginBlock}>
        <NavLink to={"/login"}>Login</NavLink>
      </div>
      <div className={classes.myLogin}>{props.login}</div>
    </header>
  );
};
export default Header;
