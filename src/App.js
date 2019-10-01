import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import Search from './Components/Search'
import Movies from './Components/Movies'
import MovieDetail from './Components/MovieDetail'
import './App.css'

export default function App() {

  const [data, setData] = useState()

  const api_call = (input, page) => {
    axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=a9758f47`,
      { params: {
          s: `${input}`,
          page: `${page}`
        }
      })
      .then(res => {
        setData(res)
        console.log(res)
      })
      .catch(err => {
        console.log(`*** Error: ${err}`)
      })
  }

  useEffect(() => {
    api_call('back', 1)
  }, [])
  
  return (
    <div className="App">

      <Search api_call={api_call} />

      {/* {data && <h2>Page {data.config.params.page}</h2>} */}

      <Route exact path="/" render={(props) => (
        <Movies {...props} data={data} api_call={api_call} />
      )} />

      <Route path="/:id" component={MovieDetail} />

    </div>
  )
}
