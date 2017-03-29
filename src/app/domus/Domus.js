import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #efefef;
  color: #121212;

  h1 {
    margin: 0;
    font-family: 'Noto sans';
    padding: 16px;
    font-size: 40px;
    text-transform: uppercase;
  }
`

const Domus = props => (
  <Wrapper>
    <h1>
      Domus
    </h1>
  </Wrapper>
)

export default Domus