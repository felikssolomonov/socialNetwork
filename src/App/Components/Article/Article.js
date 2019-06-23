import React, { Component } from "react";

import {addPost, refreshText} from './../../redux/state.js';


class Article extends Component {
    render() {
        let newPostEl = React.createRef();

        let send = () => {
          this.props.dispatch(addPost());
        }

        let onChanged = () => {
          let text = newPostEl.current.value;
          this.props.dispatch(refreshText(text));
        }

        return (
            <div>
                <h1>Article!</h1>
                <div>
                    <textarea onChange={onChanged}
                              ref={newPostEl}
                              value={this.props.newText}
                              />
                </div>
                <p>{this.props.newText}</p>
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
