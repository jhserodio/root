import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #EFFFE9;
  color: #011627;

  h1 {
    margin: 0;
    font-family: 'Abel';
    padding: 16px;
    font-size: 32px;
  }
`

const Abel = props => (
  <Wrapper>
    {props.brands.map(brand => (
      <h1>{brand}</h1>
    ))}
  </Wrapper>
)

export default Abel