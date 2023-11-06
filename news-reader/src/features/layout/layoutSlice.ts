import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { Article, IArticleModal, LayoutState } from "../../types/types"

const initialState: LayoutState = {
  listView: false,
  totalResults: 0,
  articleModal: {
    show: false,
  },
}

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setListView: (state, action: PayloadAction<boolean>) => {
      state.listView = action.payload
    },
    setTotalResult: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload
    },
    setArticleModal: (state, action: PayloadAction<IArticleModal>) => {
      state.articleModal = action.payload
    },
  },
})

export const { setListView, setTotalResult, setArticleModal } =
  layoutSlice.actions

export const selectListView = (state: RootState) => state.layout.listView
export const selectTotalResults = (state: RootState) =>
  state.layout.totalResults
export const selectArticleModal = (state: RootState) =>
  state.layout.articleModal

export default layoutSlice.reducer
