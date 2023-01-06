import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
const initialState = {
  entities: "/",
};

export const lineSlice = createSlice({
  name: "line",
  initialState,
  reducers: {
    lineSetted(state, action: PayloadAction<string>) {
      state.entities = action.payload;
    },
  },
});

const { reducer: lineReducer, actions } = lineSlice;
const { lineSetted } = actions;

export const getLine = () => (state: RootState) => {
  return state.lineReducer.entities;
};

export const setLine = (link: string) => (dispatch: Function) => {
  dispatch(lineSetted(link));
};

export default lineReducer;
