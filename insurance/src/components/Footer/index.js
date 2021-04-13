import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, Logo } from './FooterElements';
import ImgLogo from '../../images/logo1.jpeg';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to="/contactus">How it works</FooterLink>
                                <FooterLink to="/contactus">Testimonials</FooterLink>
                                <FooterLink to="/contactus">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/contactus">Contact</FooterLink>
                                <FooterLink to="/contactus">Support</FooterLink>
                                {/* <FooterLink to="/contactus">Terms of Service</FooterLink> */}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Type of Insurance</FooterLinkTitle>
                                <FooterLink to="/contactus">Life Insurance</FooterLink>
                                {/* <FooterLink to="/contactus">Testimonials</FooterLink>
                                <FooterLink to="/contactus">Terms of Service</FooterLink> */}
                        </FooterLinkItems>
                        <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/contactus">Instagram</FooterLink>
                                <FooterLink to="/contactus">Facebook</FooterLink>
                                <FooterLink to="/contactus">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                        <Logo src={ImgLogo}/>
                        </SocialLogo>
                        <WebsiteRights>AxDev © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
