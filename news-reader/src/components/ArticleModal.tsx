import React from "react"
import { Modal } from "react-bootstrap"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  selectArticleModal,
  setArticleModal,
} from "../features/layout/layoutSlice"
import { useTranslation } from "react-i18next"

const ArticleModal = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { show, title, content, author, url } =
    useAppSelector(selectArticleModal)
  return (
    <Modal
      show={show}
      onHide={() => dispatch(setArticleModal({ show: false }))}
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <div className="w-100 d-flex flex-row  text-body-secondary justify-content-between">
          <div>
            <small>
              {" "}
              {t("Author")}: {author}{" "}
            </small>
          </div>
          <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <small>{t("Read article")}</small>
            </a>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ArticleModal
