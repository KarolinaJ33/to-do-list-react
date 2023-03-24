import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
         display: flex;
         flex-direction: column;
         align-items: center;
    } 
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: auto;
    cursor: pointer;
    padding: 10px;
    transition: filter 0.3s;

    &:hover{
     filter: brightness(110%);
    }

    &:active{
     filter: brightness(120%);  
    }

    &:disabled{
     color: ${({ theme }) => theme.color.silver};
     cursor: not-allowed;
    }
`;