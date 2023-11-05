import ArticleCounter from "../news/ArticleCounter"
import Clock from "../../components/Clock"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="container footer fixed-bottom bg-light rounded shadow-sm border ">
      <div className="d-flex footer  justify-content-between py-3 ">
        <ArticleCounter />
        <Clock />
      </div>
    </footer>
  )
}

export default Footer
