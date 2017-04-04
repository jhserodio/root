import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #EEFFEE;
  color: #152A38;
  width: 600px;
  margin: 20px auto;
  display: flex;
  justify-content: center;

  h1 {
    font-weight: 900;
    margin: 0;
    letter-spacing: 0.04em;
    font-family: 'Lato';
    padding: 16px;
    font-size: 120px;

    span {
      color: #EEFFEE;
      text-shadow: -1px -1px 0 #152A38,  
                   1px -1px 0 #152A38,
                   -1px 1px 0 #152A38,
                   1px 1px 0 #152A38;
    }
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