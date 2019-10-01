import React from 'react'
import styled from 'styled-components'
import MovieCards from './MovieCards'
import Button from './Button'

export default function Movies({data, api_call}) {

  const StyledMovies = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  `

  const handlePrevClick = (e) => {
    e.preventDefault()
    const prevPage = (parseInt(data.config.params.page, 10) - 1)
    console.log(data, prevPage)
    api_call(data.config.params.s, prevPage)
  }

  const handleNextClick = (e) => {
    e.preventDefault()
    const nextPage = (parseInt(data.config.params.page, 10) + 1)
    console.log(data, nextPage)
    api_call(data.config.params.s, nextPage)
  }
  
  return (
    <>
      <StyledMovies>
        <MovieCards data={data} />
      </StyledMovies>
      <Button data={data} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />
    </>
  )
}
