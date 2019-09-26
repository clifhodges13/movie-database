import React from 'react'
import styled from 'styled-components'

export default function MovieCard({movie}) {


// trying to get the title to only show on hover. may have to do some javascript magic for this. this css shit ain working right now.
  const StyledMovieCard = styled.div `
    padding: 3%;
    text-decoration: none;
    color: white;
    position: relative;
    & .movieTitle {
      position: absolute;
      top: 50%;
      left: 10%;
      width: 200px;
      z-index: -1;
      transition: all .2s ease;
    }
    & h2 {
      font-size: 32px;
    }
    & img {
      width: 100%;
      border-radius: 20px;
      z-index: 1000;
      &:hover {
        opacity: .5;
        z-index: -1000;
      }
    }
  `

  return (
    <StyledMovieCard>
      <div className="movieTitle">
        <h2>{movie.Title}</h2>
        <h4>{movie.Year}</h4>
      </div>
      
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
    </StyledMovieCard>
  )
}
