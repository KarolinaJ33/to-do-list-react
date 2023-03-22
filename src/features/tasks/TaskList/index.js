import {useSelector} from "react-redux";
import { selectTasks } from "../tasksSlice";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";

const TaskList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  
  return (
  <List>
    {tasks.map(task => (
      <Item 
        key={task.id}
        hidden={task.done && hideDone}
      >
        <ToggleDoneButton 
         toggleDone
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </ToggleDoneButton>
        <Content done={task.done}>
          {task.content}
        </Content>
        <RemoveButton
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </RemoveButton>
      </Item>
   ))}
  </List>
  );
}

export default TaskList;