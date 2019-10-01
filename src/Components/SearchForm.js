import React, { useState } from 'react';

export default function SearchForm({api_call}) {

  const [input, setInput] = useState()

  const handleChange = e => {
    setInput(e.target.value)
    console.log(input)
  }

  const handleSubmit = e => {
    e.preventDefault()
    api_call(input, 1)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Search Movie Titles"
          name="search"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}