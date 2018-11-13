/* const initialState = [{
    content: "I Am The Best Engineer In The World!!",
    author: "TheGreatest"
}];
 */

const initialState = {
    articles: [],
    isLoading: false,
    error: null
};

export default function articles(state = initialState, action) {
    // let article_list = state.slice();
    switch (action.type) {

        case 'FETCH_ARTICLES':
            return {
                ...state,
                isLoading: true,
                error: null
            };
        
        case 'FETCH_ARTICLES_SUCCESS':
            return {
                articles: [...action.payload],
                isLoading: false,
                error: null
            };

        case 'FETCH_ARTICLES_FAILURE':
            return {
                articles: [],
                isLoading: false,
                error: action.payload
            }

        /* case 'FETCH_ARTICLES':
            return [...action.articles, ...state]

        case 'ADD_ARTICLE':
            return [{ content: action.content, author: action.author }, ...state]

        case 'UPDATE_ARTICLE':
                let article_to_update = article_list[action.id];
                article_to_update.content = action.content;
                article_list.splice(action.id, 1, article_to_update);
                return article_list;
        
        case 'DELETE_ARTICLE':
                article_list.splice(action.id, 1);
                return article_list;
         */        
        // * Returns our initialState object/array as state.
        default:
            return state;
    }
}