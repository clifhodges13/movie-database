import React from 'react'
import styled from 'styled-components'

export default function Button({data, handlePrevClick, handleNextClick}) {

  const StyledButtonContainer = styled.div `
    width: 50vw;
    margin: 30px auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: 'Occupied', sans-serif;
    font-size: 16px;
    color: #333;
    & button {
      font-family: inherit;
      font-size: inherit;
      font-weight: 600;
      width: 125px;
      background: #eee;
      padding: 1%;
      border: none;
      border-radius: 10px;
    }
  `

  return (
    <StyledButtonContainer>
      {data && data.config.params.page > 1 && <button type="button" onClick={handlePrevClick}>&larr; Previous Page</button>}
      {data && <button type="button" onClick={handleNextClick}>Next Page &rarr;</button>}
    </StyledButtonContainer>
  )
}
