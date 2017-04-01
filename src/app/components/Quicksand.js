import React from 'react'
import styled from 'styled-components'

// background: #FF3A04;
// color: #4FD9D6;

const Wrapper = styled.div`
  background: #EEFFEE;
  color: #152A38;
  
  h1 {
    margin: 0;
    font-family: 'Quicksand';
    padding: 16px;
    font-weight: 400;
    font-size: 32px;
  }
`

const Quicksand = props => (
  <Wrapper>
    {props.brands.map(brand => (
      <h1>{brand}</h1>
    ))}
  </Wrapper>
)

export default Quicksand