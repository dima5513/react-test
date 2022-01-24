import React from "react";
import MyPosts from "./MyPosts";
import FormPosts from "./FormPosts";
import { createAddPostAction } from "../redux/profile-reducer";
import { createUpdatePostTextAction } from "../redux/profile-reducer";
import StoreContext from "../store-context";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const profilePage = store.getState().profilePage;
        const addPost = () => {
          store.dispatch(createAddPostAction());
        };
        const updatePostText = (text) => {
          store.dispatch(createUpdatePostTextAction(text));
        };

        return (
          <div className="MyPostsContainer">
            <FormPosts
              newPostText={profilePage.newPostText}
              updatePostText={updatePostText}
              addPost={addPost}
            />
            <MyPosts posts={profilePage.posts} />
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
