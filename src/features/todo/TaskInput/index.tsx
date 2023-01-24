import { Container, AlignDiv, Button } from "./styles";
import {
  addTodo,
  updateTodo,
  changeIdUpdate,
  selectText,
  updateText,
  selectId,
} from "../todoSlice";
import { KeyboardEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

export const TaskInput = () => {
  const id = useAppSelector(selectId);
  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Enter" && text != "") {
      if (String(id).length != 0) {
        updateTask();
      } else {
        addNewTask();
      }
    }
  };

  const addNewTask = () => {
    if (text != "" && String(id) == "") {
      dispatch(addTodo());
      dispatch(updateText(""));
    }
  };

  const updateTask = () => {
    if (text != "" && String(id) !== "") {
      dispatch(updateTodo());
      dispatch(updateText(""));
      dispatch(changeIdUpdate(""));
    }
  };

  return (
    <Container>
      <AlignDiv>
        <div className="image">➕</div>
        <input
          id="add-task"
          name="add-task"
          type="text"
          maxLength={40}
          placeholder="Ex: Comprar pão"
          value={text || ""}
          onKeyUp={handleKeyUp}
          onChange={(e) => dispatch(updateText(e.target.value))}
        />
      </AlignDiv>
      {String(id) != "" ? (
        <Button onClick={updateTask} id="edit">
          Editar
        </Button>
      ) : (
        <Button onClick={addNewTask} id="add">
          Adicionar
        </Button>
      )}
    </Container>
  );
};
