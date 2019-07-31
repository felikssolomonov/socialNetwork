export const getDialogs = (id) => {
	return (dispatch) => {
		dispatch(isDisabled(id, true));
		usersAPI.getDialogs(id)
			.then(
				response => {
						...
						...
						arrayIds
				},
				error => {
						// if (response.resultCode === 0) {
						dispatch(unfollow(id));
						dispatch(isDisabled(id, false));
						// }
				}
			).then(
				axios
				.all(users.map((id) => {
		      return axios.getUserById('apiLink'+id)
		    }))
				.then((res) => {
		      console.log(res)
		    })
			);
	}
}
