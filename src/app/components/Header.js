import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: black;
  color: white;
  
  h1 {
    margin: 0;
    padding: 16px;
    font-size: 24px;
    letter-spacing: 0.1em;
  }
`

const Header = props => (
  <Wrapper>
    <h1>
      root - Lich - Eston
    </h1>
  </Wrapper>
)

export default Header