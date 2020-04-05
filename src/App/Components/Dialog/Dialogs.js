import React, { Component } from "react";
import Dialog from './Dialog/Dialog.js';
import {withAuthRedirect} from './../../hoc/WithAuthRedirect.js';
import {compose} from "redux";

class Dialogs extends Component {
    render() {
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

Dialogs = compose(withAuthRedirect)(Dialogs);

export default Dialogs;
