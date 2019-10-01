import React from 'react'

export default function MovieDetail(props) {
  console.log(props.movie)
  // props.movie is undefined for some reason
  return (
    <div>
      {/* {movie && <img src={movie.Poster} alt={`${movie.Title} Poster`} />} */}
    </div>
  )
}
