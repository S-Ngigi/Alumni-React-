import {combineEpics} from 'redux-observable';
import {fetchArticlesFailure, fetchArticlesSuccess} from "../actions/articleAction"
import {Observable} from 'rxjs';
// import {filter, mergeMap, catchError} from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import {ajax} from 'rxjs/observable/dom/ajax';

const url = `https://jsonplaceholder.typicode.com/posts?userId=1`;

const fetchArticlesEpic = (action$) => {
    return action$
        .ofType('FETCH_ARTICLES')
        .switchMap(()=>{
            return ajax
                .getJSON(url)
                .map(data => data)
                .map(articles => articles.map(article => ({
                    userId: article.userId,
                    id: article.id,
                    title: article.title,
                    body: article.body
                })))
        })
        .map(articles => fetchArticlesSuccess(articles))
        .catch(error => Observable.of(fetchArticlesFailure(error.message)))
}



export  const articleEpic = combineEpics(fetchArticlesEpic);

/* const fetchArticlesEpic = (action$) => action$.pipe(
    filter(action => action.type === 'FETCH_ARTICLES'),
    mergeMap(async (action) => {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const articles = await fetch(url).then(res => res.json());
        return Object.assign({}, action, { type: 'FETCH_ARTICLES_SUCCESS', articles })


    }),
    catchError(error => Promise.resolve({ type: 'FETCH_ARTICLE_ERROR', message: error.message }))


); */