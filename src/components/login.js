import React from 'react'
import styled from "styled-components"

function login() {
  return (
    <Container>
        <Content>
            <CTA>
                <CTAlogoOne src="/images/cta-logo-one.svg"></CTAlogoOne>
                <TextTitle>
                SIGNUP / LOGIN
            </ TextTitle>   
            
            <Description>
                Watch all movies and series here at best prices. Watch all movies and series here at best prices. Watch all movies and series here at best prices. 
            </ Description>   
            <CTAlogoTwo src="/images/cta-logo-two.png"></CTAlogoTwo>
            
            </CTA>

            

        </Content>
            
    </Container>
  )
}

export default login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

    &:before{
        background-position: top;
        background-size: cover:
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        position: absolute;
        content:"";
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        z-index: -1;
    
    }
`


const Content = styled.div`
`

const CTA = styled.div`
    max-width: 650px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    padding: 80px 40px;
`


const CTAlogoOne = styled.img`
    max-width: 650px;
    width: 100%;

`
const CTAlogoTwo = styled.img`
    max-width: 650px;
    width: 100%;

`

const TextTitle = styled.div`
    height: 30px;
    background-color: blue;
    color: white;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 2px;
    line-height: 1.5;
    align-items: center;
    font-weight: bold;

`

const Description = styled.div`
    letter-spacing: 2px;
    line-height: 1.5;
    
`