import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ImgBg from '../../images/back1.jpg';
import ImgBg1 from '../../images/contact1.jpg';

export const Container1 = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.2)), url(${ImgBg1}) no-repeat fixed;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    z-index: 1;
    background-position: relative;
    background-size: cover;
    /* background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg}) no-repeat fixed;
    min-height: 692px;
    /* position: fixed; */
    /* bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    overflow: hidden; */ */
    /* background: linear-gradient(108deg, rgba(24, 89, 49, 1) 80%, rgba(24, 89, 49, 1) 100%); */
    
`;

export const Container = styled.div`
    background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg}) no-repeat fixed;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    z-index: 1;
    background-position: relative;
    background-size: cover;
    /* background: linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${ImgBg}) no-repeat fixed;
    min-height: 692px;
    /* position: fixed; */
    /* bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    overflow: hidden; */ */
    /* background: linear-gradient(108deg, rgba(24, 89, 49, 1) 80%, rgba(24, 89, 49, 1) 100%); */
    
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const Form1 = styled.form`
    /* background: #010101; */
    max-width: 500px;
    height: auto;
    width: 1000%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    /* padding: 80px 32px; */
    /* border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9); */

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const Form2 = styled.form`
    /* background: #010101; */
    max-width: 500px;
    height: auto;
    width: 1000%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    /* padding: 80px 32px; */
    /* border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9); */

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormH11 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 40px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FormInput1 = styled.input`
    
  
  height: 100px;
  padding: 16px 16px;
  margin-bottom: 32px;
  /* box-shadow: none; */
  /* display: block; */
  border: none;
  border-radius: 4px;
  
  
`;

export const FormButton = styled.button`
    background: #FF4500;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #fff;
    font-size: 14px;  
`;


export const InfoWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 1060px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow =styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};
    
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};

    }
`

export const Column1 =styled.div `
    margin-top: 80px;
    margin-bottom: 0px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div `
    margin-top: 80px;
    margin-left: 60px ;
    margin-bottom: 205px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

`

export const ServicesH2 = styled.h2`
    font-size: 2rem;
    margin-bottom: 10px;
    color: #fff;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    color: #fff;
    /* text-align: center; */
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;