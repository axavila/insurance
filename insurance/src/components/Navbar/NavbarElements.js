import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'


export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#262626' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.08rem;
    position: sticky;
    top: 0;
    z-index: 10;
   

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;

export const Nav2 = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#262626' : '#262626')};
    height: 75px;
    margin-top: -80px;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.08rem;
    position: sticky;
    top: 0;
    z-index: 10;
   

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }

`;

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: flex-end;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 -24px;
    max-width: 1600px;
    /* border-bottom: 1px solid #e4e5f1 ; */



`;

export const NavLogo = styled(LinkR) `
    
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 30px;
    margin-top: 10px;
    font-weight: bold;
    text-decoration: none;

`;

export const MobileIcon = styled.div `
    display: none;


    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;

    }

    @media screen and (max-width: 400px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;

    }

    

`

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 0px;

    @media screen and (max-width: 768px) {
        display: none;
    }


`

export const NavItem = styled.li `
    height: 80px;
`

export const NavLinks = styled(LinkR) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 4px solid #1c9900;
    }
`;

export const NavBtn = styled.nav `
    display: flex;
    align-items: center;
    

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR) `
    border-radius: 50px;
    background: #FF4500;
    white-space: nowrap;
    padding: 10px 22px;
    color: #E9EAEC;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const Logo = styled.img `
width: 63px;
height: 60px;

`;

export const Logo2 = styled.img `
width: 146px;
height: 60px;
margin: 8px;
`;


export const NavLinks1 = styled(LinkS) `
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 4px solid #1c9900;
    }
`;