import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #DEFDF0;

  h1 {
    margin: 0;
    font-family: 'Noto sans';
    padding: 16px;
    font-size: 32px;
    color: #152A38;
    border-bottom: 4px solid #E71D36;
  }
`

const Noto = props => (
  <Wrapper>
    {props.brands.map(brand => (
      <h1>{brand}</h1>
    ))}
  </Wrapper>
)

export default Noto