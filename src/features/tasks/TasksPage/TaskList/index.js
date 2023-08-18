import { useSelector, useDispatch } from "react-redux";
import { useQueryParameter } from "../Search/queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";
import {
    selectTasksByQuery,
    toggleTaskDone,
    removeTask,
    selectHideDone,
} from "../../tasksSlice";
import {
    List,
    Item,
    Content,
    ToggleDoneButton,
    RemoveButton,
    StyledLink,
} from "./styled";

export const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);

    const tasks = useSelector((state) => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map((task) => (
                <Item key={task.id} hidden={task.done && hideDone}>
                    <ToggleDoneButton
                        toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </ToggleDoneButton>
                    <Content done={task.done}>
                        <StyledLink to={toTask({ id: task.id })}>
                            {task.content}
                        </StyledLink>
                    </Content>
                    <RemoveButton
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </RemoveButton>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;
