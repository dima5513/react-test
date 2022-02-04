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

const MyPostsContainer = connect(mapStateToProps, {
  updatePostText: createUpdatePostTextAction,
  addPost: createAddPostAction,
})(MyPosts);

export default MyPostsContainer;
