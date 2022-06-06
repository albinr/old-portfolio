import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeStore";
import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import styled from "styled-components";

const Moon = styled(FaRegMoon)`
    cursor: pointer;    
`;
const Sun = styled(FaRegSun)`
    cursor: pointer;    
`;

export const ThemeToggler = () => {
    const { theme, switchTheme } = useContext(ThemeContext);
    return (
    <>
        {theme === "dark" ? (
        <Moon size={20} color="#fff" onClick={() => switchTheme("light")} />
        ) : (
        <Sun size={20} color="#000" onClick={() => switchTheme("dark")} />
        )}
    </>
    );
};
