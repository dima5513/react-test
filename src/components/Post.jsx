import React from "react";
import classes from "../styles/Post.module.css";
const Post = (props) => {
  return <div className={classes.post}>{props.text}</div>;
};
export default Post;
