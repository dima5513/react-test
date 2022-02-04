import React from "react";
import ProfileInfo from "./ProfileInfo";
import classes from "../styles/Profile.module.css";

import MyPostsContainer from "./MyPostsContainer";
const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
