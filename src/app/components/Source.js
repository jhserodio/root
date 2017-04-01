import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #efefef;
  color: #121212;

  h1 {
    margin: 0;
    font-family: 'Source sans pro';
    padding: 16px;
    font-size: 32px;
  }
`

const Source = props => (
  <Wrapper>
    <h1>
      root
    </h1>
  </Wrapper>
)

export default Source