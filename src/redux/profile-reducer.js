import { profileAPI } from "../API/api";

const ADD_POST = "ADD_POST";
const UPDATE_POST_TEXT = "UPDATE_POST_TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
	posts: [
		{id: 1, body: "Привет!"},
		{id: 2, body: "Я гуль sss ранга"},
	],
	newPostText: "",
	profile: null,
};
const profileReducer = (profilePage = initialState, action) => {
	switch(action.type){
		case ADD_POST:
			return {
				...profilePage,
				posts: [...profilePage.posts, {id: 3, body: profilePage.newPostText}],
				newPostText: "",
			};

		case UPDATE_POST_TEXT:
			return {...profilePage, newPostText: action.text};
		case SET_USER_PROFILE:
			return {
				...profilePage,
				profile: action.profile,
			};

		default:{
			return profilePage;
		}
	}
};
export const createAddPostAction = () => ({type: ADD_POST});
export const createUpdatePostTextAction = (text) => ({
	type: UPDATE_POST_TEXT,
	text: text,
});
export const setUserProfileActionCreator = (profile) => ({
	type: SET_USER_PROFILE,
	profile,
});
export const setUserProfile = (userId) => (dispatch) => {
	profileAPI.setUserProfile(userId).then(profile => {
		dispatch(setUserProfileActionCreator(profile));
	});
};

export default profileReducer;
