import React, { useContext } from 'react'
import { NewsContext } from '../NewsContext'
import NewsArticle from './NewsArticle'
import NavBar from '../Bootstraps/nav'

function News() {
const { data } = useContext(NewsContext)
console.log(data)
    return (
        <div className = "container-fluid">
            <div>
                <NavBar />
            </div>
            <div className = 'row justify-content-around'>
            {data
                ? data.articles.map((news) => (
                    <NewsArticle data = {news} key = {news.url} />
                ))
                : "Loading"
            }
            
        </div>
        </div>
        
    )
}

export default News
