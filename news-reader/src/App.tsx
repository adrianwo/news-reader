import { Container } from "react-bootstrap"
import "./App.css"
import News from "./features/news/News"

function App() {
  return (
    <Container className="d-flex flex-column h-100">
      <News />
    </Container>
  )
}

export default App
