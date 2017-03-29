import React from 'react'
import styled from 'styled-components'

// background: #FF3A04;
// color: #4FD9D6;

const Wrapper = styled.div`
  background: #efefef;
  color: #121212;

  h1 {
    margin: 0;
    font-family: 'Quicksand';
    padding: 16px;
    font-weight: 400;
    font-size: 56px;
  }
`

const Eorix = props => (
  <Wrapper>
    <h1>
      EOrix
    </h1>
  </Wrapper>
)

export default Eorix