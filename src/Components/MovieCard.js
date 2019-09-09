import React from 'react'

export default function MovieCard(props) {
  console.log(props)
  return (
    <div>
      {props.data.map((movie, index) => {
        return (
          <div key={index}>
            <h2>{movie.Title}</h2>
            <h4>{movie.Year}</h4>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          </div>
        )
      })}
    </div>
  )
}
