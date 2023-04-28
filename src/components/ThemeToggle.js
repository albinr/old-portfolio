import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeStore";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
// import { HiOutlineSun , HiOutlineMoon } from 'react-icons/hi';
import styled from "styled-components";

const Dark = styled(FaRegLightbulb)`
    margin: 0 0 0 10px;
    /* height: 100%; */
    cursor: pointer;
    color: ${(p) => p.theme.gray};
    :hover {
        color: ${(p) => p.theme.accent};
        transition: 0.2s all ease-out;
    } 
`;
const Light = styled(FaLightbulb)`
    margin: 0 0 0 10px;
    /* height: 100%; */
    cursor: pointer;
    color: ${(p) => p.theme.gray};
    :hover {
        color: ${(p) => p.theme.accent};
        transition: 0.2s all ease-out;
    }
`;

export const ThemeToggler = () => {
    const { theme, switchTheme } = useContext(ThemeContext);
    return (
    <>
        {theme === "dark" ? (
        <Dark size={20}  onClick={() => switchTheme("light")} />
        ) : (
        <Light size={20}  onClick={() => switchTheme("dark")} />
        )}
    </>
    );
};
