const initialState = [{
    content: "I Am The Best Engineer In The World!!",
    author: "TheGreatest"
}];

export default function articles(state = initialState, action) {
    let article_list = state.slice();
    switch (action.type) {

        case 'ADD_ARTICLE':
            return [...state, 
            {content: action.content, author: action.author}]

        case 'UPDATE_ARTICLE':
                let article_to_update = article_list[action.id];
                article_to_update.content = action.content;
                article_list.splice(action.id, 1, article_to_update);
                return article_list;
        
        case 'DELETE_ARTICLE':
                article_list.splice(action.id, 1);
                return article_list;
                
        // * Returns our initialState object/array as state.
        default:
            return state;
    }
}