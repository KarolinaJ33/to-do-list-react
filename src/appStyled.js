import { NavLink } from "react-router-dom";
import styled from "styled-components";
const activeClassName = "active";

export const StyledNavLink = styled(NavLink)`
text-decoration: none;

&.${activeClassName} {
    font-weight: bold;
    color: black;
}
`;