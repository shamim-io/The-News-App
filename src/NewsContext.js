import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = '096093f0463c4f76902285bd1dc6a797';

    // 'http://newsapi.org/v2/top-headlines?' +
    // 'country=us&' +
    // 'apiKey=096093f0463c4f76902285bd1dc6a797';

    useEffect(() => {
        axios.get('http://newsapi.org/v2/top-headlines?' +
        'country=' + props.country + '&' +
        'apiKey='+apiKey).then(response => setData(response.data))
        .catch(error => console.log(error))
        
    }, [])

    return (
        <NewsContext.Provider value = {{data}}>
            {props.children}
        </NewsContext.Provider>
    )
}
