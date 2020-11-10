import React from 'react'
import { NewsContextProvider } from "./NewsContext"
import News from './Components/News'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <NewsContextProvider country ='us'>
        <News />
      </NewsContextProvider>
    </div>
  )
}

export default App

