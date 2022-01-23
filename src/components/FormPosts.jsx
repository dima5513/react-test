import React from "react";
import classes from "../styles/FormPosts.module.css";
import {
	createUpdatePostTextAction,
	createAddPostAction,
} from "../redux/profile-reducer";

const FormPosts = (props) => {
	const onPostTextChanged = (e) => {
		props.updatePostText(e.target.value);
	};
	const onAddPost = (e) => {
		e.preventDefault();
		props.addPost();
	};

	return (
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
	);
};
export default FormPosts;
