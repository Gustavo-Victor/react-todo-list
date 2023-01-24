import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useState, useEffect } from "react";
import { Container, Area, MainTitle } from "./styles";
import { selectTodo, Item, updateAllList } from "../todoSlice";
import { TaskInput } from "../TaskInput";
import { ListItem } from "../ListItem";

type ObjDataType = {
  todoList: Item[];
};

function Todo() {
  const list: Item[] = useAppSelector(selectTodo);

  return (
    <Container>
      <Area>
        <MainTitle>Lista de Tarefas</MainTitle>

        <TaskInput />

        {list.length > 0 ? (
          list.map((item, index) => (
            <ListItem item={item} id={index} key={index + item.name} />
          ))
        ) : (
          <p>Não há elementos na lista</p>
        )}
      </Area>
    </Container>
  );
}

export default Todo;
