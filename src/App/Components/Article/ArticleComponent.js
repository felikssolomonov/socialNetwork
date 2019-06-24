import React, { Component } from "react";
import Article from "./Article.js";
import {addMenuItem, refreshText} from './../../redux/reducers/menu_reducer.js';

class ArticleComponent extends Component {
    render() {
        let send = () => {
          this.props.dispatch(addMenuItem());
        }
        let onChanged = (text) => {
					let action = refreshText(text);
					this.props.dispatch(action);
        }
        return (
            <Article 	refreshText={onChanged}
											addMenuItem={send}
											textMenu={this.props.textMenu}
											/>
        );
    }
}

export default ArticleComponent;
