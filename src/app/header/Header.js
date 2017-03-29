import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: black;
  color: white;
  
  h1 {
    margin: 0;
    padding: 16px;
    font-size: 14px;
    text-transform: uppercase;
  }
`

const Header = props => (
  <Wrapper>
    <h1>
      brands
    </h1>
  </Wrapper>
)

export default Header