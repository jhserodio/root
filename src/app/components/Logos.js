import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #EEFFEE;
  color: #152A38;
  position: relative;

  small {
    position: absolute;
    font-size: 12px;
    left: 8px;
    top: 8px;
  }

  h1 {
    margin: 0;
    padding: 16px;
    font-size: 32px;
  }
`

const Logos = props => (
  <Wrapper>
    <small>
      {props.font}
    </small>
    {props.brands.map((brand, i) => (
      <h1 key={i}
          style={{fontFamily: props.font}}>
        {brand}
      </h1>
    ))}
  </Wrapper>
)

export default Logos