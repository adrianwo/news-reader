import React from "react"
import { Container, Navbar } from "react-bootstrap"
import ArticleCounter from "../news/ArticleCounter"
import Clock from "../../components/Clock"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer mt-auto py-3 bg-white shadow-sm w-100 ">
      <div className="container ">
        <span className="text-body-secondary">
          <div className="w-100 d-flex flex-row  text-body-secondary justify-content-between">
            <ArticleCounter />
            <Clock />
          </div>
        </span>
      </div>
    </footer>
  )
}

export default Footer
