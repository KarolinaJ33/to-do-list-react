import React, { useState, useRef } from "react";
import { Wrapper, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };

  const inputRef = useRef(null);
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <Wrapper 
      onSubmit={onFormSubmit}>
    <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button 
        onClick={focusInput}
      >
        Dodaj zadanie
      </Button>
    </Wrapper>
  );
};

export default Form;
