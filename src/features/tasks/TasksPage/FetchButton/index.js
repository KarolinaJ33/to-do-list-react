import { useDispatch, useSelector } from "react-redux";
import { ButtonsWrapper } from "../Buttons/styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";
import { Button } from "../../Button/styled";

const FetchButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);

    return (
        <ButtonsWrapper>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Trwa ładowanie" : "Pobierz przykładowe zadania"}
            </Button>
        </ButtonsWrapper>
    );
};

export default FetchButton;
