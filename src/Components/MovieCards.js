import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'

export default function MovieCards({data, id}) {

  return (
    <>
      {data && data.map((movie, index) => {
        return (
          <Link to={`movie/${id}`} key={index}>
            <MovieCard movie={movie} />
          </Link>
        )
      })}
    </>
  )
}

// next, have the functionality to open a page when clicking on any movie that will contain the full description, rating, etc.