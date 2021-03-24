import styled from 'styled-components';
import ImgBg from '../../images/insurance.jpg';

export const HeroContainer = styled.div `
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg}) no-repeat fixed;
    height: 100vh;
    width: 100%;
    background-position: relative;
    background-size: cover;
`;