import React from "react";
import classes from "../styles/ProfileInfo.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import avatar from '../assets/images/profile.png'
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <CircularProgress />;
  }
  return (
    <div className={classes.profileInfo}>
      <img
        className={classes.profilePhoto}
        src={props.profile.photos.small || avatar}
        alt=""
      />
      <span className={classes.profileInfo__name}>
        {props.profile.fullName}
      </span>
      <span className={classes.profileInfo__aboutme}>
        {props.profile.aboutMe}
      </span>
    </div>
  );
};
export default ProfileInfo;
