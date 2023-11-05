import React from "react"

import { useAppSelector } from "../../app/hooks"
import { selectTotalResults } from "../../features/layout/layoutSlice"

const ArticleCounter = () => {
  const totalResults = useAppSelector(selectTotalResults)

  return <div>Ilość artykułów: {totalResults}</div>
}

export default ArticleCounter
