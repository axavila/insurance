import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#FF4500' : 'CD853F')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({big}) => (big ? '16px 40px' : '14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({ big }) => (big ? '20px' : '14px')};

    &:hover {
        transform: translateY(-2px);
        transtion: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
        color: #010606;
    }
`;