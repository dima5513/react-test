import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import axios from "axios";
import {
  setUsersActionCreator,
  followActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  setTotalCountActionCreator,
} from "../redux/users-reducer";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countItems}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.countItems}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <Users
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        currentPage={this.props.currentPage}
        countItems={this.props.countItems}
        totalCount={this.props.totalCount}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  countItems: state.usersPage.countItems,
  totalCount: state.usersPage.totalCount,
});

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
  setCurrentPage: (page) => {
    dispatch(setCurrentPageActionCreator(page));
  },
  setTotalCount: (count) => {
    dispatch(setTotalCountActionCreator(count));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);
