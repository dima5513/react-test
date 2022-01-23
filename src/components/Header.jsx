import React from "react";
import classes from "../styles/Header.module.css";
const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        className={classes.header__logo}
        src="https://cdn-icons-png.flaticon.com/512/152/152754.png"
        alt=""
      />
    </header>
  );
};
export default Header;
