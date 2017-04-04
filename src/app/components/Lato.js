import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #EEFFEE;
  color: #152A38;

  h1 {
    margin: 0;
    font-family: 'Lato';
    padding: 16px;
    font-size: 32px;
  }
`

const Lato = props => (
  <Wrapper>
    <h1>
      <span>E</span>
      STON
    </h1>
  </Wrapper>
)

export default Lato