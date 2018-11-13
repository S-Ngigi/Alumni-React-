import React, { Component } from 'react';
import {Link} from "react-router-dom";
// * React manenos
import {connect} from "react-redux";
// * Action manenos
import {articles} from "../actions/indexAction";

class Articles extends Component {


    state = {
        content:"",
        author: "",
        updateArticleId: null,
    }

    resetForm = () => {
        this.setState({content: "", author: "", updateArticleId: null});
    }

    selectForEdit = (id) => {
        let article = this.props.articles[id];
        this.setState({
            content: article.content, author: article.author, updateArticleId: id
        });
    }

    submitArticle = (event) => {
        event.preventDefault();
        if (this.state.updateArticleId === null) {
            this.props.addArticle(this.state.content, this.state.author);
        } else {
            this.props.updateArticle(this.state.updateArticleId, this.state.content);
        }
        this.resetForm();
    }

    render() {
        return (
            <div>
                <h2>Welcome to Alumni Engagement</h2>
                <p className="App-link">
                    <Link to="/">Home bruv!</Link>
                </p>
                <hr/>
                <h3>Alumni Articles</h3>

                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addArticle: (content, author) => {
            dispatch(articles.addArticle(content, author));
        },
        updateArticle: (id, content, author) => {
            dispatch(articles.updateArticle(id, content, author));
        },
        deleteArticle: (id) => {
            dispatch(articles.deleteArticle(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);