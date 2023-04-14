import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/AuthorPage";
import Navigation from "./Navigation";
import { toTasks, toAuthor, toTask } from "./routes";

const App = () => (
    <HashRouter>
        <Navigation />
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>{" "}
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to={toTask()} />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;
