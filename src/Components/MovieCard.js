import React from 'react'
import styled from 'styled-components'

export default function MovieCard({movie}) {

  const StyledMovieCard = styled.div `
    ${'' /* width: 15%; */}
    ${'' /* padding: 3%; */}
    margin: 5%;
    text-decoration: none;
    color: white;
    position: relative;
    ${'' /* & .movieTitle {
      position: absolute;
      top: 50%;
      left: 10%;
      width: 200px;
      z-index: -1;
      transition: all .2s ease;
    } */}
    ${'' /* & h2 {
      font-size: 32px;
    }  */}
    & img {
      width: 100%;
      border-radius: 20px;
      box-shadow: 0 10px 5px rgba(0,0,0,.7);
      margin-bottom: 30px;
      z-index: 1000;
      &:hover {
        opacity: .5;
        z-index: -1000;
      }
    }
  `

  return (
    <StyledMovieCard>
      {/* <div className="movieTitle">
        <h2>{movie.Title}</h2>
        <h4>{movie.Year}</h4>
      </div> */}
      
      <img src={movie.Poster} alt={`${movie.Title} Poster`} />
    </StyledMovieCard>
  )
}
