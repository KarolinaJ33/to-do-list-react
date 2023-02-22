import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display:grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: hsl(0, 0%, 100%);
    width: 30px;
    height: 30px;
    border: none;
    padding: 0;
    transition: 0.5s;
    cursor: pointer;

    ${({toggleDone}) => toggleDone && css`
        background-color: hsl(120, 74%, 30%);

        &:hoover {
             background-color: hsl(120, 67%, 40%);
             cursor: pointer;
        }

        &:active {
             background-color: hsl(120, 67%, 45%); 
        }
    `}

    ${({remove}) => remove && css`
        background-color: hsl(0, 80%, 55%);

        &:hoover {
             background-color: hsl(0, 84%, 70%); 
        }
         
        &:active {
             background-color: hsl(0, 84%, 75%)
        }
    `}
`;
