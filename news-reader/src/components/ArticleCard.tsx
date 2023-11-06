import { Card } from "react-bootstrap"
import { useTranslation } from "react-i18next"

type ArticleCardProps = {
  title: string
  sourceName: string
  publishedAt: string
  url: string
  urlToImage: string
  description: string
}

export function ArticleCard({
  title,
  sourceName,
  publishedAt,
  url,
  urlToImage,
  description,
}: ArticleCardProps) {
  const { t } = useTranslation()
  return (
    <Card className="h-100 shadow-sm">
      {urlToImage && (
        <Card.Img
          variant="top"
          src={urlToImage}
          alt="No image"
          height="200px"
          style={{ objectFit: "cover" }}
        />
      )}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline ">
          <span className="fs-4">{title}</span>
        </Card.Title>
        <hr />
        <div className="d-flex flex-column justify-content-between h-100">
          <div>
            <div className="mb-3">{description}</div>
            <div className="d-flex flex-row justify-content-end">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <small>{t("read article")}</small>
              </a>
            </div>
          </div>
          <div className="d-flex flex-row  text-body-secondary justify-content-between">
            <small>
              {t("source")}:
              <br /> {sourceName}{" "}
            </small>
            <small>
              {t("published")}:
              <br /> {new Date(publishedAt).toLocaleString()}
            </small>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}
