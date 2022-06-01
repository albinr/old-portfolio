import styled from 'styled-components';
import {Link} from 'react-scroll';

export const ScrollButton = styled(Link)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? '#3498DB' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '20px 16px' : '10px 20px')};
    margin: 10px;
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => () => primary ? '#fff' : '#3498DB'};
    }

`;