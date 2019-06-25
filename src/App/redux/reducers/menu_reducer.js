const ADD_MENU_ITEM = 'ADD-MENU-ITEM';
const REFRESH_TEXT = 'REFRESH-TEXT';

let initialState = {
	items: [
		{link: "", name: "Главная"},
		{link: "myPage", name: "Страница"},
		{link: "Messages", name: "Сообщения"},
		{link: "Friends", name: "Друзья"},
		{link: "Photos", name: "Фото"},
		{link: "Menu", name: "Меню"},
		{link: "Language", name: "Язык"}
	],
	textMenu: "789"
};

const menuReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MENU_ITEM: {
			let stateCopy = {...state};
			stateCopy.items = [...state.items];
			stateCopy.items.push({link: state.textMenu+"link", name: state.textMenu},);
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
