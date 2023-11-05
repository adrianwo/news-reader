import React, { useState } from "react"
import { useGetNewsQuery } from "../api/news"

const News = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { data, isLoading, error } = useGetNewsQuery(currentPage)

  if (isLoading) {
    console.log("loading")
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
      <div>
        <h2>Artykuły</h2>
        {data.articles.map((article, index) => (
          <div key={index}>{article.title}</div>
        ))}
      </div>
    )
  }
  return null
}

export default News
