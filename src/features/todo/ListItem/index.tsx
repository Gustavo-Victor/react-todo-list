import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import {
  Item,
  changeIdUpdate,
  updateText,
  removeTodo,
  toggleTodo,
} from "../todoSlice";
import { useAppDispatch } from "../../../app/hooks";
import { Container, Button, AlignDiv } from "./styles";

type Props = {
  item: Item;
  id: number;
};

export const ListItem = ({ item, id }: Props) => {
  const dispatch = useAppDispatch();

  const remove = (id: number) => {
    dispatch(removeTodo(id));
  };

  const processUpdate = (id: number | string, name: string) => {
    dispatch(changeIdUpdate(id));
    dispatch(updateText(name));
  };

  const toggleCheckbox = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <Container done={item.done}>
      <AlignDiv className="label-align">
        <input
          type="checkbox"
          name="todo-task"
          id={id + item.name}
          checked={item.done}
          onChange={toggleCheckbox}
        />
        <label htmlFor="">{item.name}</label>
      </AlignDiv>

      <AlignDiv className="buttons">
        <Button
          id="edit-task"
          color="#147a00"
          onClick={() => processUpdate(String(id), item.name)}
        >
          <AiFillEdit />
        </Button>
        <Button id="delete-task" color="#870400" onClick={() => remove(id)}>
          <AiFillDelete />
        </Button>
      </AlignDiv>
    </Container>
  );
};
