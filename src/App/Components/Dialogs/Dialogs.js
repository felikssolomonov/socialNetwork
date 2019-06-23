import React, { Component } from "react";
import Dialog from './../Dialogs/Dialog/Dialog.js';

class Dialogs extends Component {
    render() {
        let send = () => {
          this.props.dispatch({type: 'ADD-POST'});
        }
        let www = this.props.dialogs.map( item =>
            <div className="article">
                <button onClick={send}>
                    {item.name}
                </button>
            </div>
        );
        return (
            <div>
                {www}
            </div>
        );
    }
}

// <Dialog mess={item.data}/>
// <SendMess />

class SendMess extends Component {
    render() {
        return (
            <div>
                <div>
                    <textarea></textarea>
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

export default Dialogs;
