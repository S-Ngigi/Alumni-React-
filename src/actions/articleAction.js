export const fetchArticles = () => {
    return {
        type: 'FETCH_ARTICLES'

    }
}

export const fetchArticlesSuccess = (articles) => {
    return {
        type: 'FETCH_ARTICLES_SUCCESS',
        payload: articles
    }
}

export const fetchArticlesFailure = (message) => {
    return {
        type: 'FETCH_ARTICLE_FAILURE',
        payload: message
    }
}

export const addArticle = (content, author) => {
    return {
        type: 'ADD_ARTICLE',
        content,
        author
    }
}

export const updateArticle = (id, content, author) => {
    return {
        type: 'UPDATE_ARTICLE',
        id,
        content,
        author
    }
}

export const deleteArticle = id => {
    return {
        type: 'DELETE_ARTICLE',
        id
    }
}