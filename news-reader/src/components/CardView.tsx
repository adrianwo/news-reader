import { Row, Col } from "react-bootstrap"
import { Article } from "../types/types"
import { ArticleCard } from "./ArticleCard"
type Props = {
  articles: Article[]
}

const CardView = (props: Props) => {
  const clickHandle = (index: number) => {}

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
