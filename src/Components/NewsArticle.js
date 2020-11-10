import React from 'react'

function NewsArticle({ data }) {
    return (
        <div className = 'col-sm-4'>
            <div className = "card border-primary mb-3">
                <div className = 'card-body text-secondary'>
                    <h1 className ='card-title news__title'>{ data.title }</h1>
                    <p className = "card-text news__desc">{ data.description }</p>
                </div>
                <div className = "card-footer">
                    <span className="news__author">{ data.author }</span>
                    <span className="news__published">{ data.publishedAt }</span>
                    <span className="news__source">{ data.source.name }</span>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle
