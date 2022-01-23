import React from "react";
import classes from "../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";
const Sidebar = (props) => {
  const activeClass = (link) => {
    return link.isActive ? classes.active : "";
  };
  return (
    <aside className={classes.sidebar}>
      <ul className={classes.sidebar__menu}>
        <li className={classes.sidebar__item}>
          <NavLink className={activeClass} to={"/profile"}>
            Профиль
          </NavLink>
        </li>
        <li className={classes.sidebar__item}>
          <NavLink className={activeClass} to={"/dialogs"}>
            Сообщения
          </NavLink>
        </li>
        <li className={classes.sidebar__item}>
          <NavLink className={activeClass} to={"/news"}>
            Новости
          </NavLink>
        </li>
        <li className={classes.sidebar__item}>
          <NavLink className={activeClass} to={"/music"}>
            Музыка
          </NavLink>
        </li>
        <li className={classes.sidebar__item}>
          <NavLink className={activeClass} to={"/settings"}>
            Настройки
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
