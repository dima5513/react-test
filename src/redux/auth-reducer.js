import { authAPI } from "../API/api";

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};
const authReducer = (state = initialState, action) => {
	switch(action.type){
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true
			};
		default:
			return state;
	}
};

export const setAuthUserDataActionCreator = (data) => ({
	type: SET_USER_DATA,
	data,
});

export const signin = () => (dispatch) => {

	authAPI.signin().then(data => {
		if(data.resultCode === 0){

			dispatch(setAuthUserDataActionCreator(data.data));
		}
	});
};

export default authReducer;
