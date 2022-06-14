import styled from 'styled-components';

export const AButton = styled.a`
    border-radius: 6px;
    white-space: nowrap;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: fit-content;
    align-items: center;
    transition: all 0.2s ease-in-out;
    background: ${(p) => p.theme.background};
    border: 1px solid #ccc;
    padding: 10px 14px;
    color: ${(p) => p.theme.text};
    font-size: 1rem;
    &:hover {
        transition: all 0.2s ease-in-out;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        color: ${(p) => p.theme.background};
        background: ${(p) => p.theme.text};
    }

`;