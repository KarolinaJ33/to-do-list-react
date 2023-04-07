import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: ${({ theme }) => theme.color.white};

&.${activeClassName} {
    font-weight: bold;
}
`;
export const Navigation = styled.ul`
list-style: none;
display: flex;
justify-content: center;
grid-gap: 30px;
margin:0;
padding: 15px;
background: ${({ theme }) => theme.color.teal};
`