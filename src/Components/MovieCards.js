import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import { useSpring, animated } from 'react-spring'

export default function MovieCards({data}) {
  console.log(data)

  const props = useSpring({
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    from: {
      opacity: 0,
      transform: 'translateY(500px) scale(0)'
    }
  })

  return (
    <>
      {
        data && data.data.Search.map((movie, index) => {
        console.log(movie)
        return (
          <animated.div style={props} key={index}>
            <Link to={`/${index + 1}`}>
              <MovieCard style={{width: '100px'}} movie={movie} />
            </Link>
          </animated.div>
        )
      })}
    </>
  )
}
