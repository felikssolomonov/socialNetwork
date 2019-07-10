import React, { Component } from "react";
import Dialog from './Dialog/Dialog.js';
import {withAuthRedirect} from './../../hoc/WithAuthRedirect.js';

class Dialogs extends Component {
    render() {
        let dialogs = this.props.dialogs;
        let messages = "";
        let send = () => {
          let index = event.srcElement.id;
          messages = dialogs[index].data.map( item =>
              item.message
          );
          alert(messages);
        }
        let i = 0;
        let www = dialogs.map( item =>
          <div className="article" key={item.id} onClick={send} id={i++}>
              {item.name}
          </div>
        );
        return (
            <div>
                {www}
                <SendMess />
            </div>
        );
    }
}

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

Dialogs = withAuthRedirect(Dialogs);

export default Dialogs;
