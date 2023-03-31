import Form from "../TasksPage/Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";

function TasksPage() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section title="Dodaj nowe zadanie" body={<Form />} />

            <Section
                title="Lista zadań"
                body={<TaskList />}
                extraHeaderContent={<Buttons />}
            />
        </Container>
    );
}

export default TasksPage;