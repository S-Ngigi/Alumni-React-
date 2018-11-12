export const fetchArticles = () => {
    return {
        
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