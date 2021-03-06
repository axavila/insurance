import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, Logo, Logo2, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, Nav2} from './NavbarElements'
import ImgLogo from '../../images/logop5.png';
import ImgLogo2 from '../../images/logo22.png';
import { IconContext } from 'react-icons/lib';

const Navbar2 = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 700) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect (() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <Nav2 scrollNav={scrollNav}>
          <NavLogo to='/' onClick={toggleHome}>
                    <Logo src={ImgLogo}/>
                     <Logo2 src={ImgLogo2}/>
                      </NavLogo>
              <NavbarContainer>
                  {/* <NavLogo to='/' onClick={toggleHome}>
                    <Logo src={ImgLogo}/>
                     <Logo2 src={ImgLogo2}/>
                      </NavLogo> */}
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                  <NavItem>
                          <NavLinks to='/' onClick={toggleHome}>Home</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='./about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='/' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Business Insurance</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='/' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Personal Insurance</NavLinks>
                      </NavItem>
                      
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to= './contactus'>Contact us</NavBtnLink>
                  </NavBtn>
              </NavbarContainer> 
          </Nav2>
          </IconContext.Provider>
        </>
    );
};

export default Navbar2;
