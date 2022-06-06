import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 10px;
    white-space: nowrap;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: fit-content;
    align-items: center;
    transition: all 0.2s ease-in-out;
    background: #fff;
    border: 1px solid #ccc;
    padding: 10px 14px;
    color: #000;
    font-size: 1rem;
    /* background: ${({primary}) => (primary ? '#010606' : '#fff')};
    border: 1px solid ${({primary}) => (primary ? '#ccc' : '#000')};
    padding: ${({big}) => (big ? '10px 14px' : '10px 14px')};
    color: ${({dark}) => (dark ? '#fff' : '#010606')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')}; */
    &:hover {
        transition: all 0.2s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        /* background: ${({primary}) => () => primary ? '#fff' : '#3498DB'}; */
    }

`;