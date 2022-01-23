import React from "react";
import Post from "./Post";
import classes from "../styles/MyPosts.module.css";
const MyPosts = (props) => {
  return (
    <div className={classes.posts}>
      {props.posts.map((item) => (
        <Post text={item.body} />
      ))}
    </div>
  );
};
export default MyPosts;
