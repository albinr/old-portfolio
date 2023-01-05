import React from "react";
import styled from "styled-components";
// import { HiMail } from "react-icons/hi";
import { MdMail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = () => {

    const ICON_SIZE = 30;

  return (
    <>
        <Container>
            <a href="mailto: albin@rybergs.net" target="_blank" rel="noreferrer">
                <MdMail size={ICON_SIZE}/>
                <div>    
                    <h2>Email</h2>
                    <p>albin@rybergs.net</p>
                </div>
            </a>
            <a href="https://github.com/AlbinR" target="_blank" rel="noreferrer">
                <FaGithub size={ICON_SIZE}/>
                <div>    
                    <h2>GitHub</h2>
                    <p>albinr</p>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/albin-ryberg-bb22341a6/" target="_blank" rel="noreferrer">
                <FaLinkedin size={ICON_SIZE}/>
                <div>    
                    <h2>LinkedIn</h2>
                    <p>Albin Ryberg</p>
                </div>
            </a>
            <a href="https://twitter.com/AlbinRyberg" target="_blank" rel="noreferrer">
                <FaTwitter size={ICON_SIZE}/>
                <div>    
                    <h2>Twitter</h2>
                    <p>@AlbinRyberg</p>
                </div>
            </a>
        </Container>
    </>
  );
};

export default Socials;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    margin: 0 0 20px 0;
    a{
        text-decoration: none;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
        min-width: 300px;
        margin: 6px;
        padding: 20px;
        color: ${(p) => p.theme.text};
        border-radius: 12px;
        font-size: 1rem;
        background: ${(p) => p.theme.onSurface};
        border: 1px solid ${(p) => p.theme.border};
        &:hover{
            transition: all 0.2s ease-in-out;
            filter: brightness(0.8);
        }
        div{
            display: flex;
            flex-direction: column;
            /* padding-left: 4px; */
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;

        }
    }
`;