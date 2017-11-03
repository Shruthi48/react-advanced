import React from 'react';
import Article from './article';

const ArticlesList = (props) => {
    return (
        <div>
            {Object.values(props.articles).map(article =>
            <Article 
              key={article.id}
              article={article}
              author={props.authors.lookupAuthor(article.authorId)}
              />
             ) }
        </div>
    )
}

export default ArticlesList;