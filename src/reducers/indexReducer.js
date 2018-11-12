import  {combineReducers} from 'redux';
import articles from "./articleReducer";

const alumni_articles = combineReducers({
    articles,
});

export default alumni_articles;