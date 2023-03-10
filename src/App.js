import Form from "./features/tasks/Form";
import Tasks from "./features/tasks/Tasks";
import Buttons from "./features/tasks/Buttons";
import Section from "./common/Section";
import Header from "./common/Header";
import { Container } from "./common/Container/styled";
import { useTasks } from "./useTasks";

function App() {
  const {
    hideDone,
    tasks,
    toggleHideDone,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default App;
