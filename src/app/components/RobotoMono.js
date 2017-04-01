import React from 'react'
import styled from 'styled-components'

// #CAF6FF

const Wrapper = styled.div`
  background: #EEFFEE;
  color: #152A38;

  h1 {
    margin: 0;
    font-family: 'Roboto Mono';
    padding: 16px;
    letter-spacing: .05em;
    font-weight: normal;
    font-size: 32px;
    letter-space:
  }
`

const RobotoMono = props => (
  <Wrapper>
    {props.brands.map(brand => (
      <h1>{brand}</h1>
    ))}
  </Wrapper>
)

export default RobotoMono