import React from "react";
import MyPosts from "./MyPosts";

import {
  createUpdatePostTextAction,
  createAddPostAction,
} from "../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updatePostText: (text) => {
    dispatch(createUpdatePostTextAction(text));
  },
  addPost: () => {
    dispatch(createAddPostAction());
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
