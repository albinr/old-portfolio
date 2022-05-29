import React from "react";
import {StyledButton} from "./ButtonElements"

export const Button = ({Title, btnLink}) => {
    return(
        <>
            <StyledButton href={btnLink}>{Title}</StyledButton>
        </>
    );
}