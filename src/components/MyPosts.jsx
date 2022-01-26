import React from "react";
import Post from "./Post";
import classes from "../styles/MyPosts.module.css";
const MyPosts = (props) => {
  const onPostTextChanged = (e) => {
    props.updatePostText(e.target.value);
  };
  const onAddPost = (e) => {
    e.preventDefault();
    props.addPost();
  };
  return (
    <div className={classes.myPosts}>
      <form className={classes.formPosts}>
        <textarea
          value={props.newPostText}
          onChange={onPostTextChanged}
          className={classes.formPosts__textarea}
        ></textarea>
        <button onClick={onAddPost} className={classes.formPosts__btn}>
          Опубликовать
        </button>
      </form>
      <div className={classes.posts}>
        {props.posts.map((item) => (
          <Post text={item.body} />
        ))}
      </div>
    </div>
  );
};
export default MyPosts;
