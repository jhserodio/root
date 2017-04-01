import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #efefef;
  color: #121212;

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
      Root
    </h1>
    <h1>
      ROOT
    </h1>
    <h1>
      root
    </h1>
  </Wrapper>
)

export default Lato