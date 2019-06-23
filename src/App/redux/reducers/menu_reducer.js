const ADD_MENU_ITEM = 'ADD-MENU-ITEM';
const REFRESH_TEXT = 'REFRESH-TEXT';

const menuReducer = (state, action) => {
	switch (action.type) {
		case ADD_MENU_ITEM:
			state.items.push({link: state.textMenu+"link", name: state.textMenu},);
			state.textMenu = "";
			return state;
		case REFRESH_TEXT:
			state.textMenu = action.textMenu;
			return state;
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
