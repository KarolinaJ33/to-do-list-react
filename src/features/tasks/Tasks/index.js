import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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

export default Tasks;