import React, { Component } from "react";


class Language extends Component {
    render() {
        let textMenu = this.props.textMenu;
        let send = () => {
          this.props.addMenuItem();
        }
        let onChanged = (e) => {
          let text = e.target.value;
          this.props.refreshText(text);
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
