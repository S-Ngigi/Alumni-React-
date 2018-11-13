import React, { Component } from 'react';
import {Link} from "react-router-dom";
// * React manenos
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
// * Action manenos
// import {articles} from "../actions/indexAction";
import {fetchArticles} from "../actions/articleAction";

import ArticleGrid from '../containers/PostGrid';


class Articles extends Component {


    /* state = {
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
    } */

    render() {
        const {
            fetchArticles,
            isLoading,
            error,
            articles
        } = this.props

        return (
            <div>
                <h2>Welcome to Alumni Engagement</h2>
                <p className="App-link">
                    <Link to="/">Home bruv!</Link>
                </p>
                <hr/>
                <h3>Alumni Articles</h3>

                <button onClick={fetchArticles}>Fetch Articles</button>
                {isLoading && <h1>Fetching data</h1>}
                {!isLoading && !error && <ArticleGrid articles={articles}/>}
                {error && <h1>{error}</h1>}
            </div>
        );
    }
}
/* 
const mapStateToProps = state => {
    return {
        articles: state.articles,
    }
} */

const mapStateToProps = state => ({...state.articles});

const mapDispatchToProps = dispatch => bindActionCreators({
        fetchArticles
    }, dispatch);
    /* return {
        addArticle: (content, author) => {
            dispatch(articles.addArticle(content, author));
        },
        updateArticle: (id, content, author) => {
            dispatch(articles.updateArticle(id, content, author));
        },
        deleteArticle: (id) => {
            dispatch(articles.deleteArticle(id));
        },
    } */

export default connect(mapStateToProps, mapDispatchToProps)(Articles);