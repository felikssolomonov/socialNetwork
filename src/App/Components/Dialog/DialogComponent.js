import React, { Component } from "react";
// import Dialog from './Dialog/Dialog.js';
import {getDialogs, setOpenedDialog, getMessages, getUsers} from './../../redux/reducers/dialogs_reducer.js';
import {withAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {withDialogs} from './../../hoc/WithDialogs.js';
import {compose} from "redux";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";


let mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
		dialogs: state.dialogs.dialogs,
    messages: state.dialogs.messages,
    users: state.dialogs.users,
		userId: state.auth.userId,
    openedDialog: state.dialogs.openedDialog
  }
}

let mapDispatchToProps = {
    getDialogs,
    setOpenedDialog,
    getMessages,
    getUsers
}

class DialogComponent extends Component {
		componentDidMount() {
    }
    render() {
        return (
            <div>
            {
              this.props.users
              ?
              this.props.users.map(item => {
                return <p>{item.name+" - user"}</p>
              })
              :
              <p>{"item.name"}</p>
            }
            {
              this.props.dialogs
              ?
              this.props.dialogs.map(item => {
                return <p>{item.users+"777"}</p>
              })
              :
              <p>{"item.name"}</p>
            }
            {
							this.props.dialogs.map(item => {
                return <Dialog  key={item._id}
                                dialog={item}
                                messages={this.props.messages}
                                setOpenedDialog={this.props.setOpenedDialog}
                                getMessages={this.props.getMessages}
                                userId={this.props.userId}
                                getUsers={this.props.getUsers}
                                users={this.props.users}
                                openedDialog={
                                  this.props.openedDialog==item._id
                                  ? true
                                  : false
                                }
                                />
							})
						}
            </div>
        );
    }
}

class Dialog extends Component {
    componentDidMount() {
      // this.props.getUsers(this.props.id);
    }
    render() {
        return (
            <div className="article" key={this.props.dialog._id}>
                {
                  this.props.users.id
                }
                {
                  this.props.openedDialog
                    ? <button onClick={()=>{this.props.setOpenedDialog(null)
                        }}>CLose dialog...</button>
                    : <button onClick={()=>{this.props.getMessages(this.props.dialog._id)
                        }}>Open dialog...</button>
                }
                {
                  this.props.openedDialog
                    && <Messages messages={this.props.messages}
                                userId={this.props.userId}/>
                }
            </div>
        );
    }
}

class Messages extends Component {
  render() {
        return (
            <div>
            {
              this.props.messages.map(item =>{
                return (
                  <div key={item._id}>
                      {
                        item.senderId==this.props.userId
                        ?
                        <div className="container">
                          <img  src="https://cdn1.iconfinder.com/data/icons/managers-15/494/Untitled-32-512.png"
                                alt="Avatar" />
                          <p>{item.text}</p>
                          <span className="time-right">11:00</span>
                        </div>
                        :
                        <div className="container darker">
                          <img  src="https://cdn4.iconfinder.com/data/icons/business-and-office-cute-style-vol-2-1/52/chat__comment__message__user__avatar-512.png"
                                alt="Avatar" className="right"/>
                          <p>{item.text}</p>
                          <span className="time-left">11:01</span>
                        </div>
                      }
                  </div>);
              })
            }
            <SendMess/>
            </div>
        );
    }
}

class SendMess extends Component {
    render() {
        return (
            <div>
                <div width="80%">
                    <textarea rows="5" cols="100%"></textarea>
                </div>
                <div>
                    <button>
                        отправить
                    </button>
                </div>
            </div>
        );
    }
}

DialogComponent = compose(
  withDialogs,
	withAuthRedirect,
  connect(mapStateToProps,mapDispatchToProps)
)(DialogComponent);

export default DialogComponent;
