import { useSelector, useDispatch } from "react-redux";
import {
    selectHideDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    toggleHideDone,
    setAllDone,
} from "../../tasksSlice";
import { ButtonsWrapper } from "./styled";
import { Button } from "../../Button/styled";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    if (areTasksEmpty) {
        return null;
    }

    return (
        <ButtonsWrapper>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={isEveryTaskDone}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsWrapper>
    );
}

export default Buttons;
