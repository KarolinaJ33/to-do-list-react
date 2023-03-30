import { HashRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import Tasks from './features/tasks/Tasks';
import Author from './features/author/Author';

export default () => (
    <HashRouter>
    <nav>
        <ul>
            <li>
                <Link to="/zadania">Zadania</Link>
            </li>
            <li>
                <Link to="/autor">O autorze</Link>
            </li>
        </ul>
        <Switch>
            <Route path="/zadania">
                <Tasks />
            </Route>
            <Route path="/autor">
                <Author />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </nav>
    </HashRouter>
);