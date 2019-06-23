const ADD_MENU_ITEM = 'ADD-MENU-ITEM';
const REFRESH_TEXT = 'REFRESH-TEXT';

const menuReducer = (state, action) => {
	if (action.type === ADD_MENU_ITEM) {
		state.items.push({link: state.textMenu+"link", name: state.textMenu},);
		state.textMenu = "";
	}
	else if (action.type === REFRESH_TEXT) {
		state.textMenu = action.textMenu;
	}
	return state;
}

export let addMenuItem = () => ({
  type: ADD_MENU_ITEM
});

export let refreshText = (text) => ({
  type: REFRESH_TEXT,
  textMenu: text
});

export default menuReducer;
