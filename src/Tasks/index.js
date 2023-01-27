import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="task">
    {tasks.map(task => (
      <li key={task.id}
        className={`task__item${
          task.done && hideDone
          ? " task__item--hidden "
          : ""}`
          }
      >
        <button 
          className="task__button task__button--done"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </button>

        <span className={
          `task__content${task.done ? " task__content--done " : ""}`
          }>
          {task.content}
        </span>
        <button
          className="task__button task__button--remove"
          onClick={() => removeTask(task.id)}
          >
          🗑
        </button>
      </li>
   ))}
  </ul>
);

export default Tasks;