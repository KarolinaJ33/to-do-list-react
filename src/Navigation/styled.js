import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};

    &:hover {
        color: ${({ theme }) => theme.color.aeroBlue};
        border-bottom: 1px solid;
    }

    &.active {
        font-weight: bold;
    }
`;
export const Nav = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    grid-gap: 30px;
    margin: 0;
    padding: 15px;
    background: ${({ theme }) => theme.color.teal};
`;
