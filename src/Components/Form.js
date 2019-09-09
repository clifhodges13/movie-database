import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

export default function Form() {

  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=a9758f47', {
        params: {
          s: `${inputValue}`
        }
      })
      .then(res => {
        setData(res.data.Search)
        console.log(res.data.Search)
      })
      .catch(err => {
        console.log(err)
      })
  }, [inputValue])

  const changeHandler = e => {
    setInputValue(e.target.value)
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue(data); // this is where the magic will happen. I need to figure out what to change onSubmit.
  }

  return (
    <div>
      <form onSubmit={e => submitHandler(e)}>
        Search Movie Titles:
        <input type="text" onChange={e => changeHandler(e)} />
        <button>Submit!</button>
      </form>
      <MovieCard data={data} />
    </div>
  )
}
