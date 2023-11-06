import React from "react"
import { Pagination } from "react-bootstrap"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import {
  selectTotalResults,
  selectCurrentPage,
  setCurrentPage,
} from "../layout/layoutSlice"

const Paginator = () => {
  const dispatch = useAppDispatch()
  const currentPage = useAppSelector(selectCurrentPage)
  const totalPages = Math.ceil(useAppSelector(selectTotalResults) / 100) // page size fixed
  if (totalPages > 1) {
    return (
      <Pagination className="mt-3 align-self-center text-secondary">
        <Pagination.First onClick={() => dispatch(setCurrentPage(1))} />
        <Pagination.Prev
          onClick={() =>
            dispatch(setCurrentPage(currentPage > 1 ? currentPage - 1 : 1))
          }
        />
        <Pagination.Item>
          {" "}
          {currentPage} z {totalPages}
        </Pagination.Item>
        <Pagination.Next
          onClick={() =>
            dispatch(
              setCurrentPage(
                currentPage < totalPages ? currentPage + 1 : totalPages,
              ),
            )
          }
        />
        <Pagination.Last onClick={() => dispatch(setCurrentPage(totalPages))} />
      </Pagination>
    )
  }
  return null
}

export default Paginator
