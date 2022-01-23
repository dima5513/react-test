const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";

const initialState = {
  posts: [
    { id: 1, body: "Привет!" },
    { id: 2, body: "Я гуль sss ранга" },
  ],
  newPostText: "",
};
const profileReducer = (profilePage = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      profilePage.posts.push({ id: 3, body: profilePage.newPostText });
      profilePage.newPostText = "";
      return profilePage;
    case UPDATE_POST_TEXT:
      profilePage.newPostText = action.text;
      return profilePage;
    default:
      return profilePage;
  }
};
export const createAddPostAction = () => ({ type: ADD_POST });
export const createUpdatePostTextAction = (text) => ({
  type: UPDATE_POST_TEXT,
  text: text,
});

export default profileReducer;
