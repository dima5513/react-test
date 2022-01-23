import React from "react";

import classes from "../styles/Profile.module.css";
import MyPostsContainer from "./MyPostsContainer";
const Profile = (props) => {
  return (
    <div className={classes.profile}>

       <MyPostsContainer store={props.store}  dispatch={props.dispatch}/>

    </div>
  );
};
export default Profile;
