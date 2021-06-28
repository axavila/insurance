import styled, {css} from 'styled-components/macro';
import ImgBg from '../../images/about2.png';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';


export const HeroContainer = styled.div `
    background: linear-gradient(to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${ImgBg}) no-repeat;
    top: 0%;
    right: 0%;
    bottom: 0%;
    left: 0%;
    height: 112vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    align-items: center;
    padding:  0px;
    z-index: 1;
    background-position: relative;
    background-size: cover;

    /* :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 800%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 10%);
        z-index: 2;

    } */
`;

export const HeroContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const HeroH1 = styled.h1 `
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p `
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-widht: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div `
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward) `
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight) `
margin-left: 8px;
font-size: 20px;
`

 export const HeroSection = styled.section `
    /* height: 100vh;
    max-height: 1080px;
    position: relative;
    overflow: hidden;
    object-fit: cover; */
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        
        height: 20rem;
        width: 30rem;
        
        
    }
    
   

    
`;

export const HeroWrapper = styled.div`
    /* width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    object-fit: cover; */

    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;

   
`;

export const HeroImage = styled.img`
    
    /* top: 0;
    left: 0;
    bottom: 0%;
    width: 100vw;
    height: 100vh;
    
    background: no-repeat fixed;
    object-fit: cover; */

    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background: no-repeat fixed;


    @media screen and (max-width: 480px) {
        
      
        height: 20rem;
        width: 50rem;
      
        
        
    }

`;