import React from 'react';
import Article from './article';
import PropTypes from 'prop-types';

const ArticlesList = (props, context) => {
    return (
        <div>
            {Object.values(props.articles).map(article =>
            <Article 
              key={article.id}
              article={article}
              author={context.store.lookupAuthor(article.authorId)}
              />
             ) }
        </div>
    )
}

ArticlesList.contextTypes = {
    store: PropTypes.object
}

export default ArticlesList;