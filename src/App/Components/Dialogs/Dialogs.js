import React, { Component } from "react";
import Dialog from './../Dialogs/Dialog/Dialog.js';

class Dialogs extends Component {
    render() {
        let dialogs = this.props.dialogs;
        let messages = "";
        let send = () => {
          let index = event.srcElement.id;
          // let d = dia
          //               // .filter(card => card.name === "three")
          //               .map(item => {
          //                 <p>{item.name}</p>
          //               });
          messages = dialogs[index].data.map( item =>
              item.message
          );
          alert(messages);
        }
        let i = 0;
        let www = dialogs.map( item =>
          <div className="article" onClick={send} id={i++}>
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
