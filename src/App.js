import React, { useState } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Search from './Components/Search'
import Movies from './Components/Movies'
import MovieCard from './Components/MovieCard'
import './App.css'

export default function App() {

  const [data, setData] = useState()
  const [id, setId] = useState()

  const api_call = (input) => {
    // axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=a9758f47&s=${input}`)
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=a9758f47`,
    { params: {s: `${input}`}})
      .then(res => {
        setData(res.data.Search)
        console.log(res)
        setId(res.config.params.s)
      })
      .catch(err => {
        console.log(`*** Error: ${err}`)
      })
  }
  
  return (
    <div className="App">
      <Search api_call={api_call} />
      <Movies data={data} />

      <Route exact path="/" />
      <Route path="movie/:id" render={(props) => (
        <MovieCard {...props} id={id} />
      )} />

    </div>
  )
}
