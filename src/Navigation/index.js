import { StyledNavLink, Nav } from "./styled";
import { toTasks, toAuthor } from "../routes";

const Navigation = () => (
    <Nav>
        <li>
            <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </li>
        <li>
            <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </li>
    </Nav>
);

export default Navigation;
