let initialState = [
		{
			name: "first",
			data: [
					{message: "1"},
					{message: "2"},
					{message: "3"},
					{message: "4"}
			],
		},
		{
			name: "second",
			data: [
					{message: "111"},
					{message: "222"},
					{message: "333"},
					{message: "444"}
			],
		},
		{
			name: "three",
			data: [
					{message: "11111"},
					{message: "22222"},
					{message: "333333"},
					{message: "444444"}
			],
		}
];

const dialogsReducer = (state = initialState, action) => {
	return state;
}

export default dialogsReducer;
