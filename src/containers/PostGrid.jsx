import React from 'react';

import Post from './Post';

const ArticleGrid = ({articles}) => (
    <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
        {articles.map(article => (<Post key={article.id} article={article}/>))}
    </div>
);

export default ArticleGrid