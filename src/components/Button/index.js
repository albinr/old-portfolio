import React from "react";
import {StyledButton} from "./ButtonElements"

export const Button = ({
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width}) => {
    return( 
        <button 
        onClick={onClick}
         style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
        }} >
        {children}
        </button>
    );
};