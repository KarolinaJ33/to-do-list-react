import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, Navigation } from "./appStyled";

export default () => (
    <HashRouter>
        <nav>
            <Navigation>
                <li>
                    <StyledNavLink activeClassName="active" to="/zadania">
                        Zadania
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink activeClassName="active" to="/autor">
                        O autorze
                    </StyledNavLink>
                </li>
            </Navigation>
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>{" "}
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);
