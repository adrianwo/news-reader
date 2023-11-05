import React, { useState, useEffect } from "react"
import { useGetNewsQuery } from "../api/news"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  setTotalResult,
  selectListView,
} from "../../features/layout/layoutSlice"
import TableView from "../../components/TableView"
import CardView from "../../components/CardView"

const News = () => {
  const dispatch = useAppDispatch()
  const [currentPage] = useState<number>(1)
  const { data, isLoading, error } = useGetNewsQuery(currentPage)
  const isListView = useAppSelector(selectListView)

  useEffect(() => {
    if (data) {
      dispatch(setTotalResult(data.totalResults))
    }
  }, [data, dispatch])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (error) {
    if ("status" in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = "error" in error ? error.error : JSON.stringify(error.data)

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return <div>{error.message}</div>
    }
  }
  if (data) {
    return (
      <div className="main py-3">
        {isListView ? (
          <TableView articles={data.articles} />
        ) : (
          <CardView articles={data.articles} />
        )}
      </div>
    )
  }
  return null
}

export default News
