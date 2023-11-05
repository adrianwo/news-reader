import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { LayoutState } from "../../types/types";

const initialState: LayoutState = {
  listView: true,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setListView: (state, action: PayloadAction<boolean>) => {
      state.listView = action.payload;
    },
  },
});

export const { setListView } = layoutSlice.actions;

export const selectListView = (state: RootState) => state.layout.listView;

export default layoutSlice.reducer;
