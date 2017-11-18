import React from 'react';
import storeProvider from './storeProvider'

const Article = (props) => {
    const { article, store } = props;
    const author= store.lookupAuthor(article.authorId);
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



export default storeProvider(Article);