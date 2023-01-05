import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeStore";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
// import { HiOutlineSun , HiOutlineMoon } from 'react-icons/hi';
import styled from "styled-components";

const Moon = styled(FaRegMoon)`
    margin: 0 1rem;
    height: 100%;
    cursor: pointer;
    color: ${(p) => p.theme.gray};
    :hover {
        color: ${(p) => p.theme.accent};
        transition: 0.2s all ease-out;
    } 
`;
const Sun = styled(FaRegSun)`
    margin: 0 1rem;
    height: 100%;
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
        <Moon size={20}  onClick={() => switchTheme("light")} />
        ) : (
        <Sun size={20}  onClick={() => switchTheme("dark")} />
        )}
    </>
    );
};
