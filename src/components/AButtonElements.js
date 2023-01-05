import styled from 'styled-components';

export const AButton = styled.a`
    border-radius: 6px;
    font-weight: bold;
    white-space: nowrap;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: fit-content;
    align-items: center;
    transition: all 0.2s ease-in-out;
    border: 1px solid ${(p) => p.theme.border};
    background: ${(p) => p.theme.buttonBg};
    padding: 10px 14px;
    color: ${(p) => p.theme.text};
    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(0.8);
    }

`;