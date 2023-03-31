import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from 'react-router-dom';

function TaskPage() {
    const params = useParams();
    return (
        <Container>
            <Header title="Szczegóły zadania" />
            <Section title={""} body={<>nana</>} />
        </Container>
    );
}

export default TaskPage;
