import React from 'react';
import storeProvider from './storeProvider'

const Article = (props) => {
    const { article, author } = props;
    return (
        <div>
            <div> {article.title} </div>
            <div> {article.date} </div>
            <div>
                <a href={author.website} >
                    {author.firstName} {author.lastName}
                </a>
            </div>
            <div> {article.body} </div>

        </div>
    )
}

function extraProps(store, originalProps) {
  return {
      author: store.lookupAuthor(originalProps.article.authorId)
  }
}

export default storeProvider(extraProps)(Article); //here you can pass a generic function which can be used by component to achieve required computation