import { useSelector, useDispatch } from "react-redux";
import { 
  selectHideDone, 
  selectAreTasksEmpty, 
  selectIsEveryTaskDone, 
  toggleHideDone, 
  setAllDone,   
} from "../../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
  <Wrapper>
   {!areTasksEmpty  && (
     <>
       <Button 
       onClick={() => dispatch(toggleHideDone())}
      >
         {hideDone ? "Pokaż" : "Ukryj"} ukończone
       </Button>
       <Button
         onClick={() => dispatch(setAllDone())}
         disabled={isEveryTaskDone} 
       >
         Ukończ wszystkie
       </Button>
     </>
    )}
  </Wrapper>
  )
};

export default Buttons;