import { Row, Col } from "react-bootstrap"
import { Article } from "../types/types"
import { ArticleCard } from "./ArticleCard"
import { useAppDispatch } from "../app/hooks"
import { setArticleModal } from "../features/layout/layoutSlice"

type Props = {
  articles: Article[]
}

const CardView = (props: Props) => {
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
    <Row md={2} xs={1} lg={3} className="g-3">
      {props.articles.map((item, index) => (
        <Col key={index} onClick={() => clickHandle(index)}>
          <ArticleCard
            {...{
              title: item.title,
              sourceName: item.source.name,
              publishedAt: item.publishedAt,
              url: item.url,
              urlToImage: item.urlToImage,
              description: item.description,
            }}
          />
        </Col>
      ))}
    </Row>
  )
}

export default CardView
