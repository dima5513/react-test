import axios from "axios";

const instanceAPIGet = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0",
});

const instanceAPI = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0",
	withCredentials: true,
	headers: {
		"API-KEY": "da2da462-dad9-4763-9650-658aeaff6ba5",
	},
});

export const usersAPI = {
	getUsers(pageNumber, countItems){
		return instanceAPI
		.get(`/users?page=${pageNumber}&count=${countItems}`)
		.then((response) => response.data);
	},
	unFollow(id){
		return instanceAPI.delete(`/follow/${id}`).then((response) => {
			return response.data.resultCode;
		});
	},
	follow(id){
		return instanceAPI.post(`/follow/${id}`, {}).then((response) => {
			return response.data.resultCode;
		});
	},

};
export const profileAPI = {
	setUserProfile(userId){
		return instanceAPIGet
		.get(`/profile/${userId}`)
		.then((response) => response.data);
	},
};
export const authAPI = {
	signin(){
		return instanceAPI
		.get("auth/me", )
		.then((response) => {
			return response.data;
		});
	},
};


