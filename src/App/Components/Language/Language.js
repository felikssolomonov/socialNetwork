import React, { Component } from "react";


class Language extends Component {
    render() {
        let state = this.props.menu;
        let textMenu = state.textMenu;
        let send = () => {
          this.props.addMenuItem();
        }
        let onChanged = (e) => {
          let body = e.target.value;
          this.props.refreshText(body);
        }
        return (
            <div>
                <h1>Article!</h1>
                <div>
                    <textarea onChange={onChanged}
                              value={textMenu}
                              />
                </div>
                <p>{textMenu}</p>
                <div>
                    <button onClick={send}>
                        обычная функция
                    </button>
                </div>
            </div>
        );
    }
}

export default Language;
