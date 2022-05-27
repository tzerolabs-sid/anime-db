import React from 'react'
import styled from "styled-components"

function Detail() {
  return (
    <Container>
        <Background >
        <img src= "/images/login-background.jpg" />
        </Background>
        <ImgTitle>
        <img src="/images/viewers-pixar.png"></img>
        </ImgTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" />
                <span>Play</span>
            </PlayButton>

            <TrailerButton>
                <img src="/images/play-icon-white.png" />
                <span>Trailer</span>
                
            </TrailerButton>

            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" />
                
            </GroupWatchButton>
        </Controls>

        <SubTitle>
            2018 Family, Fantasy, Kids, Animation
        </SubTitle>

        <Description>
            An ageing Chinese mother, feeling alone when her child moves out, gets a second chance at motherhood when one of her dumplings comes to life.

        </Description>


    </Container>
  
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);

`

const Background = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;

    img {
        width: 100%;    
        height: 100%;
        object-fit: cover;
    }

`

const ImgTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;    
        height: 100%;
        object-fit: contain;
    }

`

const Controls = styled.div`
    display: flex;
`
const PlayButton = styled.button`
    
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    height: 56px;
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    text-transform: upperCase;


    &:hover {
        background: rgb(198,198,198)
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgb(0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: upperCase;
`

const GroupWatchButton = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0,0,0,0.1);
    cursor: pointer; 
    `

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgb(0,0,0,0.1);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }
`

const SubTitle = styled.div`
    margin-top: 15px;
    color: rgb(249,249,249);
    font-size: 15px;
    min-height: 20px;

`


const Description = styled.div`
    line-height: 1.4px;
    margin-top: 15px;
    font-size: 20px;

`


