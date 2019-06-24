import ReactDOM from 'react-dom';
import React, { Component } from "react";
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Navbar from './Components/Navbar/Navbar.js';
// import Article from './Components/Article/Article.js';
import ArticleComponent from './Components/Article/ArticleComponent.js';
import Footer from './Components/Footer/Footer.js';
import Dialogs from './Components/Dialogs/Dialogs.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <BrowserRouter>
								<div className="bodyM">
										<Header menu={this.props.state.menu.items}/>
										<Sidebar menu={this.props.state.menu.items}/>
										<div className="article">
                        <Route path="/Messages" render={
                                () => <Dialogs dialogs={this.props.state.dialogs}/>
                            }/>
                        <Route path="/Menu" render={
                                () => <ArticleComponent  dispatch={this.props.dispatch}
                                                textMenu={this.props.state.menu.textMenu}
                                                />
                            }/>
										</div>
										<Navbar/>
										<Footer/>
								</div>
						</BrowserRouter>
        );
    }
}

export default App;
