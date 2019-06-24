import React, { Component } from "react";


class Article extends Component {
    render() {
        let textMenu = this.props.textMenu;
        let newPostEl = React.createRef();
        let send = () => {
          this.props.addMenuItem();
        }
        let onChanged = () => {
          let text = newPostEl.current.value;
          this.props.refreshText(text);
        }
        return (
            <div>
                <h1>Article!</h1>
                <div>
                    <textarea onChange={onChanged}
                              ref={newPostEl}
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

export default Article;
