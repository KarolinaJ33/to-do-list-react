import Form from "../TasksPage/Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import { Container } from "../../../common/Container/styled";
import FetchButton from "./FetchButton";

function TasksPage() {
    return (
        <Container>
            <Header 
                 title="Lista zadań" 
            />
            <Section 
                title="Dodaj nowe zadanie" 
                extraHeaderContent={<FetchButton/>}
                body={<Form />} 
            />

            <Section 
                title="Wyszukiwarka" 
                body={<Search />} 
            />

            <Section
                title="Lista zadań"
                body={<TaskList />}
                extraHeaderContent={<Buttons />}
            />
        </Container>
    );
}

export default TasksPage;
