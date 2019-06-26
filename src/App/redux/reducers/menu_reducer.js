const ADD_MENU_ITEM = 'ADD-MENU-ITEM';
const REFRESH_TEXT = 'REFRESH-TEXT';

let initialState = {
	items: [
		{link: "", name: "Главная"},
		{link: "mypage", name: "Страница"},
		{link: "messages", name: "Сообщения"},
		{link: "users", name: "Люди"},
		{link: "photos", name: "Фото"},
		{link: "menu", name: "Меню"},
		{link: "language", name: "Язык"}
	],
	textMenu: "789"
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MENU_ITEM: {
			let stateCopy = {...state};
			stateCopy.items = [...state.items,
				{link: state.textMenu+"link", name: state.textMenu}
			];
			stateCopy.textMenu = "";
			return stateCopy;
		}
		case REFRESH_TEXT: {
			let stateCopy = {...state};
			stateCopy.textMenu = action.textMenu;
			return stateCopy;
		}
		default:
			return state;
	}
}

export let addMenuItem = () => ({
  type: ADD_MENU_ITEM
});

export let refreshText = (text) => ({
  type: REFRESH_TEXT,
  textMenu: text
});

export default menuReducer;
