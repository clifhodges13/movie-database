import React from 'react'
import SearchForm from './SearchForm'
import styled from 'styled-components'

export default function Search({api_call}) {

  const StyledSearch = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    & form {
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      & input {
        width: 300px;
        height: 20px;
        margin-right: 15px;
        border: 1px solid turquoise;
        border-radius: 5px;
      }
      & button {
        height: 20px;
        background: white;
        color: #333;
        border: 1px solid transparent;
        border-radius: 5px;
        &:hover {
          background: #333;
          color: white;
          border: 1px solid turquoise;
          cursor: pointer;
        }
      }
    }
  `

  return (
    <StyledSearch>
      <SearchForm api_call={api_call} />
    </StyledSearch>
  )
}
