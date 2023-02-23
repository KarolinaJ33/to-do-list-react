import styled from "styled-components";

export const Wrapper = styled.div`
padding: 10px;

@media(max-width: 767px) {
         display: flex;
         flex-direction: column;
         align-items: center;
    } 
`;

export const Button = styled.button`
    background: transparent;
    color: hsl(180, 100%, 25%);
    border: none;
    margin: auto;
    cursor: pointer;
    transition: 0.5s;

    &:hoover{
     color: hsl(180, 79%, 41%);
    }

    &:active{
     color: hsl(180, 79%, 46%);  
    }

    &:disabled{
     color: hsl(0, 0%, 80%);
    }
`;