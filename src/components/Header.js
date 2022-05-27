import React from 'react'
import styled from "styled-components"

function header() {
  return (
    <Nav>
        <Logo src="./images/logo.svg"></Logo>
        <NavMenu>
            <a>
            <img src="./images/home-icon.svg" />
            <span>HOME</span>
            </a>

            <a>
            <img src="./images/search-icon.svg" />
            <span>SEARCH</span>
            </a>

            <a>
            <img src="./images/watchlist-icon.svg" />
            <span>WATCHLIST</span>
            </a>

            <a>
            <img src="./images/original-icon.svg" />
            <span>ORIGINAL</span>
            </a>


            <a>
            <img src="./images/movie-icon.svg" />
            <span>MOVIES</span>
            </a>

            <a>
            <img src="./images/series-icon.svg" />
            <span>SERIES</span>
            </a>
        </NavMenu>

        <UserImg src="/images/sid.jpg">


        </UserImg>
    </Nav>
  )
}

export default header

const Nav = styled.div`
    height: 70px;
    background-color: black;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;

`

const Logo = styled.img`
width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        
        img{
        height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
    

`

const UserImg = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
cursor: pointer;

`