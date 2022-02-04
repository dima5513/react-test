import { usersAPI } from "../API/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_PROGRESS_BAR = "SET_PROGRESS_BAR";
const UNSET_PROGRESS_BAR = "UNSET_PROGRESS_BAR";

const initialState = {
	users: [],
	currentPage: 1,
	countItems: 10,
	totalCount: 0,
	isFetching: false,
};
const usersReducer = (usersPage = initialState, action) => {
	switch(action.type){
		case FOLLOW:
			return {
				...usersPage,
				users: usersPage.users.map((user) => {
					if(user.id === action.userId){
						return {...user, followed: true};
					}
					return user;
				}),
			};
		case UNFOLLOW:
			return {
				...usersPage,
				users: usersPage.users.map((user) => {
					if(user.id === action.userId){
						return {...user, followed: false};
					}
					return user;
				}),
			};
		case SET_USERS:
			return {
				...usersPage,
				users: [...action.users],
			};

		case SET_CURRENT_PAGE:
			return {
				...usersPage,
				currentPage: action.pageNumber,
			};
		case SET_USERS_COUNT:
			return {
				...usersPage,
				totalCount: action.totalCount,
			};
		case SET_PROGRESS_BAR:
			return {
				...usersPage,
				isFetching: true,
			};
		case UNSET_PROGRESS_BAR:
			return {
				...usersPage,
				isFetching: false,
			};
		default:
			return usersPage;
	}
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (pageNumber) => ({
	type: SET_CURRENT_PAGE,
	pageNumber,
});
export const setTotalCountActionCreator = (totalCount) => ({
	type: SET_USERS_COUNT,
	totalCount,
});
export const unsetProgressBarActionCreator = () => ({
	type: UNSET_PROGRESS_BAR,
});
export const setProgressBarActionCreator = () => ({type: SET_PROGRESS_BAR});

export const getUsers = (currentPage, countItems) => (dispatch) => {
	dispatch(setProgressBarActionCreator());
	usersAPI
	.getUsers(currentPage, countItems)
	.then((data) => {
		dispatch(setUsersActionCreator(data.items));
		dispatch(setTotalCountActionCreator(data.totalCount));
		dispatch(unsetProgressBarActionCreator());
	});
};

export const getCurrentUsers = (pageNumber, countItems) => (dispatch) => {
	dispatch(setProgressBarActionCreator());
	dispatch(setCurrentPageActionCreator(pageNumber));
	usersAPI
	.getUsers(pageNumber, countItems)
	.then((data) => {
		dispatch(setUsersActionCreator(data.items));
		dispatch(unsetProgressBarActionCreator());
	});
};

export const follow = (e, userId) => (dispatch) => {
	usersAPI.follow(userId).then((resultCode) => {
		if(resultCode === 0){
			dispatch(followActionCreator(userId));
			e.target.style.color = '#fff';
		}
	});
};
export const unfollow = (e, userId) => (dispatch) => {
	usersAPI.unFollow(userId).then((resultCode) => {
		if(resultCode === 0){
			dispatch(unfollowActionCreator(userId));
			e.target.style.color = '#fff';
		}
	});
};

export default usersReducer;
