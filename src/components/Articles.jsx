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

                <form onSubmit={this.submitArticle}>
                    <input
                        value = {this.state.content}
                        placeholder="Enter article here..."
                        onChange = {
                            (event) => this.setState({
                                content: event.target.value
                            })
                        }
                    required/>
                   <br/>
                    <input
                        value = {this.state.author}
                        placeholder="Enter author here..."
                        onChange = {
                            (event) => this.setState({
                                author:event.target.value
                            })
                        }
                    required/>
                    <br/>
                    <button onClick={this.resetForm}>Reset</button>
                    <input type="submit" value="Save Article"/>
                </form>

                <table>
                    <tbody>
                        {this.props.articles.map((article, id) =>(
                        <tr key={`article_${id}`}>
                            <td>{article.author}: </td>
                            <td>{article.content}</td>
                            <td>
                                <button onClick={
                                    () => this.selectForEdit(id)
                                }>
                                    edit
                                </button>
                            </td>
                            <td>
                                <button onClick={
                                    ()=> this.props.deleteArticle(id)
                                }>
                                delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
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