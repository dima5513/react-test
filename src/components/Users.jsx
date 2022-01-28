import axios from "axios";
import React from "react";
import classes from "../styles/Users.module.css";
import avatar from "../assets/images/profile.png";
class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div className={classes.usersPage}>
        <button onClick={this.getUsers}>getUsers</button>
        <ul className={classes.users__list}>
          {this.props.users.map((item) => {
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
                  {item.follow ? (
                    <button
                      onClick={() => {
                        this.unfollow(item.id);
                      }}
                      className={classes.item__button}
                    >
                      Отписаться
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.follow(item.id);
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
      </div>
    );
  }
}
export default Users;
