import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { news } from "../features/api/news"
import layoutReducer from "../features/layout/layoutSlice"
export const store = configureStore({
  reducer: {
    [news.reducerPath]: news.reducer,
    layout: layoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(news.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
