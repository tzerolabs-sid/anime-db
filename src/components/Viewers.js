import React from 'react'
import styled from "styled-components"
function Viewers() {
  return (
    <Container>
        <Wrap>
            <img src="./images/viewers-disney.png" />
        </Wrap>

        <Wrap>
            <img src="./images/viewers-pixar.png" />
        </Wrap>


        <Wrap>
            <img src="./images/viewers-marvel.png" />
        </Wrap>


        <Wrap>
            <img src="./images/viewers-national.png" />
        </Wrap>


        <Wrap>
            <img src="./images/viewers-disney.png" />
        </Wrap>

     </Container>
  )
}

export default Viewers

const Container = styled.div`
    margin-top: 20px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0,1fr));
    padding: 30px 0 20px;
    
`

const Wrap = styled.div`
    cursor: pointer;
    border: solid 3px white;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        transform:scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`