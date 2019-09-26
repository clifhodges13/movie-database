import React from 'react'
import styled from 'styled-components'
import MovieCards from './MovieCards'

export default function Movies({data}) {

  const StyledMovies = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  `
  
  return (
    <StyledMovies>
      <MovieCards data={data} />
    </StyledMovies>
  )
}
