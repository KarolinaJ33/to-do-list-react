import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};

    ${({ hidden }) =>
        hidden &&
        css`
            display: none;
        `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) =>
        done &&
        css`
            text-decoration: line-through;
        `}
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    border: none;
    padding: 0;
    transition: filter 0.3s;
    cursor: pointer;
`;

export const ToggleDoneButton = styled(Button)`
    background: ${({ theme }) => theme.color.forestGreen};
    &:hover {
        filter: brightness(110%);
        cursor: pointer;
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const RemoveButton = styled(Button)`
    background: ${({ theme }) => theme.color.crimson};
    &:hover {
        filter: brightness(110%);
    }
    &:active {
        filter: brightness(120%);
    }
`;

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.color.teal};
    text-decoration: none;

    &:hover {
        filter: brightness(110%);
    }
`;
