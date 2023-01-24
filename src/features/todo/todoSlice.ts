import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type Item = {
  id: number;
  name: string;
  done: boolean;
};

type stateType = {
  currentText: string;
  tasks: Item[];
  idUpdate: string | number;
};

type ActionTodoProps = {
  payload: {
    id?: number | any;
    taskName?: string | any;
  };
};

const initialState: stateType = {
  currentText: "",
  tasks: [],
  idUpdate: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    changeIdUpdate(state, { payload }: PayloadAction<string | number>) {
      state.idUpdate = payload;
    },
    updateText(state, { payload }: PayloadAction<string>) {
      state.currentText = payload;
    },
    toggleTodo(state, { payload }: PayloadAction<number>) {
      const index = payload;
      if (index != undefined && index != null && index >= 0) {
        const objModel = state.tasks[index];
        objModel.done = !objModel.done;
        state.tasks[index] = objModel;
      }
    },
    addTodo(state) {
      state.tasks.push({
        id: state.tasks.length,
        name: state.currentText,
        done: false,
      });
    },
    removeTodo(state, { payload }: PayloadAction<number>) {
      const index = payload;
      if (index != null && index != undefined) {
        state.tasks = state.tasks.filter(
          (item, i) => state.tasks[i] != state.tasks[index]
        );
      }
    },
    updateTodo(state) {
      if (state.idUpdate != "" && String(state.idUpdate).length != 0) {
        const index = Number(state.idUpdate);
        const objToUpdate = state.tasks[index];
        if (objToUpdate != null) {
          objToUpdate.name = state.currentText;
          state.tasks[index] = objToUpdate;
        }
      }
    },
    updateAllList(state, { payload }: PayloadAction<Item[] | null>) {
      if (payload != null) {
        state.tasks = payload;
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
  updateText,
  changeIdUpdate,
  updateAllList,
} = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo.tasks;
export const selectText = (state: RootState) => state.todo.currentText;
export const selectId = (state: RootState) => state.todo.idUpdate;
export default todoSlice.reducer;
