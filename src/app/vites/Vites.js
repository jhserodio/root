import React from 'react'
import styled from 'styled-components'

// background: #FF3A04;
// color: #4FD9D6;

const Wrapper = styled.div`
  background: #efefef;
  color: #121212;

  h1 {
    margin: 0;
    font-family: 'Varela round';
    padding: 16px;
    font-weight: normal;
    font-size: 40px;
  }
`

const Vites = props => (
  <Wrapper>
    <h1>
      Vites
    </h1>
  </Wrapper>
)

export default Vites