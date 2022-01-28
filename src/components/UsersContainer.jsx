import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
} from "../redux/users-reducer";

const mapStateToProps = (state) => ({ users: state.usersPage.users });

const mapDispatchToProps = (dispatch) => ({
  setUsers: (users) => {
    dispatch(setUsersActionCreator(users));
  },
  follow: (userId) => {
    dispatch(followActionCreator(userId));
  },
  unfollow: (userId) => {
    dispatch(unfollowActionCreator(userId));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);
