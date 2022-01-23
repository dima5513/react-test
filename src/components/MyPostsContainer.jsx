import React from 'react';
import MyPosts from "./MyPosts";
import FormPosts from "./FormPosts";
import { createAddPostAction } from "../redux/profile-reducer";
import { createUpdatePostTextAction } from "../redux/profile-reducer";

const MyPostsContainer = (props) => {
	const addPost = () => {
		props.dispatch(createAddPostAction());
	};
	const updatePostText = (text) => {
		props.dispatch(createUpdatePostTextAction(text));
	};

	return (
		<div className="MyPostsContainer">
			<FormPosts
				newPostText={props.store.newPostText}
				updatePostText={updatePostText}
				addPost={addPost}
			/>
			<MyPosts posts={props.store.posts}/>
		</div>
	);
};

export default MyPostsContainer;