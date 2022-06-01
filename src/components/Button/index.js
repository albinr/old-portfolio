import React from "react";

export const Button = ({
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    padding,
    width}) => {
    return( 
        <button 
            onClick={onClick}
            style={{
            backgroundColor: color,
            border,
            borderRadius: radius,
            height,
            width,
            padding,
        }}>
        {children}
        </button>
    );
};