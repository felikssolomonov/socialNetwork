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
	getUsersAPI(currentPage = 1, pageSize = 10) {
		return axiosInstance.get("users?page="+currentPage+"&count="+pageSize)
												.then(response => response.data);
	},
	getProfileAPI(id) {
		return axiosInstance.get("profile/"+id)
												.then(response => response.data);
	},
	getFollowAPI(id) {
		return axiosInstance.get("follow/"+id)
												.then(response => response.data);
	},
	deleteFollowAPI(id = 1200) {
		return axiosInstance.delete("follow/"+id)
												.then(response => response.data);
	},
	postFollowAPI(id = 1200) {
		return axiosInstance.post("follow/"+id)
												.then(response => response.data);
	}
}
