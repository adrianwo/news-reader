import { Article } from "../types/types"
import { Table } from "react-bootstrap"
import { formatDate } from "../utils/formatDate"
import { useAppDispatch } from "../app/hooks"
import { setArticleModal } from "../features/layout/layoutSlice"
import { useTranslation } from "react-i18next"

type Props = {
  articles: Article[]
}

const TableView = (props: Props) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const clickHandle = (index: number) => {
    dispatch(
      setArticleModal({
        show: true,
        title: props.articles[index].title,
        author: props.articles[index].author,
        content: props.articles[index].content,
        url: props.articles[index].url,
      }),
    )
  }

  return (
    <div className="table-responsive card">
      <Table striped hover>
        <thead>
          <tr>
            <th>{t("title")}</th>
            <th>{t("source")}</th>
            <th>{t("published at")}</th>
          </tr>
        </thead>
        <tbody>
          {props.articles.map((item, index) => {
            return (
              <tr key={index} onClick={() => clickHandle(index)}>
                <td>{item.title}</td>
                <td>{item.source.name}</td>
                <td>{formatDate(item.publishedAt)}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default TableView
