import React from "react";
import classes from "../styles/Users.module.css";
import avatar from "../assets/images/profile.png";
import Pagination from "@mui/material/Pagination";

const Users = (props) => {
  return (
    <div className={classes.usersPage}>
      <ul className={classes.users__list}>
        {props.users.map((item) => {
          return (
            <li key={item.id} className={classes.users__item}>
              <img
                src={item.photos.small || avatar}
                alt=""
                className={classes.item__photo}
              />

              <div className={classes.item__info}>
                {item.name}
                <div className={classes.item__location}></div>
                {item.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(item.id);
                    }}
                    className={classes.item__button}
                  >
                    Отписаться
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(item.id);
                    }}
                    className={classes.item__button}
                  >
                    Подписаться
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      <ul className={classes.pagination}>
        <Pagination
          count={Math.ceil(props.totalCount / props.countItems)}
          variant="outlined"
          shape="rounded"
          page={props.currentPage}
          onChange={(_, num) => {
            props.onPageChanged(num);
          }}
        />
      </ul>
    </div>
  );
};
export default Users;
