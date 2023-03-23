import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";

const TaskList = ({ removeTask }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
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
                    <Content done={task.done}>{task.content}</Content>
                    <RemoveButton remove onClick={() => removeTask(task.id)}>
                        🗑
                    </RemoveButton>
                </Item>
            ))}
        </List>
    );
};

export default TaskList;
