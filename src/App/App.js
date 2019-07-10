import React, { Component } from "react";
import HeaderContainer from './Components/Header/HeaderContainer.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Navbar from './Components/Navbar/Navbar.js';
import ArticleComponent from './Components/Article/ArticleComponent.js';
import UsersComponent from './Components/Users/UsersComponent.js';
import ProfileComponent from './Components/Profile/ProfileComponent.js';
import LoginComponent from './Components/Login/LoginComponent.js';
import SoundcloudComponent from './Components/Soundcloud/SoundcloudComponent.js';
import Footer from './Components/Footer/Footer.js';
import Dialogs from './Components/Dialogs/Dialogs.js';
import { Route } from "react-router-dom";
import * as axios from "axios";

// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        return (
    								<div className="bodyM">
    										<HeaderContainer />
    										<Sidebar menu={this.props.state.menu.items}/>
    										<div className="article">
                            <Route path="/messages" render={
                                    () => <Dialogs dialogs={this.props.state.dialogs}/>
                                }/>
                            <Route path="/menu" render={
                                    () => <ArticleComponent/>
                                }/>
                            <Route path="/profile/:userId?" render={
                                    () => <ProfileComponent/>
                                }/>
                            <Route path="/users" render={
                                    () => <UsersComponent/>
                                }/>
                            <Route path="/login" render={
                                    () => <LoginComponent/>
                                }/>
    										</div>
    										<Navbar/>
    										<Footer/>
    								</div>
        );
    }
}

export default App;
