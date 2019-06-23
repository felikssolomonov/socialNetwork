import ReactDOM from 'react-dom';
import React, { Component } from "react";
import Header from './Components/Header/Header.js';
import Sidebar from './Components/Sidebar/Sidebar.js';
import Navbar from './Components/Navbar/Navbar.js';
import Article from './Components/Article/Article.js';
import Footer from './Components/Footer/Footer.js';
import Dialogs from './Components/Dialogs/Dialogs.js';
import { BrowserRouter, Route, NavLink } from "react-router-dom";

// import { createBrowserHistory } from "history";
// const customHistory = createBrowserHistory();

class App extends Component {
    render() {
        let data = this.props.state.data;
        let menu = this.props.state.menu;
        let dialogs = this.props.state.dialogs;
        let newText = this.props.state.newText;
        return (
            <BrowserRouter>
								<div className="bodyM">
										<Header menu={menu}/>
										<Sidebar menu={menu}/>
										<div className="article">
                        <Route exact path="/" render={
                                () => <Hea data={data}/>
                            }/>
												<Route path="/myPage" render={
                                () => <Hea data={data}/>
                            }/>
                        <Route path="/Messages" render={
                                () => <Dialogs dialogs={dialogs}/>
                            }/>
                        <Route path="/Friends" render={
                                () => <Hea data={data}/>
                            }/>
                        <Route path="/Photos" render={
                                () => <Hea data={data}/>
                            }/>
												<Route path="/Foo1" render={
                                () => <Hea data={data}/>
                            }/>
                        <Route path="/Foo2" render={
                                () => <Article  dispatch={this.props.dispatch}
                                                newText={newText}
                                                />
                            }/>
												<Route path="/Foo3" render={
                                () => <Hea data={data}/>
                            }/>
												<Route path="/Foo4" render={
                                () => <Article  dispatch={this.props.dispatch}
                                                newText={newText}
                                                />
                            }/>
												<Route path="/Foo5" render={
                                () => <He id="item.id" name="item.name"/>
                            }/>
										</div>
										<Navbar/>
										<Footer/>
								</div>
						</BrowserRouter>
        );
    }
}

class Hea extends Component {
    render() {
        let data = this.props.data.map( item =>
          <He id={item.id} name={item.name}/>
        );
        return (
            <div>
								{data}
            </div>
        );
    }
}

class He extends Component {
    render() {
        return (
            <div>
								<p>{this.props.id} => {this.props.name}</p>
                <br/>
            </div>
        );
    }
}

export default App;
