import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { news } from "../features/api/news"
export const store = configureStore({
  reducer: {
    [news.reducerPath]: news.reducer,
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
