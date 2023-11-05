import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Article, ListResponse } from "../../types/types"

const apiKey = import.meta.env.VITE_APP_API_KEY
export const news = createApi({
  reducerPath: "news",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/",
  }),
  endpoints: (builder) => ({
    getNews: builder.query<ListResponse<Article>, number>({
      query: (page: number) => `everything?q=*&apiKey=${apiKey}&page=${page}`,
    }),
  }),
})

export const { useGetNewsQuery } = news
