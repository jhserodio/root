import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 960px;
  max-width: 100%;
  box-sizing: border-box;
  overflow: hidde;
  display: flex;
  margin: 20px auto;
  flex-wrap: wrap;

  div {
    margin: 10px;
    width: 300px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`


const Grid = props => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default Grid