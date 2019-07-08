import * as axios from "axios";

const axiosInstance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {"API-KEY": "65431dc9-14fc-461c-bece-5b089a12f972"}
});

export const usersAPI = {
	getAuthMeAPI() {
		return axiosInstance.get("auth/me")
												.then(response => response.data);
	},
	// getUsersAPI(currentPage = 1, pageSize = 10) {
	// 	return axiosInstance.get("users?page="+currentPage+"&count="+pageSize)
	// 											.then(response => response.data);
	// },//http://localhost:3001/api/users?page=3&count=5
	getUsersAPI(currentPage = 1, pageSize = 5) {
		return axios.get("http://localhost:3001/api/users?page="
										+currentPage+"&count="+pageSize)
					.then(response => response.data);
	},
	// getProfileAPI(id = 1200) {
	// 	return axiosInstance.get("profile/"+id)
	// 											.then(response => response.data);
	// },
	getProfileAPI(id = 1200) {
		return axios.get("http://localhost:3001/api/profile/"+id)
												.then(response => response.data);
	},
	// getFollowAPI(id) {
	// 	return axiosInstance.get("follow/"+id)
	// 											.then(response => response.data);
	// },
	getFollowAPI(id) {
		return axios.get("http://localhost:3001/api/follow/"+id)
												.then(response => response.data);
	},
	// deleteFollowAPI(id) {
	// 	return axiosInstance.delete("follow/"+id)
	// 											.then(response => response.data);
	// },
	deleteFollowAPI(id) {
		return axios.delete("http://localhost:3001/api/follow/"+id,{}, {withCredentials: true})
												.then(response => response.data);
	},
	// postFollowAPI(id) {
	// 	return axiosInstance.post("follow/"+id)
	// 											.then(response => response.data);
	// }
	postFollowAPI(id) {
		return axios.post("http://localhost:3001/api/follow/"+id)
												.then(response => response.data);
	}
}
