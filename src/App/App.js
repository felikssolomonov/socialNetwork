import ReactDOM from 'react-dom';
import React, { Component } from "react";
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Navbar from './Components/Navbar/Navbar.js';
import ArticleComponent from './Components/Article/ArticleComponent.js';
import UsersComponent from './Components/Users/UsersComponent.js';
import LanguageComponent from './Components/Language/LanguageComponent.js';
import Footer from './Components/Footer/Footer.js';
import Dialogs from './Components/Dialogs/Dialogs.js';
import { Provider } from "react-redux";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        let store = this.props.store.getState();
        return (
            <BrowserRouter>
                <Provider store={this.props.store}>
    								<div className="bodyM">
    										<Header menu={store.menu.items}/>
    										<Sidebar menu={store.menu.items}/>
    										<div className="article">
                            <Route path="/messages" render={
                                    () => <Dialogs dialogs={store.dialogs}/>
                                }/>
                            <Route path="/menu" render={
                                    () => <ArticleComponent  dispatch={this.props.dispatch}
                                                    textMenu={store.menu.textMenu}
                                                    />
                                }/>
                            <Route path="/language" render={
                                    () => <LanguageComponent/>
                                }/>
                            <Route path="/users" render={
                                    () => <UsersComponent/>
                                }/>
    										</div>
    										<Navbar/>
    										<Footer/>
    								</div>
                </Provider>
						</BrowserRouter>
        );
    }
}

export default App;
