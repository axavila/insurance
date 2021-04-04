import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, Logo, Logo2, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import ImgLogo from '../../images/logop5.png';
import ImgLogo2 from '../../images/logo22.png';

const Navbar = ({toggle}) => {
    return (
        <>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/'>
                    <Logo src={ImgLogo}/>
                     <Logo2 src={ImgLogo2}/>
                      </NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars />
                  </MobileIcon>
                  <NavMenu>
                  <NavItem>
                          <NavLinks to='home'>Home</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='about'>About Us</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='insurances'>Business Insurance</NavLinks>
                      </NavItem>
                      <NavItem>
                          <NavLinks to='personal'>Personal Insurance</NavLinks>
                      </NavItem>
                      
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to= './contactus'>Contact us</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
        </>
    );
};

export default Navbar;
