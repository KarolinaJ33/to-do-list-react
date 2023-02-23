import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid rgb 180, 169, 169;

    @media (max-width: 767px) {
        width: 100%;
    }  
`;

export const Button = styled.button`
    background-color: hsl(180, 100%, 25%);
    color: hsl(0, 0%, 100%);
    border: none;
    padding: 10px;
    transition: 0.5s;
    padding: 10px;

    &:hover{
     background-color: hsl(180, 100%, 30%);
     cursor: pointer;
     transform: scale(1.05); 
    }

    &:active{
     background: hsl(180, 81%, 35%); 
    }
`;

