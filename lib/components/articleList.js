import React from 'react';
import ArticleContainer from './article';
import PropTypes from 'prop-types';

const ArticlesList = (props) => {
    return (
        <div>
            {Object.values(props.articles).map(article =>
            <ArticleContainer
              key={article.id}
              article={article}
              />
             ) }
        </div>
    )
}

ArticlesList.contextTypes = {
    store: PropTypes.object
}

export default ArticlesList;